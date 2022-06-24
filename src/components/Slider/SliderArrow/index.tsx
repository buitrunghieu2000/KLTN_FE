import style from "./style.module.css";

interface SliderArrowProps {
  classNameProps: string;
  image: string;
  heightImage: string;
  onClick?: () => void;
}

const SliderArrow = (props: SliderArrowProps) => {
  const { onClick, image, heightImage, classNameProps } = props;
  return (
    <div onClick={onClick} className={`${style.sliderArr} ${classNameProps}`}>
      <div className={`${heightImage}`}>
        <img
          src={image}
          className="w-full h-full object-cover"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default SliderArrow;
