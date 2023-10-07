import React from "react";
import data from "./data";

const NotifBox = ({ readMessage }) => {
  return (
    <div className="notif-box m-2 p-2">
      <ul className="flex flex-col">
        {data.map((user) => (
          <li
            className={`m-1 p-3 rounded-xl ${
              user.read ? "bg-white" : "bg-VeryLightGrayishBlue"
            }`}
            key={user.id}
          >
            <img src={user.picture} alt="" className="inline w-12 " />
            <h2 className="inline m-1 text-sm font-bold hover:text-DarkGrayishBlue cursor-pointer">
              {" "}
              {user.name}{" "}
            </h2>
            <p className="text-xs inline">
              {user.comment} 
              <span className="font-bold ml-1 text-sm text-DarkGrayishBlue hover:text-GrayishBlue cursor-pointer">
                {user.commentOn} {user.read ? "" : "🔴"}
              </span>
              {user.pictureNotif && (
                <img
                  src={user.pictureNotif}
                  alt=""
                  className="w-12 inline ml-5 "
                />
              )}
            </p>
            <p className="text-xs m-1 text-GrayishBlue">{user.time}</p>
            {user.message && (
              <p className="text-sm m-3 p-3 border text-DarkGrayishBlue">
                {user.message}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotifBox;
