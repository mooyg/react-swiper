import React, { useEffect, useState } from "react";
import "./Swiper.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import { useSwipeable } from "react-swipeable";

interface Props {
  images: string[];
}
const Swiper = (props: Props) => {
  const [index, setIndex] = useState(0);
  const { images } = props;
  useEffect(() => {
    console.log(images);
  }, [images]);
  const handleIncrement = () => {
    index >= images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleDecrement = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  const handleScrollWheel = (e: React.WheelEvent<HTMLImageElement>) =>{
      if (e.deltaY < 0)
      {
       console.log('scrolling up');
       index >= images.length - 1 ? setIndex(0) : setIndex(index + 1);

      }
      else if (e.deltaY > 0)
      {
        if (index === 0) return;
        setIndex(index - 1);
       console.log('scrolling down');
      }
  }
  const handlers = useSwipeable({
    onSwipedLeft: () =>  index >= images.length - 1 ? setIndex(0) : setIndex(index + 1),
    onSwipedRight: () => {  if (index === 0) return;
        setIndex(index - 1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div className={"swiper"}>
        <div className={"swiper__button"}>
          <Button onClick={handleDecrement}>
            <ChevronLeftIcon />
          </Button>
        </div>
        <img {...handlers} onWheel={handleScrollWheel} draggable={false} className={"swiper__images"} src={images[index]} alt={""} />
        <div className={"swiper__button"}>
          <Button onClick={handleIncrement}>
            <ChevronRightIcon />
          </Button>
      </div>
    </div>
  );
};

export default Swiper;
