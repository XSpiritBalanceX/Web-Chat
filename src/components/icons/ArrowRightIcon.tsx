interface IArrowRightIconProps {
  fill: string;
}

const ArrowRightIcon = ({ fill }: IArrowRightIconProps) => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M14.75 11.25L19.75 6.25M19.75 6.25L14.75 1.25M19.75 6.25L6 6.25C4.67392 6.25 3.40215 6.77678 2.46447 7.71447C1.52679 8.65215 1 9.92392 1 11.25C1 12.5761 1.52679 13.8479 2.46447 14.7855C3.40215 15.7232 4.67392 16.25 6 16.25H7.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
