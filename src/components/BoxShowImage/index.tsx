import React from "react";
import Slider, { Settings } from "react-slick";
import styles from "./styles.module.css";

const BoxShowImage = ({
  images,
  setImages,
}: {
  images: Array<string>;
  setImages: React.Dispatch<React.SetStateAction<Array<string>>>;
}) => {
  const [navMain, setNavMain] = React.useState<Slider | null>(null);
  const [navThumb, setNavThumb] = React.useState<Slider | null>(null);
  const [sliderMain, setSliderMain] = React.useState<Slider | null>(null);
  const [sliderThumb, setSliderThumb] = React.useState<Slider | null>(null);
  const [currentShowImageIndex, setCurrentShowImageIndex] = React.useState(1);

  React.useEffect(() => {
    setNavMain(sliderMain);
    setNavThumb(sliderThumb);
  }, [sliderMain, sliderThumb]);

  const settings: Settings = {
    swipeToSlide: false,
    prevArrow: (
      <SliderArrow
        image="/src/assets/left-arrow.svg"
        classNameProps={styles.prevArrow}
      />
    ),
    nextArrow: (
      <SliderArrow
        image="/src/assets/right-arrow.svg"
        classNameProps={styles.nextArrow}
      />
    ),
    afterChange: (slide) => setCurrentShowImageIndex(slide),
    asNavFor: navThumb as Slider,
    className: "h-full",
  };

  const thumbSettings: Settings = {
    // dots: true,
    arrows: false,
    afterChange: (slide) => setCurrentShowImageIndex(slide),
    slidesToShow: 6,
    focusOnSelect: true,
    asNavFor: navMain as Slider,
    className: "h-full mt-[10px]",
  };

  return (
    <React.Fragment>
      <div className={styles.overlayModal}></div>
      <div className={styles.modalVisible}>
        {/* Close button */}
        <div className={styles.closeButton} onClick={() => setImages([])}>
          X
        </div>
        {/* Show total */}
        <div className={styles.showTotal}>
          <p className={styles.length}>
            {currentShowImageIndex + 1}/{images.length}
          </p>
        </div>
        {/* Main image frame */}

        <div className={styles.mainFrame}>
          <Slider
            {...settings}
            lazyLoad={"ondemand"}
            ref={(slider) => setSliderMain(slider)}
          >
            {images.length > 0 &&
              images.map((item, id) => (
                <div key={id}>
                  <img
                    // className=" object-contain w-full h-[75vh] "
                    src={item}
                    alt="image"
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

interface SliderArrowProps {
  classNameProps: string;
  image: string;
  onClick?: () => void;
}
const SliderArrow = (props: SliderArrowProps) => {
  const { onClick, image, classNameProps } = props;
  return (
    <div
      onClick={onClick}
      className={`${styles.sliderArrow} ${classNameProps}`}
    >
      <div style={{ height: "20px" }}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default BoxShowImage;
