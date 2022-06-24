import React from "react";
import { getLengthArray } from "../../helper/base.helpers";
import SliderCustom from "../Slider";
import SliderArrow from "../Slider/SliderArrow";
import style from "./style.module.css";
import arrLeft from "../../assets/images/arrLeft.png";
import arrRight from "../../assets/images/arrRight.png";
import noImage from "../../assets/images/noImage.png";

const ImageSlide = ({ images }: { images: Array<string> | undefined }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  console.log("currentImage", currentImage);
  React.useEffect(() => {
    return () => {
      console.log("out");
    };
  }, []);

  if (images && getLengthArray(images) > 0)
    return (
      <div
        className="w-full h-[500px] relative border rounded-[5px] bg-white-100"
        style={{
          width: "100%",
          height: "500px",
          position: "relative",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          // border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <SliderCustom
          customSettings={{
            className: `${style.sliderCustom}`,

            arrows: true,
            prevArrow: (
              <SliderArrow
                heightImage={style.heightImage}
                image={arrLeft}
                classNameProps={style.arrLeft}
              />
            ),
            nextArrow: (
              <SliderArrow
                heightImage={style.heightImage}
                image={arrRight}
                classNameProps={style.arrRight}
              />
            ),
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: (index) => {
              console.log("change", index);
              setCurrentImage(index);
            },
          }}
        >
          {images.map((item, index) => {
            return (
              <div
                className="h-[500px]"
                key={index}
                style={{ height: "500px" }}
              >
                <img
                  src={item}
                  className="h-full w-full object-contain"
                  style={{
                    height: "450px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  alt="image"
                />
              </div>
            );
          })}
        </SliderCustom>
        <div className={style.sliderImage}>
          <p
            className="text-white text-center"
            style={{ color: "white", textAlign: "center", margin: "0" }}
          >
            {currentImage + 1}/{getLengthArray(images)}
          </p>
        </div>
      </div>
    );
  else
    return (
      <div
        className="w-full h-[500px] border rounded-[5px] bg-white-100 relative"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "5px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div className="h-[500px]" style={{ height: "500px" }}>
          <img
            src={noImage}
            className="h-full w-full object-cover"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className={style.sliderImage}>
          <p
            className="text-white text-center"
            style={{ color: "white", textAlign: "center", margin: "0" }}
          >
            0/0
          </p>
        </div>
      </div>
    );
};

export default React.memo(ImageSlide);
