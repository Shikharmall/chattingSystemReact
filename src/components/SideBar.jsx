import React, { useState } from "react";


import "../css/scroll.css";

export default function SideBar() {
  const userList = [
    {
      name: "John Doe",
      image: "src/image/user1.png",
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
      image: "src/image/user1.png",
    },
    {
      name: "Sarah Davis",
      image: "src/image/user1.png",
    },
    {
      name: "Matthew Wilson",
      image: "https://example.com/matthew.jpg",
    },
    {
      name: "Olivia Taylor",
      image: "https://example.com/olivia.jpg",
    },
    {
      name: "Christopher Martinez",
      image: "https://example.com/christopher.jpg",
    },
  ];

  //const [users, setUsers] = useState([]);
  return (
    <div className="w-1/4 bg-[#3e3c62] h-[100%] rounded-l-lg flex flex-col">
      <div className="p-3 flex bg-[#2f2c53] rounded-tl-lg">
        <p className="text-white text-opacity-90 font-semibold">
          Chatting System
        </p>
      </div>
      <div className=" flex">
        <input
          type="text"
          placeholder="Find a user"
          className="text-white text-opacity-90 font-normal text-[14px] w-full h-full bg-[#2f2c53] bg-opacity-50 p-3"
          style={{ outline: "none" }}
        />
      </div>
      <div className="overflow-y-scroll" id="custom-scrollbar">
        {userList.map((item, index) => (
          <div
            className={`p-3 flex items-center ${
              index === 3 ? "bg-[#2f2c53]" : ""
            }`}
            key={index}
          >
            <img
              src={item.image}
              alt="userLogo"
              className="rounded-full w-[30px] h-[30px] m-1 mr-3"
            />
            <p className="text-white text-opacity-90 font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
