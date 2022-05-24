import React from "react";
import usePost from "../../store/post";
import "./style.css";
type Props = {};

const AcceptPost = (props: Props) => {
  const [statePost] = usePost();
  return (
    <div>
      <div className="postWrapper">
        <div className="postContent">123asdsd</div>
      </div>
    </div>
  );
};

export default AcceptPost;
