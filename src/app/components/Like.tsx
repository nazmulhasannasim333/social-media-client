"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = () => {
  const [showLike, setShowLike] = useState(false);

  return (
    <div className=" text-center py-2 m-2">
      <span className=" flex items-center justify-evenly rounded-full text-slate-400 hover:text-red-400 hover:cursor-pointer">
        {showLike === false ? (
          <div
            //   onClick={() => handleLike(post._id)}
            className="flex items-center"
          >
            <FaRegHeart className="text-lg me-2" />
            {/* <span>{totalLikes && totalLikes}</span> */}
          </div>
        ) : (
          <div
            //   onClick={() => handleUnlike(post._id)}
            className="flex items-center"
          >
            <FaHeart className="text-lg me-2 text-red-400" />
            <span className="text-red-400">
              {/* {totalLikes && totalLikes} */}
            </span>
          </div>
        )}
      </span>
    </div>
  );
};

export default Like;
