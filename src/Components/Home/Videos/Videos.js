import React, { useState } from "react";
import "./Videos.css";
import VideosModal from "./VideosModal";
import { PlayArrow } from "@material-ui/icons";
import { VideosData } from "./VideosData";
import VideosAbout from './VideosAbout'
import {Switch, Route} from "react-router-dom"
// const [data, setData] = useState([])
function Videos() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };                                  
  return (
    
    <div className="Videos">
     
      <div className="Videos-News">
        <div className="Videos-head">
          <div className="Videos-News-link">
            <h1>News & updates</h1>
            <a href="#">Read All Files</a>
          </div>
          <div className="News">
            <div className="Head-News">
              <div className="Videos-head-news">
                <span className="dark"></span>
                <img
                  src="./images/bg_1.jpg"
                  className="Videos-news-img"
                />
              </div>

              <h1 className="V-bottom-title">
                <a href="#">JUNE 6, 2019 / ADMISSION, UPDATES</a>
              </h1>
              <a href="#  " className="V-bottom-link">
                Campus Camping and Learning Session
              </a>
            </div>
            <div className="Videos-small">
              <div className="Small-news">
                {VideosData.map((da, id) => (
                  <div className="Videos-small-material">
                    <div className="Videos-small-news">
                      <span className="dark"></span>
                      <img
                        src={da.s_img_url}
                        className="Videos-news-img"
                      />
                    </div>
                    <div className="Videos-small-info">
                      <h1 className="V-bottom-title">
                        <a href="#">{da.s_data}</a>
                      </h1>
                      <a className="V-bottom-link" href="#">
                        {da.s_img_title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="material-videos">
        <div className="Videos-News-link">
          <h1>Videodarslar</h1>
          <a href="#" className>
            View All Videos
          </a>
        </div>
        <div className="players-box">
          {VideosData.map((d, id) => (
            <div className="Video-player" key={id}>
              <img src={d.v_img_url} alt="" />
              <PlayArrow className="video-player-icon" onClick={handleClick} />
            </div>
          ))}
        </div>
      </div>
      <VideosModal show={show} setShow={setShow} />
      
    </div>
  );
}

export default Videos;
