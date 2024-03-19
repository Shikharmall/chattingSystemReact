import React, { useEffect, useState } from "react";
import ChattingTyping from "../components/ChattingTyping";
import SideBar from "../components/SideBar";

export default function ChatPage() {
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

  const [userOpen, setUserOpen] = useState("John Doe");
  const [userOpenDetails, setUserOpenDetails] = useState([{
    name: "John Doe",
    image: "src/image/user4.png",
  }]);

  const currentUserFunc = (name, image) => {
    setUserOpen(name);
    setUserOpenDetails([{ name: name, image: image }]);
  };

  useEffect(() => {
    setUserOpen(userList[0].name);
  }, []);

  console.log(userOpenDetails);

  return (
    <div className="bg-[#a8bcff] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white w-[70vw] h-[80vh] rounded-lg shadow-lg">
        <div className="flex w-full h-full">
          <SideBar
            userList={userList}
            userOpen={userOpen}
            currentUserFunc={currentUserFunc}
          />
          <ChattingTyping userOpenDetails={userOpenDetails} />
        </div>
      </div>
    </div>
  );
}
