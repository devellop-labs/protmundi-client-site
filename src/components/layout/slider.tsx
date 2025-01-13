import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider, { Settings } from "react-slick";
import React from "react";

type Props = Settings;

export default function Slider({ ...props }: Props) {
  const settings: Settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    swipeToSlide: true, // Enable swipe to slide
    autoplay: true, // Automatically change slides
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i) => (
      <div className="custom-dot w-[14px] h-[14px] bg-white border-primary border-[2px] rounded-full" />
    ),
    dotsClass: "slick-dots custom-dots", // Custom class for dots
    ...props,
  };

  return <SlickSlider {...settings}>{props.children}</SlickSlider>;
}

const NextArrow = (props: any) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} group custom-arrow custom-next`}
      onClick={onClick}
      style={{ ...style, display: "block" }} // Ensures arrow is always visible
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#cfcfcf"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-primary"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} group custom-arrow custom-prev`}
      onClick={onClick}
      style={{ ...style, display: "block" }} // Ensures arrow is always visible
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#cfcfcf"
          strokeWidth="2"
          className="group-hover:stroke-primary"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
