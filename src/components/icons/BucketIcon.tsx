interface IBucketIconProps {
  fill: string;
}

const BucketIcon = ({ fill }: IBucketIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M7.64175 3.33334C7.81392 2.84539 8.1332 2.42286 8.55558 2.12399C8.97797 1.82512 9.48265 1.66463 10.0001 1.66463C10.5175 1.66463 11.0222 1.82512 11.4446 2.12399C11.867 2.42286 12.1862 2.84539 12.3584 3.33334M17.0834 5H2.91675M15.6942 7.08334L15.3109 12.8333C15.1634 15.045 15.0901 16.1508 14.3692 16.825C13.6484 17.5 12.5392 17.5 10.3226 17.5H9.67758C7.46091 17.5 6.35175 17.5 5.63091 16.825C4.91008 16.1508 4.83591 15.045 4.68925 12.8333L4.30591 7.08334M7.91675 9.16667L8.33341 13.3333M12.0834 9.16667L11.6667 13.3333"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BucketIcon;
