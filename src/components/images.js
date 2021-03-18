import React from "react";
import axios from "axios";
import "./home.css";
import FoundImage from "../components/found-image.js";
import { useState } from "react";

function Images() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "SK8B8o5MLRvek2wongv5lmtZ7ZopOb0_oTYvI0h5Jt8"
  );

  const [result, setResult] = useState([]);

  function handleCahnge(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?query=" +
      photo +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <>
      <FoundImage />
      <div className='container'>
        <div className='row centrado'>
          <input
            onChange={handleCahnge}
            type='text'
            name='photo'
            placeholder='beautiful Photos'
            className='busqueda'
            id='miid'
          />

          <div className='actions'>
            <button onClick={handleSubmit} type='submit' className='btng'>
              Find
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-12 images'>
        {result.map((photo) => (
          <img className='pic' src={photo.urls.small} />
        ))}
      </div>
    </>
  );
}

export default Images;
