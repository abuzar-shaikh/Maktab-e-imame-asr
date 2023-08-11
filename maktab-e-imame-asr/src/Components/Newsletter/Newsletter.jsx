import React from "react";
import style from "../Newsletter/Newsletter.css";
import logo12 from "../img/logo12.png";
import logo8 from "../img/logo8.png";
const Newsletter = () => {
  return (
   <div className="News-main-div">
     <div className="Newsletter_main">
      <div className="news_text">
        <h1>Newsletter - Stay tune and get the latest update</h1>
        <p>Far far away, behind the word mountains</p>
      </div>
      <div className="news_logo">
        <div>
        
          <img src={logo12} alt="logo" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Newsletter;
