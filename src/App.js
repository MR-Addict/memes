import React, { useEffect, useState } from "react";

import "./App.css";
import MemeCard from "./MemeCard";

const API_URL = "https://meme-api.herokuapp.com/gimme/12";

const App = () => {
  const [memes, setMemes] = useState([]);
  const getMemes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMemes(data.memes);
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className='App'>
      <div className='header'>
        <h1>Memes Generator</h1>
      </div>
      {memes?.length > 0 ? (
        <>
          <div className='memes'>
            {memes.map((meme) => (
              <MemeCard meme={meme}></MemeCard>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2>Memes On The Way...</h2>
        </div>
      )}
      <div className='footer'>
        <button onClick={() => window.location.reload()}>Refresh</button>
        <footer>&copy; Copyright {new Date().getFullYear()} MR-Addict</footer>
      </div>
    </div>
  );
};

export default App;
