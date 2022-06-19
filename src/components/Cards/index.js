import React from "react";

const Card = (props) => {
  return (
    <div className="card shadow-sm bg-white rounded-3 mx-1 my-1">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "280px",
        }}
      ></div>
      <div className="info py-2 px-3">
        <p className="price mb-0 fw-bold ">NGN {props.price}</p>
        <p className="title mb-0" style={{ color: "#c75c2c" }}>
          {props.title}
        </p>
        <p className="article" style={{ color: "#666666" }}>
          {props.article}
        </p>
      </div>
    </div>
  );
};

export default Card;
