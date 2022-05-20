import React from "react";
import "./style.scss";

interface LoadingProps {
  loading: boolean;
}

export const LoadingLMS = (props: LoadingProps) => {
  if (props.loading)
    return (
      <div className="loadingContainer">
        <span className="loader">
          <span className="loader-text">M</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">A</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">R</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">K</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">E</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">T</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">H</span>
          <span className="loader-inner"></span>
        </span>
        <span className="loader">
          <span className="loader-text">D</span>
          <span className="loader-inner"></span>
        </span>
      </div>
    );
  return <></>;
};
