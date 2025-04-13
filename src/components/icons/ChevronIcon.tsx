import { SVGProps } from "react";

interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ChevronIcon = ({ className = "", ...props }: ChevronIconProps) => {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.49955 10.1211L14.5605 3.06109L12.4385 0.939093L7.49955 5.87909L2.56055 0.939093L0.438546 3.06109L7.49955 10.1211Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronIcon;
