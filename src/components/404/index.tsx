import React from "react";
import "./style.css";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div>
      <h1 className="notfoundTitle">404 Error Page Not Found</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
    </div>
  );
};

export default NotFoundPage;
