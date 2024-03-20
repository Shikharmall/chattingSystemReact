import React, { useEffect, useRef } from "react";
import img from "../image/user.png";

export default function MessageContainer({
  messageList,
  userOpenDetails,
  isImage,
  removeImg,
}) {
  const customScrollbarRef = useRef(null);

  useEffect(() => {
    if (customScrollbarRef.current) {
      customScrollbarRef.current.scrollTop =
        customScrollbarRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <div
      className="w-[100%] h-[80%] lg:h-[83%] flex flex-col overflow-y-scroll"
      id="custom-scrollbar"
      ref={customScrollbarRef}
    >
      {/* h-[80%] */}
      {isImage ? (
        <>
          <div className="w-full h-full flex justify-center items-center p-2 relative">
            <img src={isImage} alt="upload-image" className="h-[100%]" />
            <div
              className="absolute top-2 right-2 bg-black p-3 rounded-full opacity-50 backdrop-blur-xl cursor-pointer"
              onClick={() => {
                //setSelectedFile(null);
                //setPreviewURL(null);
                removeImg();
              }}
            >
              <svg
                fill="#ffffff"
                className="w-4 h-4"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <>
          {messageList &&
            messageList.map((item, index) => (
              <div key={index}>
                {item.id === userOpenDetails[0]?.id ? (
                  <>
                    <div className="my-2 flex justify-end items-end">
                      {item?.uploadImage ? (
                        <>
                          <div
                            className="p-2 bg-blue-500 mr-2 ml-1 rounded-tr-lg rounded-bl-lg flex flex-col justify-center"
                            style={{ maxWidth: "200px" }}
                          >
                            <div>
                              <img
                                src={item.uploadImage}
                                alt="image-send"
                                className="h-[100px]"
                              />
                            </div>
                            <p className="flex justify-between justify-center items-end p-1 text-[14px]">
                              <span className="text-white text-opacity-90 font-semibold mr-2">
                                {item.content}
                              </span>
                              <span className="text-white text-opacity-90 font-semibold  bg-blue-500 ml-2 rounded-tl-lg rounded-br-lg text-[10px]">
                                {item.time}
                              </span>
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="p-2 bg-blue-500 mr-2 ml-1 rounded-tr-lg rounded-bl-lg flex flex-col justify-center"
                            style={{ maxWidth: "200px" }}
                          >
                            <p className="flex justify-between justify-center items-end p-1 text-[14px]">
                              <span className="text-white text-opacity-90 font-semibold mr-0">
                                {item.content}
                              </span>
                              <span className="text-white text-opacity-90 font-semibold  bg-blue-500 ml-1 rounded-tl-lg rounded-br-lg text-[10px]">
                                {item.time}
                              </span>
                            </p>
                          </div>
                        </>
                      )}
                      <img
                        src={img}
                        alt="userLogo"
                        className="rounded-full w-[30px] h-[30px] mr-3"
                      />
                    </div>
                    {item?.uploadImage ? null : (
                      <div
                        className="my-2 flex justify-start items-center"
                        style={{ maxWidth: "200px" }}
                      >
                        <img
                          src={userOpenDetails[0].image}
                          alt="userLogo"
                          className="rounded-full w-[30px] h-[30px] ml-3"
                        />
                        <div
                          className="p-2 bg-blue-500 ml-2 mr-1 rounded-tr-lg rounded-bl-lg flex flex-col justify-center"
                          style={{ maxWidth: "200px" }}
                        >
                          <p className="flex justify-between justify-center items-end p-1 text-[14px]">
                            <span className="text-white text-opacity-90 font-semibold mr-0">
                              {item.content}
                            </span>
                            <span className="text-white text-opacity-90 font-semibold  bg-blue-500 ml-1 rounded-tl-lg rounded-br-lg text-[10px]">
                              {item.time}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            ))}
        </>
      )}
    </div>
  );
}
