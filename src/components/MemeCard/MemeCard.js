import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./MemeCard.css";
import likes from "./likes.svg";

const MemeCard = ({ meme }) => {
  return (
    <div className='meme'>
      <div className='image'>
        <a href={meme.postLink}>
          <LazyLoadImage alt='meme' src={meme.url} effect='blur' height={300} />
        </a>
      </div>
      <div className='text'>
        <div className='title'>{meme.title}</div>
        <div className='details'>
          <div className='author'>{meme.author}</div>
          <div className='likes'>
            <img src={likes} alt='likes' />
            <span>{meme.ups}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
