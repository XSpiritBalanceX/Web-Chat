interface IGlobeIconProps {
  fill: string;
}

const GlobeIcon = ({ fill }: IGlobeIconProps) => {
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
        d="M1.66675 9.99996C1.66675 14.6025 5.39758 18.3333 10.0001 18.3333C14.6026 18.3333 18.3334 14.6025 18.3334 9.99996C18.3334 5.39746 14.6026 1.66663 10.0001 1.66663C5.39758 1.66663 1.66675 5.39746 1.66675 9.99996Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 1.70825C10.8333 1.70825 13.3333 4.99992 13.3333 9.99992C13.3333 14.9999 10.8333 18.2916 10.8333 18.2916M9.16665 18.2916C9.16665 18.2916 6.66665 14.9999 6.66665 9.99992C6.66665 4.99992 9.16665 1.70825 9.16665 1.70825M2.19165 12.9166H17.8083M2.19165 7.08325H17.8083"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobeIcon;
