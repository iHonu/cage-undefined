import React from "react";
import Button from "../ui/Button";
import HeadingSplit from "./HeadingSplit";
const HeroTextContent: React.FC = () => {
  return (
    <div className="z-10 flex w-full mt-32 flex-col items-start justify-center px-4 md:px-16 text-start text-white">
      <HeadingSplit text=" CUTTING EDGE" />

      <h1 className="mb-10 md:mb-14 text-3xl md:text-7xl font-extrabold uppercase [text-shadow:_0px_4px_0_rgba(117,_65,_254,_1)]">
        ANIMAL LIBERATION.
      </h1>
      <h3 className="mb-10 md:mb-24 max-w-2xl text-lg md:text-4xl uppercase font-bold">
        we help
        <span className="text-[#FF4710] [text-shadow:1px_1px_0px_#FFFDEE]">
          {" "}
          you{" "}
        </span>
        help
        <span className="text-[#FF4710] [text-shadow:1px_1px_0px_#FFFDEE]">
          {" "}
          them.
        </span>
      </h3>
      <div className="flex justify-center w-full">
        <Button variant="accent">
          <span className="text-white">Contact Us</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroTextContent;
