import React, { useState } from "react";
import img from "../image/user.png";

import "../css/scroll.css";

export default function SideBar({
  userList,
  currentUserFunc,
  userOpenDetails,
}) {
  const [search, setSearch] = useState("");

  const filteredUsers = userList.filter((item) => {
    return (
      search.toLowerCase() === "" ||
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-1/4 bg-[#3e3c62] h-[100%] rounded-l-lg flex flex-col">
      <div className="p-3 flex bg-[#2f2c53] rounded-tl-lg justify-between">
        <p className="text-white text-opacity-90 font-semibold hidden lg:inline">
          Chatting System
        </p>
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt="userLogo"
            className="rounded-full w-[30px] h-[30px] mr-3"
          />
          {/*<p className="text-white text-opacity-90 font-semibold text-[12px]">
            Shikhar Mall
          </p>*/}
        </div>
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Find a user"
          className="text-white text-opacity-90 font-normal text-[14px] w-full h-full bg-[#2f2c53] bg-opacity-50 p-3"
          style={{ outline: "none" }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {search === "" ? null : (
          <svg
            fill="#fff"
            width="20px"
            height="20px"
            viewBox="-3.5 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
            className="absolute right-0 top-1 m-1 cursor-pointer"
            onClick={() => {
              setSearch("");
            }}
          >
            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
          </svg>
        )}
      </div>
      <div className="overflow-y-scroll" id="custom-scrollbar">
        {filteredUsers &&
          filteredUsers.map((item, index) => (
            <div
              className={`p-3 flex items-center cursor-pointer ${
                item.name === userOpenDetails[0]?.name ? "bg-[#2f2c53]" : ""
              }`}
              key={index}
              onClick={() => {
                currentUserFunc(item?.name, item?.image, item?.id);
              }}
            >
              <img
                src={item.image}
                alt="userLogo"
                className="rounded-full w-[30px] h-[30px] m-1 mr-3"
              />
              <div className="inline md:hidden">
                <p className="text-white text-opacity-90 font-semibold">
                  {item.name.substring(0, 2).toUpperCase()}
                </p>
              </div>
              <div className="hidden md:inline ">
                <p className="text-white text-opacity-90 font-semibold">
                  {item.name}
                </p>
                <p className="text-white text-opacity-40 font-normal text-[14px]">
                  {item?.lastMessage}
                </p>
              </div>
            </div>
          ))}
      </div>
      {filteredUsers && filteredUsers.length > 0 ? null : (
        <div className={`p-3 flex items-center justify-center bg-[#2f2c53]}`}>
          <div className="flex justify-center items-center">
            <p className="text-white text-opacity-40 font-normal text-[14px]">
              No user found.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
