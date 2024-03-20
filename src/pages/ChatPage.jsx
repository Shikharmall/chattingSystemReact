import React, { createContext, useContext, useEffect, useState } from "react";
import ChattingTyping from "../components/ChattingTyping";
import SideBar from "../components/SideBar";
import userList from "../db/UserData";

//const ChattingHeaderContext = createContext();

export default function ChatPage() {
  const [usersData, setUsersData] = useState([]);
  const [userOpenDetails, setUserOpenDetails] = useState([]);

  const currentUserFunc = (name, image, id) => {
    setUserOpenDetails([{ name: name, image: image, id: id }]);
  };

  useEffect(() => {
    setUsersData([...userList]);
    setUserOpenDetails([
      ...userOpenDetails,
      {
        name: userList[0]?.name,
        image: userList[0]?.image,
        id: userList[0]?.id,
      },
    ]);
  }, []);

  const [messageList, setMessageList] = useState([]);

  const sendMessage = (message, currentTime, id, uploadImage) => {
    setMessageList((prevMessageList) => [
      ...prevMessageList,
      { content: message, time: currentTime, id: id, uploadImage: uploadImage },
    ]);

    setUsersData([
      ...usersData.slice(0, id - 1),
      { ...usersData[id - 1], lastMessage: message },
      ...usersData.slice(id),
    ]);
  };

  const clearChat = (id) => {
    setMessageList((prevList) =>
      prevList.filter((message) => message.id !== id)
    );
    setUsersData([
      ...usersData.slice(0, id - 1),
      { ...usersData[id - 1], lastMessage: "Type a message" },
      ...usersData.slice(id),
    ]);
  };

  console.log(messageList);

  return (
    <div className="bg-[#a8bcff] w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="bg-white w-[90vw] h-[80vh] rounded-lg shadow-lg lg:w-[70vw]">
        <div className="flex w-full h-full">
          <SideBar
            userList={usersData}
            currentUserFunc={currentUserFunc}
            userOpenDetails={userOpenDetails}
            messageList={messageList}
          />
          <ChattingTyping
            userOpenDetails={userOpenDetails}
            sendMessage={sendMessage}
            messageList={messageList}
            clearChat={clearChat}
          />
          {/*<ChattingHeaderContext.Provider
            value={{ userOpenDetails, sendMessage, messageList, clearChat }}
          >
  </ChattingHeaderContext.Provider>*/}
        </div>
      </div>
    </div>
  );
}

//export const useUserContext = () => useContext(UserContext);

//export const useChattingHeaderContext = () => {
//  useContext(ChattingHeaderContext);
//};
