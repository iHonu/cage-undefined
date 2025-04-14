import React from "react";

interface SplitTextProps {
  text: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  return (
    <div className="relative w-full ">
      {/* Ellipse behind the text */}
      <div className="hidden w-[555px] h-[62px] left-[calc(50%_-_555px/2_-_413.5px)] top-0 bg-[rgba(255,253,238,0.6)] [filter:blur(60px)] z-0 md:absplute"></div>

      <h2 className="mb-2.5 md:mb-4  text-3xl z-50 font-extrabold uppercase [text-shadow:2px_2px_12px_rgba(0,0,0,0.6)] [clip-path:polygon(0_0,100%_0,100%_50%,0_50%)] md:text-7xl">
        {text}
      </h2>
      <h2 className="absolute top-0 left-0.5 md:left-1 mb-4 text-3xl font-extrabold uppercase [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] [text-shadow:0px_-2px_8px_rgba(0,0,0,0.6)] md:text-7xl">
        {text}
      </h2>
    </div>
  );
};

export default SplitText;
