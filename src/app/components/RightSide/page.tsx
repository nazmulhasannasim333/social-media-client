import Image from "next/image";

const RightSide = () => {
  const CustomDate: Date = new Date();

  return (
    <div className="lg:col-span-2 h-screen sticky top-0 lg:block hidden">
      {/*right menu*/}

      {/*second-trending tweet section*/}
      <div className="max-w-sm rounded-lg bg-gray-700 overflow-hidden shadow-lg my-4 ms-4">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Trends for you
            </h2>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className=" text-2xl rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg
                className="m-2 h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*first trending tweet*/}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              5,466 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*second trending tweet*/}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Politics . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*third trending tweet*/}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              3 . Rock . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#Facebook</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              5,586 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*forth trending tweet*/}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              4 . Auto Racing . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#Google</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              9,416 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right">
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*show more*/}
        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>
      {/*third-people suggetion to follow section*/}
      <div className="max-w-sm rounded-lg bg-gray-700 overflow-hidden shadow-lg ms-4">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Who to follow
            </h2>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*first person who to follow*/}
        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <Image
                  width={1000}
                  height={1000}
                  className="inline-block w-10 h-10 rounded-full ml-4 mt-2"
                  src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-white">
                  Nahid Khan
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @Nahid123
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <span className=" float-right">
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                Follow
              </button>
            </span>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*second person who to follow*/}
        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <Image
                  width={1000}
                  height={1000}
                  className="inline-block w-10 h-10 rounded-full ml-4 mt-2"
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-white">
                  Md Arman
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @arman321
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <span className=" float-right">
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                Follow
              </button>
            </span>
          </div>
        </div>
        <hr className="border-gray-600" />
        {/*show more*/}
        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>
      <div className="ms-6 my-6">
        <div className="flex-1">
          <span>
            <p className="text-sm leading-6 font-medium text-gray-500">
              Terms Privacy Policy Cookies Imprint Ads info
            </p>
          </span>
        </div>
        <div className="flex-2">
          <p className="text-sm leading-6 font-medium text-gray-600">
            {" "}
            &copy; {CustomDate.getFullYear()} NH Social, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
