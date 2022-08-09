import './App.css';
import {BsFillPlayFill} from "react-icons/bs"
import {BiFullscreen} from "react-icons/bi"
import { useRef, useState } from 'react';

function App() {
  const videoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const thirdVideoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playbackRate,setPlaybackRate] = useState(1);
  const [showSecondVideo,setShowSecondVideo] = useState(false);
  const [showThirdVideo,setShowThirdVideo] = useState(false);

  // Play and Pause Functionality
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setIsPlaying(true);
      let vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  // Play back speed functionality
  const handlePlaybackRate = () => {
    switch (playbackRate){
      case 1:
        setPlaybackRate(1.5);
        videoRef.current.playbackRate = 1.5;
        break;
      case 1.5:
        setPlaybackRate(2);
        videoRef.current.playbackRate = 2;
        break;
      case 2:
        setPlaybackRate(1);
        videoRef.current.playbackRate = 1;
        break;
      default :
       setPlaybackRate(1);
       break;
    }
  }
  
  // Full screen functionality
  const handleFullScreen = () => {
    videoRef.current.requestFullscreen();
  }

  // scroll to other videos page functionality
  const handleCampStructBtn = () =>  {
    setShowSecondVideo(true)
    setTimeout(() => {
      secondVideoRef.current?.scrollIntoView({ behaviour: 'smooth' });
    }, 0);
  }
  const handleFacebookBasicsBtn = () => {
    setShowThirdVideo(true);
    setTimeout(() => {
      thirdVideoRef.current?.scrollIntoView({ behaviour: 'smooth' });
    }, 0);
  }

  return (
    <div className="app">

      {/* First video page */}
      {showSecondVideo === false & showThirdVideo === false
      ?<div className={`video-page first-video-page`}>
      <section className='video-container'>
        {isPlaying
        ?<video id='video1' onClick={() => videoHandler("pause")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>
        :<video id='video1' onClick={() => videoHandler("play")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>}
        
        <div className='video-seekbar-container'>
          <div style={{ width: `${progress}%` }} className='video-seekbar'></div>
        </div>
        <div className='video-header'>
          <span>{"0" +Math.floor(currentTime / 60) + ":" + "0" + Math.floor(currentTime % 60)} / {"0" +Math.floor(videoTime / 60) + ":" + "0" + Math.floor(videoTime % 60)}</span>
          <button className='video-header-btn'>CC</button>
          <button onClick={handlePlaybackRate} className={playbackRate === 1 ?'video-header-btn':'video-header-btn video-header-btn-clicked'}>{playbackRate}x</button>
          <BiFullscreen onClick={handleFullScreen} className='video-header-icon' />
        </div>
        <h4 className={Math.floor(currentTime % 60) >= 2?'hide':'video-text-overlay'}>Welcome</h4>
        {isPlaying
        ?<></>
        :<button onClick={() => videoHandler("play")} className='video-play-btn'><BsFillPlayFill className='video-play-icon' /></button>
        }
        <button className='btn-footer'>Powered By: <h1 className='btn-footer-text-bold'>videoask</h1></button>
      </section>

      <section className='button-container'>
        <button onClick={handleCampStructBtn} className='btn-option'>
          <span className='btn-option-icon'>A</span>
          <span>Campaign structure</span>
        </button>
        <button onClick={handleFacebookBasicsBtn} className='btn-option'>
          <span className='btn-option-icon'>B</span>
          <span>Learn Facebook basics</span>
        </button>
      </section>
      </div>
      :<></>
      }
      


      {/* Second video page */}
      {showSecondVideo === true
      ?<div ref={secondVideoRef} className='video-page second-video-page'>
      <section className='video-container'>
        {isPlaying
        ?<video id='video1' onClick={() => videoHandler("pause")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>
        :<video id='video1' onClick={() => videoHandler("play")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>}
        
        <div className='video-seekbar-container'>
          <div style={{ width: `${progress}%` }} className='video-seekbar'></div>
        </div>
        <div className='video-header'>
          <span>{"0" +Math.floor(currentTime / 60) + ":" + "0" + Math.floor(currentTime % 60)} / {"0" +Math.floor(videoTime / 60) + ":" + "0" + Math.floor(videoTime % 60)}</span>
          <button className='video-header-btn'>CC</button>
          <button onClick={handlePlaybackRate} className={playbackRate === 1 ?'video-header-btn':'video-header-btn video-header-btn-clicked'}>{playbackRate}x</button>
          <BiFullscreen onClick={handleFullScreen} className='video-header-icon' />
        </div>
        <h4 className={Math.floor(currentTime % 60) >= 2?'hide':'video-text-overlay'}>Funnel 2: freebie or coaching</h4>
        {isPlaying
        ?<></>
        :<button onClick={() => videoHandler("play")} className='video-play-btn'><BsFillPlayFill className='video-play-icon' /></button>
        }
        <button className='btn-footer'>Powered By: <h1 className='btn-footer-text-bold'>videoask</h1></button>
      </section>

      <section className='button-container'>
        <button onClick={handleCampStructBtn} className='btn-download'>
          Download "Campaign structure Guide"
        </button>
        
      </section>
      </div>
      :<></>}

      {/* Third video page */}
      {showThirdVideo === true
      ?<div ref={thirdVideoRef} className='video-page second-video-page'>
      <section className='video-container'>
        {isPlaying
        ?<video id='video1' onClick={() => videoHandler("pause")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>
        :<video id='video1' onClick={() => videoHandler("play")} ref={videoRef} className='video' autoPlay data-qa = "media-player" preload='auto'>
          <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDI3NDk4M30.r8J0NyQiQLA71N-p_0WFx_f45w1QYNjdQKtmTgSK6-XHtVUJbz0hC4_hOl3EQFGMxcNVTadUeDSGhPeJs1nkVLAB6YOC69RxNqIQ3AQlih-5ogkOJ7nxcAKN3VWoGJw9e69JGLvcKskWCz9RtHsXQKswE70q1gSoQMJITvRG5RhM1lfd4E7tlYZkXU_Y0VtJJ7un8J3F1IbYCnHa1wrIFw-QAch9zOqt6GoScuvM6xF9pUdq7ZXey0hdESEnyLDeKKoIyZWccSYjpBcbqyu6YWOl-IT67CKwbEbU4lDjCh9euMkVSbSIrWbcvE1mx_BdKntIdqCW8yqM9s42U8DcE2yT7hcO4iNsWAN1yftigGB90s9wqHJ0re2NgkekDlSX-ubicCBpJacIQNHHAYRdfaWYs9txR_aH3UsgmiI3Jj6_8XD7LrDJvBYNdKa7aZygz7x4uCihisevBNGZgz2SgbvX0lXe5Tx2Fe6L8lQ-jmM6unrLFSWl4HoT9NQMfh3khK02GQNVrUy6KhL7-0WR0TTwzuuAnZWJp2XY0Z2AbGRXRg4c2Wr2xHQnbWg2HrgSDworE1xoePftCAQWNpXhMXNTJS4SVqPsvdO6uZcBsNHEG3ECpvvAAhOph3Jp9V9EJVx6kEkHkAXCB2SAF_165cdXiKySoOi0YPg2MwQ6gZ4'></source>
        </video>}
        
        <div className='video-seekbar-container'>
          <div style={{ width: `${progress}%` }} className='video-seekbar'></div>
        </div>
        <div className='video-header'>
          <span>{"0" +Math.floor(currentTime / 60) + ":" + "0" + Math.floor(currentTime % 60)} / {"0" +Math.floor(videoTime / 60) + ":" + "0" + Math.floor(videoTime % 60)}</span>
          <button className='video-header-btn'>CC</button>
          <button onClick={handlePlaybackRate} className={playbackRate === 1 ?'video-header-btn':'video-header-btn video-header-btn-clicked'}>{playbackRate}x</button>
          <BiFullscreen onClick={handleFullScreen} className='video-header-icon' />
        </div>
        <h4 className={Math.floor(currentTime % 60) >= 2?'hide':'video-text-overlay'}>Funnel 3: Webinar sign up</h4>
        {isPlaying
        ?<></>
        :<button onClick={() => videoHandler("play")} className='video-play-btn'><BsFillPlayFill className='video-play-icon' /></button>
        }
        <button className='btn-footer'>Powered By: <h1 className='btn-footer-text-bold'>videoask</h1></button>
      </section>

      <section className='button-container'>
      <button onClick={handleCampStructBtn} className='btn-download'>
        Sign up for free webinar
      </button>
      </section>
      </div>
      :<></>}
      
    </div>
  );
}

export default App;
