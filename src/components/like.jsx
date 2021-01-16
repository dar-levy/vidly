import { BsHeart, BsHeartFill } from "react-icons/bs";
import React from "react";

const Like = (props) => {
  let like = props.liked ? <BsHeartFill /> : <BsHeart />;
  return like;
};

export default Like;
