import React, { useEffect, useState } from "react";
import ChattingTyping from "../components/ChattingTyping";
import SideBar from "../components/SideBar";
import userList from "../db/UserData";

export default function ChatPage() {
  const [userOpenDetails, setUserOpenDetails] = useState([]);

  const currentUserFunc = (name, image) => {
    setUserOpenDetails([{ name: name, image: image }]);
  };

  useEffect(() => {
    setUserOpenDetails([
      ...userOpenDetails,
      { name: userList[0]?.name, image: userList[0]?.image },
    ]);
  }, []);

  const [messageList, setMessageList] = useState([]);

  const sendMessage = (message, currentTime) => {
    setMessageList((prevMessageList) => [
      ...prevMessageList,
      { content: message, time: currentTime },
    ]);
  };

  return (
    <div className="bg-[#a8bcff] w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="bg-white w-[70vw] h-[80vh] rounded-lg shadow-lg ">
        <div className="flex w-full h-full">
          <SideBar
            userList={userList}
            currentUserFunc={currentUserFunc}
            userOpenDetails={userOpenDetails}
          />
          <ChattingTyping
            userOpenDetails={userOpenDetails}
            sendMessage={sendMessage}
            messageList={messageList}
          />
        </div>
      </div>
    </div>
  );
}
