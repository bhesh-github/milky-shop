import React from "react";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

const SingleProductDisplayImg = ({ prodcutDisplayUrl }) => {
  const imgUrl = prodcutDisplayUrl.imgUrl;
  const videoUrl = prodcutDisplayUrl.videoUrl && prodcutDisplayUrl.videoUrl;
  const [spLargeImg, setLargeImg] = useState(imgUrl[0]);
  const [sideImgClass, setSideImgClass] = useState('inactive')

  const handleMouseOverImg = (imgUrl) => setLargeImg(imgUrl);
  const handleCheckboxClick = (imgUrlProps) => (
    console.log(imgUrlProps)
    // imgUrl.map((url)=>(
    //   // setSideImgClass('active')
    //   // url === imgUrlProps ? setSideImgClass('active') : setSideImgClass('inactive')
    // ))
  );
  return (
    <div className="single-product-display-img">
      <div className="s-p-display-wrapper">
        <div className="s-p-side-display">
          {imgUrl.map((item, idx) => (
            <img
              className={`s-p-side-display-img ${sideImgClass}`}
              src={item}
              alt="img"
              key={idx}
              onClick={() => {
                handleCheckboxClick(item);
              }}
              onMouseOver={() => {
                handleMouseOverImg(item);
              }}
            />
          ))}
          {videoUrl.thumbnail && (
            <img
              className="video-thumbnail s-p-side-display-img"
              src={videoUrl.thumbnail}
              onMouseOver={() => {
                handleMouseOverImg(videoUrl.thumbnail);
              }}
            />
          )}
        </div>
        <div>{<img className="s-p-large-display-img" src={spLargeImg} />}</div>
      </div>
    </div>
  );
};

export default SingleProductDisplayImg;

SingleProductDisplayImg.defaultProps = {
  prodcutDisplayUrl: {
    imgUrl: [
      "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617I3mDGmTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51OoKCakCfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51lEdIxlNDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/517i7g9q7zL._AC_SL1500_.jpg",
    ],
    videoUrl: {
      thumbnail: "https://i.ytimg.com/vi/TBTgQbjRsqg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=TBTgQbjRsqg",
    },
  },
};
