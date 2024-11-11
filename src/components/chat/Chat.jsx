import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [inputText, setInputText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setInputText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>User Name</span>
            <p>User Description</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>
              Minecraft is a 3D sandbox adventure game developed by Mojang
              Studios where players can interact with a fully customizable
              three-dimensional world made of blocks and entities. Its diverse
              gameplay options allow players to choose the way they play,
              creating countless possibilities.
            </p>
            <span>1 mins age</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Minecraft is a 3D sandbox adventure game developed by Mojang
              Studios where players can interact with a fully customizable
              three-dimensional world made of blocks and entities. Its diverse
              gameplay options allow players to choose the way they play,
              creating countless possibilities.
            </p>
            <span>1 mins age</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>
              Minecraft is a 3D sandbox adventure game developed by Mojang
              Studios where players can interact with a fully customizable
              three-dimensional world made of blocks and entities. Its diverse
              gameplay options allow players to choose the way they play,
              creating countless possibilities.
            </p>
            <span>1 mins age</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>
              Minecraft is a 3D sandbox adventure game developed by Mojang
              Studios where players can interact with a fully customizable
              three-dimensional world made of blocks and entities. Its diverse
              gameplay options allow players to choose the way they play,
              creating countless possibilities.
            </p>
            <span>1 mins age</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="buttom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
