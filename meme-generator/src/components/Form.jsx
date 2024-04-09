import { useState } from "react";
import "../components/Form.css";
import memeData from "../memesData.js";

function Form() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(e) {
    e.preventDefault();
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text" className="form__label">
            Top Text
          </label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form__input"
          />
        </div>
        <div>
          <label htmlFor="bottom-text" className="form__label">
            Bottom Text
          </label>
          <input
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form__input"
          />
        </div>
        <button onClick={getMemeImage} className="form__btn">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} alt="random meme image" className="meme__image" />
    </main>
  );
}

export default Form;
