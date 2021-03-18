import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function FoundImage() {
  return (
    <>
      <div className='bg'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='text-center '>
              <FontAwesomeIcon className='camera centrado ' icon={faCamera} />
              <h1>Search Photos</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoundImage;
