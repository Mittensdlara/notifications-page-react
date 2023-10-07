import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import NotifBox from "./NotifBox";
function App() {
  const [readMessage, setReadMessage] = useState(false);

  const handleReadAll = () => {
    setReadMessage(true);
  };
  return (
    <div className="App mt-4 ">
      <div className="container bg-white m-auto p-4 rounded-2xl lg:w-5/12 md:w-7/12 xs:w-10/12 ">
        <div className="navbar justify-between flex ">
          <h1 className="font-bold text-xl">
            Notifications{" "}
            <span className=" mx-2 px-2 bg-VeryDarkBlue text-white rounded-md">
              {readMessage ? "0" : "3"}
            </span>
          </h1>

          <p
            className=" text-DarkGrayishBlue hover:cursor-pointer hover:text-VeryDarkBlue"
            onClick={() => handleReadAll()}
          >
            Mark all as read
          </p>
        </div>
        <NotifBox readMessage={readMessage}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
