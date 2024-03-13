"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Navbar from "../Navbar";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

const LeftSide = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  //   const [loggedUser, isUserLoading, userRefetch] = useUser();

  const handleLogout = () => {
    const toastId = toast.loading("loading...");
    dispatch(logout());
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };

  return (
    <div className="lg:col-span-2 lg:flex flex-col justify-between h-screen text-white py-4 sticky top-0 overflow-hidden hidden">
      {/*left menu*/}
      <Navbar />
      <div className="dropdown dropdown-top">
        <div className="flex items-center">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ">
              <Image
                width={50}
                height={50}
                src="https://images.pexels.com/photos/19033300/pexels-photo-19033300/free-photo-of-metropol-parasol-in-sevilla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile Image"
              />
            </div>
          </label>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {user && user?.name ? user?.name : "Your Name"}
            </p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{user && user?.username ? user?.username : "demo_username"}
            </p>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-gray-800 text-white"
        >
          <li className="my-2">
            <Link href={user ? "/profile" : "/login"}>Profile</Link>
          </li>
          <li className="mb-2">
            {user ? (
              <Link onClick={handleLogout} href="login">
                Logout
              </Link>
            ) : (
              <Link href="login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;