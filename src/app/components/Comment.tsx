"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import {
  FaRegCommentDots,
  FaShare,
  FaShareAlt,
  FaTelegram,
} from "react-icons/fa";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import avatar from "../../../public/images/avatar.png";
import Like from "./Like";
import { TPost } from "@/types/types";

type PostPops = {
  post: TPost;
};

const Comment = ({ post }: PostPops) => {
  const { data: getMe } = useGetMeQuery(undefined);
  const [showComment, setShowComment] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  // add emoji in comment box
  const addEmoji = (e: { native: string }) => {
    const emoji = e.native;
    setInputValue(inputValue + emoji);
  };

  return (
    <>
      <div className="flex">
        <div className="w-full ">
          <div className="flex items-center justify-between py-5">
            <Like post={post} />
            <div className=" text-center py-2 m-2">
              <span
                onClick={() => setShowComment(!showComment)}
                className=" flex items-center justify-evenly rounded-full  text-slate-400 hover:text-blue-300 hover:cursor-pointer"
              >
                <FaRegCommentDots className="text-xl me-2" />
                {/* <span>{totalComments}</span> */}
              </span>
            </div>
            <div className=" text-center py-2 m-2">
              <span className=" flex items-center justify-evenly rounded-full  text-slate-400 hover:text-blue-300 hover:cursor-pointer">
                <FaShareAlt className="text-xl me-2" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {showComment && (
        <div>
          <form
          //  onSubmit={handleSubmit(onSubmit)}
          >
            <div className="py-2 my-3 bg-gray-800 w-full rounded-lg">
              <div className="flex">
                <div className="m-2 w-10 py-1">
                  <Image
                    height={100}
                    width={100}
                    className="inline-block h-9 w-9 rounded-full"
                    src={getMe?.data?.profileImg || avatar}
                    alt=""
                  />
                </div>
                <div className="flex-1 pt-2 mb-2">
                  <textarea
                    //   {...register("commentText")}
                    onFocus={() => setShowEmoji(false)}
                    rows={2}
                    cols={20}
                    className="bg-transparent text-gray-400 font-medium text-lg w-full outline-none"
                    placeholder="Write a comment..."
                    value={inputValue}
                    // onKeyPress={handleKeyPress}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => setShowEmoji(!showEmoji)}
                  >
                    <BsEmojiLaughing className="text-xl" />
                  </span>
                </div>
                {showEmoji && (
                  <div className="absolute mt-24 ms-10 z-30">
                    <Picker
                      data={data}
                      emojiSize={20}
                      emojiButtonSize={28}
                      onEmojiSelect={addEmoji}
                      maxFrequentRows={0}
                    />
                  </div>
                )}
                {inputValue.trim() === "" ? (
                  <button
                    disabled
                    className=" font-bold mr-2 text-2xl hover:cursor-not-allowed"
                  >
                    <FaTelegram className="text-gray-500" />
                  </button>
                ) : (
                  <button className="font-bold mr-2 text-2xl hover:cursor-pointer ">
                    <FaTelegram className="text-gray-100 hover:text-blue-500" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Comment;
