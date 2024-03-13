import Link from "next/link";
import { CgMoreO } from "react-icons/cg";
import {
  FaClipboardList,
  FaFacebookMessenger,
  FaHashtag,
  FaHome,
  FaRegBell,
  FaRegBookmark,
  FaUserCheck,
} from "react-icons/fa";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
    icon: <FaHome />,
  },
  {
    path: "/explore",
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    path: "/notification",
    title: "Notification",
    icon: <FaRegBell />,
  },
  {
    path: "/message",
    title: "Message",
    icon: <FaFacebookMessenger />,
  },
  {
    path: "/bookmarks",
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    path: "/lists",
    title: "Lists",
    icon: <FaClipboardList />,
  },
  {
    path: "/profile",
    title: "Profile",
    icon: <FaUserCheck />,
  },
  {
    path: "/more",
    title: "More",
    icon: <CgMoreO />,
  },
];

const Navbar = () => {
  return (
    <div className=" px-2">
      <div className="text-3xl font-bold mb-5 text-orange-500">
        <Link href="/">
          NH <span className="text-sky-400">Social</span>
        </Link>
      </div>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          href={link.path}
          exact={link.path === "/"}
          activeClassName="bg-blue-800 hover:text-blue-300"
        >
          <div className="flex items-center">
            <p className="me-4 text-2xl">{link?.icon}</p>
            <p className="text-lg">{link?.title}</p>
          </div>
        </NavLink>
      ))}
      <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Create Post
      </button>
    </div>
  );
};

export default Navbar;
