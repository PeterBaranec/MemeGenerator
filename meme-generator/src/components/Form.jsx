import { useEffect, useState } from "react";
import "../components/Form.css";

function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text" className="form__label">
            Top Text
          </label>
          <input
            name="topText"
            value={meme.topText}
            onChange={handleChange}
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
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
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
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="random meme image"
          className="meme__image"
        />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Form;
