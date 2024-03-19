import React, { useState } from "react";
import img from "../image/user.png";

import "../css/scroll.css";

export default function SideBar() {
  const userList = [
    {
      name: "John Doe",
      image: "src/image/user4.png",
    },
    {
      name: "Jane Smith",
      image: "src/image/user2.png",
    },
    {
      name: "Michael Johnson",
      image: "src/image/user3.png",
    },
    {
      name: "Emily Williams",
      image: "src/image/user1.png",
    },
    {
      name: "David Brown",
      image: "src/image/user5.png",
    },
    {
      name: "Sarah Davis",
      image: "src/image/user7.png",
    },
    {
      name: "Matthew Wilson",
      image: "src/image/user6.png",
    },
    {
      name: "Olivia Taylor",
      image: "src/image/user8.png",
    },
    {
      name: "Christopher Martinez",
      image: "src/image/user9.png",
    },
  ];

  const [userOpen, setUserOpen] = useState(0);
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
        <p className="text-white text-opacity-90 font-semibold">
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
      <div className=" flex">
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
      </div>
      <div className="overflow-y-scroll" id="custom-scrollbar">
        {filteredUsers &&
          filteredUsers.map((item, index) => (
            <div
              className={`p-3 flex items-center cursor-pointer ${
                index === userOpen ? "bg-[#2f2c53]" : ""
              }`}
              key={index}
              onClick={() => {
                setUserOpen(index);
              }}
            >
              <img
                src={item.image}
                alt="userLogo"
                className="rounded-full w-[30px] h-[30px] m-1 mr-3"
              />
              <div>
                <p className="text-white text-opacity-90 font-semibold">
                  {item.name}
                </p>
                <p className="text-white text-opacity-40 font-normal text-[14px]">
                  Hello bhai
                </p>
              </div>
            </div>
          ))}
      </div>
      {filteredUsers.length > 0 ? null : (
        <div className={`p-3 flex items-center${1 ? "bg-[#2f2c53]" : ""}`}>
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
