import React from "react";

import Memes from "./components/Memes/Memes";

const App = () => {
  return (
    <>
      <h1 className='header'>Memes Generator</h1>
      <Memes />
      <footer>&copy; Copyright {new Date().getFullYear()} MR-Addict</footer>
    </>
  );
};

export default App;
