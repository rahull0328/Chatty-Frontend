import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Stanford <img src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat-msg">
        <div className="send-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum quibusdam nisi fugiat quasi dolorum. Ullam, reiciendis sapiente soluta esse sequi numquam distinctio aliquid reprehenderit eveniet, nulla laudantium voluptatibus id.</p>
          <div>
            <img src={assets.profile_img} alt="profile_image" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="rec-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum quibusdam nisi fugiat quasi dolorum. Ullam, reiciendis sapiente soluta esse sequi numquam distinctio aliquid reprehenderit eveniet, nulla laudantium voluptatibus id.</p>
          <div>
            <img src={assets.profile_img} alt="profile_image" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a Message...." />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="gallery" />
        </label>
        <img src={assets.send_button} alt="send" />
      </div>
    </div>
  );
};

export default ChatBox;
