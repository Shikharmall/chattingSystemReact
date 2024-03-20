import React, { useEffect, useState } from "react";
import "../css/scroll.css";
import MessageContainer from "./MessageContainer";
import ChattingHeader from "./ChattingHeader";

export default function ChattingTyping({
  userOpenDetails,
  sendMessage,
  messageList,
}) {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0"); // Ensure two digits, pad with leading zero if necessary
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Ensure two digits, pad with leading zero if necessary
    return `${hours}:${minutes}`;
  };

  const [message, setMessage] = useState("");

  /*useEffect(() => {
    document.querySelector("custom-scrollbar").style.scrollBehavior = "auto";
    window.scroll({ bottom: 0 });
    document.querySelector("custom-scrollbar").style.scrollBehavior = "";
  }, [messageList]); */

  useEffect(() => {
    const customScrollbar = document.getElementById("custom-scrollbar");
    console.log(customScrollbar);
    customScrollbar.style.scrollBehavior = "auto";
    window.scroll({ top: customScrollbar.scrollHeight, behavior: "auto" });
    customScrollbar.style.scrollBehavior = "";
    /*if (customScrollbar) {
    }*/
    // console.log("Message list updated");
  }, [messageList]);

  return (
    <div className="w-3/4 h-[100%] relative">
      <ChattingHeader userOpenDetails={userOpenDetails} />

      <MessageContainer
        messageList={messageList}
        userOpenDetails={userOpenDetails}
      />

      <div className="absolute bottom-0 left-0 w-full border-none outline-none focus:ring-none focus:outline-none ">
        <div className="relative h-[50px]">
          <input
            placeholder="Type a message"
            className="bg-gray-300 w-full h-full p-3 rounded-br-lg pr-14"
            style={{ outline: "none" }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <label htmlFor="document">
            <svg
              width=" 25px"
              height="25px"
              className="absolute right-16 top-0 m-3 cursor-pointer"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M12.021 4.234v8.498h-1v-8.498c0-1.091-0.799-2.266-2.554-2.266-1.941 0-2.459 1.424-2.459 2.266v8.121h0.007v1.457c0 0.62 0.693 1.206 1.426 1.206 0.844 0 1.567-0.683 1.567-1.241v-0.27h-0.003l0.008-7.617c0-0.874-0.247-0.874-0.466-0.874-0.369 0-0.547 0.035-0.547 0.823v5.146h-1v-5.146c0-0.451 0-1.823 1.547-1.823 0.669 0 1.466 0.325 1.466 1.875l-0.007 6.43h0.002v1.457c0 1.173-1.224 2.241-2.567 2.241-1.292 0-2.426-1.031-2.426-2.206v-0.074h-0.007v-9.505c0-1.573 1.082-3.266 3.459-3.266 2.333 0.001 3.554 1.643 3.554 3.266z"
                fill="#fff"
              />
            </svg>
          </label>

          <input
            type="file"
            //accept="image/*"
            accept=".doc, .docx, .pdf, .txt, .rtf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/plain, application/rtf"
            id="document"
            className="hidden"
          />

          <label htmlFor="image">
            <svg
              width=" 25px"
              height="25px"
              viewBox="0 0 15 15"
              fill="none"
              className="absolute right-10 top-0 m-3 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"
                fill="#ffffff"
              />
            </svg>
          </label>

          <input type="file" accept="image/*" id="image" className="hidden" />

          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute right-0 top-0 m-2 cursor-pointer bg-gray-400 rounded-full p-2"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              sendMessage(
                message,
                getCurrentTime(),
                userOpenDetails[0]?.id
              );
              setMessage("");
            }}
          >
            <g clip-path="url(#clip0_429_11051)">
              <path
                d="M5 12L4.39589 6.56299C4.22297 5.0067 5.82469 3.86433 7.23983 4.53465L19.1842 10.1925C20.7093 10.9149 20.7093 13.0851 19.1842 13.8075L7.23983 19.4653C5.82469 20.1357 4.22297 18.9933 4.39589 17.437L5 12ZM5 12H12"
                stroke="#fff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11051">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
