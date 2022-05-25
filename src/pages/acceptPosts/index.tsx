import React from "react";
import Slider from "react-slick";
import usePost from "../../store/post";
import "./style.css";
type Props = {};

const AcceptPost = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
    </div>
  );
};

export default AcceptPost;
