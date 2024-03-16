"use client";
import React, { useState } from "react";
import Comment from "./Comment";
import Image from "next/image";
import EditPost from "./EditPost";
import moment from "moment";
import { TPost } from "@/types/types";
import verified from "../../../public/images/verified.png";
import { useGetUserInfoQuery } from "@/redux/features/user/userApi";
import { useAllPostByUserIdQuery } from "@/redux/features/post/postApi";
import avatar from "../../../public/images/avatar.png";

const ProfilePosts = ({ params }: any) => {
  const { data: userInfo } = useGetUserInfoQuery(params?._id);
  const { data: userProfilePost, isFetching } = useAllPostByUserIdQuery(
    params?._id
  );
  const [editModes, setEditModes] = useState<{ [postId: string]: boolean }>({});

  // handle "Edit" button click
  const handleEditClick = (postId: string) => {
    setEditModes((prevEditModes) => ({
      ...prevEditModes,
      [postId]: !prevEditModes[postId], // Toggle the edit mode for this post
    }));
  };

  if (isFetching) {
    <>
      <div className="space-y-5 bg-slate-900 px-4 my-8 animate-pulse">
        <div className="flex justify-start items-center">
          <div className="h-10 w-10 rounded-full bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-2/6 ms-3 rounded-lg bg-rose-100/10 animate-pulse"></div>
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
        </div>
        <div className="h-72 rounded-lg bg-rose-100/10 animate-pulse"></div>
      </div>
      <hr className="border-gray-600" />
      <div className="space-y-5 bg-slate-900 px-4 my-8 animate-pulse">
        <div className="flex justify-start items-center">
          <div className="h-10 w-10 rounded-full bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-2/6 ms-3 rounded-lg bg-rose-100/10 animate-pulse"></div>
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
        </div>
        <div className="h-72 rounded-lg bg-rose-100/10 animate-pulse"></div>
      </div>
      <hr className="border-gray-600" />
      <div className="space-y-5 bg-slate-900 px-4 my-8 animate-pulse">
        <div className="flex justify-start items-center">
          <div className="h-10 w-10 rounded-full bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-2/6 ms-3 rounded-lg bg-rose-100/10 animate-pulse"></div>
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
        </div>
        <div className="h-72 rounded-lg bg-rose-100/10 animate-pulse"></div>
      </div>
      <hr className="border-gray-600" />
      <div className="space-y-5 bg-slate-900 px-4 my-8 animate-pulse">
        <div className="flex justify-start items-center">
          <div className="h-10 w-10 rounded-full bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-2/6 ms-3 rounded-lg bg-rose-100/10 animate-pulse"></div>
        </div>
        <div className="space-y-3">
          <div className="h-3 w-3/5 rounded-lg bg-rose-100/10 animate-pulse"></div>
          <div className="h-3 w-4/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
          <div className="h-3 w-2/5 rounded-lg bg-rose-100/20 animate-pulse"></div>
        </div>
        <div className="h-72 rounded-lg bg-rose-100/10 animate-pulse"></div>
      </div>
      <hr className="border-gray-600" />
    </>;
  }

  return (
    <>
      {userProfilePost?.data?.map((post: TPost) => (
        <div key={post._id} className="">
          <div className=" flex items-center justify-between p-4 pb-0 relative">
            <div className="flex items-center">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-full"
                  src={post?.userId?.profileImg || avatar}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="flex items-center gap-1">
                  <p className="text-base leading-6 font-medium text-white">
                    {post?.userId?.name}
                  </p>
                  {userInfo && userInfo?.data?.profileImg && (
                    <Image
                      width={100}
                      height={100}
                      className="h-3.5 w-3.5 rounded-full"
                      src={verified}
                      alt="verified"
                      title="NH Social confirmed this profile is authentic"
                    />
                  )}
                </div>
                <span className="text-sm leading-6 ms-1 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {userInfo?.dat?.username} -{" "}
                  {moment(post?.createdAt).format("Do MMM  YY, h:mm a")}
                </span>
              </div>
            </div>
            <div
              onClick={() => handleEditClick(post._id)}
              className="font-semibold text-xl hover:cursor-pointer hover:text-blue-400"
            >
              ...
            </div>
            <EditPost
              editModes={editModes[post._id] || false}
              setEditModes={(postId) => handleEditClick(postId)}
              post={post}
            />
          </div>
          <div className="pl-16 pr-2">
            <p
              className="text-base width-auto font-medium text-white flex-shrink"
              style={{ whiteSpace: "pre-line" }}
            >
              {post?.postText}
            </p>
            {post.postPhoto && (
              <div className="md:flex-shrink pr-6 pt-3">
                <Image
                  height={1000}
                  width={1000}
                  className="rounded-lg h-full w-full"
                  src={post?.postPhoto}
                  alt="Photo is brocken"
                />
              </div>
            )}
            <Comment post={post} />
          </div>
          <hr className="border-gray-600" />
        </div>
      ))}
    </>
  );
};

export default ProfilePosts;
