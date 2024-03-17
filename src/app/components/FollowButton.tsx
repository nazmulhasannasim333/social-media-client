"use client";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useCheckFollowQuery,
  useCreateFollowMutation,
} from "@/redux/features/follow/followApi";
import { useAppSelector } from "@/redux/hooks";
import { TUser } from "@/types/types";
import React, { useEffect, useState } from "react";

const FollowButton = ({ rUser }: { rUser: TUser }) => {
  const user = useAppSelector(selectCurrentUser);
  const { data: checkFollow } = useCheckFollowQuery(user?.userId || "");
  const [addFollow] = useCreateFollowMutation();
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = async (followerUserId: string) => {
    const followData = { followingUserId: user?.userId, followerUserId };
    await addFollow(followData);
  };

  //  check current logged user follow witch users
  useEffect(() => {
    const followedFields = checkFollow?.data?.map((follow: any) => follow);
    const checkFollowed = followedFields?.includes(rUser._id);
    setIsFollow(checkFollowed);
  }, [checkFollow, rUser._id]);

  return (
    <button
      onClick={() => handleFollow(rUser._id)}
      className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-3 border border-white hover:border-transparent rounded-full"
    >
      {isFollow ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
