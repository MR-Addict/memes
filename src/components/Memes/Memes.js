import React, { useEffect, useState } from "react";

import MemeCard from "../MemeCard/MemeCard";
import "./Memes.css";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const getMemes = async () => {
    const API_URL = "https://meme-api.herokuapp.com/gimme/12";
    const response = await fetch(API_URL);
    const data = await response.json();
    setMemes(data.memes);
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className='memes'>
      <div className='memes-body'>
        {memes.length > 0 ? (
          memes.map((meme) => <MemeCard key={Math.random()} meme={meme}></MemeCard>)
        ) : (
          <h2>Memes On The Way...</h2>
        )}
      </div>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Memes;
