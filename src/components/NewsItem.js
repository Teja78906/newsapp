import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import './NewsItem.css'
const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleRotateClockwise = () => {
    setRotationAngle(rotationAngle - 360);
  };

  const handleRotateAntiClockwise = () => {
    setRotationAngle(rotationAngle + 360);
  };


  return (
    <div className="my-3">
      <div className='card text-white bg-dark' style={{ transform: `rotateY(${rotationAngle}deg)`, boxShadow: '0px 2px 8px 0px black'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
          {source ? source : "UnKnown"}
        </span>
        <img src={imageUrl} className="card-img-top" width={100} height={180} alt="unknown" />
        <div className="card-body" style={{ height: "340px" }}>
          <h5 className="card-title">
            {title.length > 91 ? `${title.slice(0, 91)}...` : title}
          </h5>
          <p className="card-text" style={{ whiteSpace: "pre-line" }}>
            {description.length === 0
              ? "unknown".padEnd(84).replace(/ /g, "\u00A0")
              : description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {date ? new Date(date).toGMTString() : "0000-00-00T00:00:00Z"}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-danger">
            Read More
          </a>
        </div>
        <div className="card-buttons">
          <FaArrowAltCircleLeft className="rotate-left" onClick={handleRotateClockwise} />
          <FaArrowAltCircleRight className="rotate-right" onClick={handleRotateAntiClockwise} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
