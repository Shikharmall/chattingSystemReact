import React from "react";
import ChattingTyping from "../components/ChattingTyping";
import SideBar from "../components/SideBar";

export default function ChatPage() {
  return (
    <div className="bg-[#a8bcff] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white w-[70vw] h-[80vh] rounded-lg shadow-lg">
        <div className="flex w-full h-full">
          <SideBar />
          <ChattingTyping />
        </div>
      </div>
    </div>
  );
}
