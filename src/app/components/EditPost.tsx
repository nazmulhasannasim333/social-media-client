"use client";

import { TPost } from "@/types/types";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import PostModal from "./PostModal";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

type PostPops = {
  post: TPost;
};

const EditPost = ({ post }: PostPops) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  // delete a post
  const handleDelete = (selectedPost: TPost) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to delete this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return (
    <>
      <div className="bg-slate-800 p-3 absolute right-10 top-12 z-50">
        <ul>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:cursor-pointer"
          >
            <FaEdit />
            <span className="ms-2">Edit Post</span>
          </li>
          <li
            onClick={() => handleDelete(post)}
            className="flex items-center mt-2 hover:cursor-pointer"
          >
            <FaTrash />
            <span className="ms-2">Delete Post</span>
          </li>
          <PostModal isOpen={isOpen} setIsOpen={setIsOpen} post={post} />
        </ul>
      </div>
    </>
  );
};

export default EditPost;
