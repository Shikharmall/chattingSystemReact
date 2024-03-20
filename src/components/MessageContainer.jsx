import React from "react";
import img from "../image/user.png";

export default function MessageContainer({ messageList, userOpenDetails }) {
  return (
    <div
      className="w-[100%] h-[83%] flex flex-col overflow-y-scroll"
      id="custom-scrollbar"
    >
      {messageList &&
        messageList.map((item, index) => (
          <div key={index}>
            {item.userId === userOpenDetails[0]?.userId ? (
              <>
                <div className="my-2 flex justify-end items-center">
                  <p className="text-white text-opacity-90 font-semibold p-2 bg-blue-500 mr-2 rounded-tr-lg rounded-bl-lg text-[14px]">
                    {item.content}
                    <span className="text-white text-opacity-90 font-semibold p-2 bg-blue-500 ml-2 rounded-tl-lg rounded-br-lg text-[10px]">
                      {item.time}
                    </span>
                  </p>
                  <img
                    src={img}
                    alt="userLogo"
                    className="rounded-full w-[30px] h-[30px] mr-3"
                  />
                </div>

                <div className="my-2 flex justify-start items-center">
                  <img
                    src={userOpenDetails[0].image}
                    alt="userLogo"
                    className="rounded-full w-[30px] h-[30px] ml-3"
                  />
                  <p className="text-white text-opacity-90 font-semibold p-2 bg-blue-500 ml-2 rounded-tl-lg rounded-br-lg text-[14px]">
                    {item.content}
                    <span className="text-white text-opacity-90 font-semibold p-2 bg-blue-500 ml-2 rounded-tl-lg rounded-br-lg text-[10px]">
                      {item.time}
                    </span>
                  </p>
                </div>
              </>
            ) : null}
          </div>
        ))}
    </div>
  );
}
