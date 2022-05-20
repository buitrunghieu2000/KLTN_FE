import React, { useState } from "react";
import postApi from "../../api/post/postApi";
import { POST_MODEL } from "../../models/post.model";
import usePost from "../../store/post";
import "./style.css";
type Props = {};

const AcceptPost = (props: Props) => {
  const [statePost] = usePost();
  return (
    <div>
      <div className="postWrapper">
        <div className="postImgaes">{statePost.postDetail?.prePrice}</div>
        <div className="postContent">123asdsd</div>
      </div>
    </div>
  );
};

export default AcceptPost;
