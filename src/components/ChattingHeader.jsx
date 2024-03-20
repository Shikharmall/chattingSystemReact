import React, { useEffect, useRef, useState } from "react";

export default function ChattingHeader({ userOpenDetails, clearChat }) {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

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
      <div className="relative">
        <svg
          fill="#fff"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 52 52"
          enableBackground="new 0 0 52 52" // Corrected attribute name
          xmlSpace="preserve" // Corrected attribute name
          onClick={() => {
            setOpen(!open);
            console.log("open state:", open);
          }}
        >
          <path
            d="M8,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S4.7,20,8,20z M26,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6
	S22.7,20,26,20z M44,20c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S40.7,20,44,20z"
          />
        </svg>

        {open ? (
          <div
            className={`absolute top-7 right-0 w-[200px] h-[120px] justify-center flex flex-col bg-gray-100 overflow-hidden cursor-pointer rounded-lg shadow-md transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            //ref={ref}
          >
            <p
              className="p-2 flex text-gray-400 font-semibold hover:bg-gray-300 text-sm"
              onClick={() => {
                clearChat(userOpenDetails[0]?.id);
              }}
            >
              Clear Chat
            </p>
            <p className="p-2 flex text-gray-400 font-semibold hover:bg-gray-300 text-sm">
              Delete
            </p>
            <p className="p-2 flex text-gray-400 font-semibold hover:bg-gray-300 text-sm">
              Settings
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
