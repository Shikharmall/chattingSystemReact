import React from "react";

export default function ChattingHeader({userOpenDetails}) {
  return (
    <div className="p-2 flex bg-[#5f5b8e] rounded-tr-lg justify-between items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src={userOpenDetails[0]?.image}
          alt="userLogo"
          className="rounded-full w-[30px] h-[30px] mr-3"
        />
        <p className="text-white text-opacity-90 font-semibold ">
          {userOpenDetails[0]?.name}
        </p>
      </div>
      <div>
        <svg
          fill="#fff"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 52 52"
          enable-background="new 0 0 52 52"
          xml:space="preserve"
        >
          <path
            d="M8,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S4.7,20,8,20z M26,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6
	S22.7,20,26,20z M44,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S40.7,20,44,20z"
          />
        </svg>
      </div>
    </div>
  );
}
