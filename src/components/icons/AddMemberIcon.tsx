interface IAddMemberIconProps {
  fill: string;
}

const AddMemberIcon = ({ fill }: IAddMemberIconProps) => {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M6 7.5C7.38071 7.5 8.5 6.38071 8.5 5C8.5 3.61929 7.38071 2.5 6 2.5C4.61929 2.5 3.5 3.61929 3.5 5C3.5 6.38071 4.61929 7.5 6 7.5Z"
        stroke={fill}
        strokeLinecap="round"
      />
      <path
        d="M9.76796 5.50001C9.89833 5.27072 10.0728 5.06948 10.2812 4.90788C10.4897 4.74628 10.728 4.6275 10.9826 4.55839C11.2371 4.48929 11.5028 4.47121 11.7644 4.50521C12.0259 4.53921 12.2782 4.6246 12.5066 4.75649C12.735 4.88837 12.9351 5.06413 13.0953 5.27366C13.2556 5.48318 13.3727 5.72232 13.4402 5.97732C13.5076 6.23232 13.5239 6.49814 13.4882 6.75946C13.4524 7.02079 13.3654 7.27247 13.232 7.50001C12.9649 7.95563 12.5284 8.2871 12.0178 8.42209C11.5072 8.55708 10.9639 8.48464 10.5066 8.22056C10.0492 7.95649 9.71484 7.52223 9.57647 7.01254C9.43809 6.50286 9.50693 5.95913 9.76796 5.50001Z"
        stroke={fill}
      />
      <path
        d="M10.5001 15H1.50006V16H10.5001V15ZM1.08806 14.586C1.21806 13.772 1.53006 12.615 2.26406 11.671C2.97906 10.751 4.11906 10 6.00006 10V9C3.80106 9 2.37406 9.9 1.47406 11.057C0.594056 12.191 0.243056 13.537 0.101056 14.428L1.08806 14.586ZM6.00006 10C7.88106 10 9.02006 10.75 9.73606 11.671C10.4701 12.615 10.7821 13.771 10.9121 14.586L11.8991 14.428C11.7571 13.538 11.4071 12.191 10.5261 11.058C9.62606 9.9 8.19906 9 6.00006 9V10ZM1.50006 15C1.20806 15 1.05706 14.783 1.08806 14.586L0.101056 14.428C-0.0419437 15.322 0.687056 16 1.50006 16V15ZM10.5001 16C11.3131 16 12.0411 15.322 11.8991 14.428L10.9121 14.586C10.9431 14.783 10.7921 15 10.5001 15V16Z"
        fill={fill}
      />
      <path
        d="M9.80009 10.981L9.53209 10.559L9.01709 10.886L9.43909 11.326L9.80009 10.981ZM14.3951 15H10.5001V16H14.3951V15ZM14.8121 14.538C14.8651 14.753 14.7081 15 14.3951 15V16C15.2651 16 16.0151 15.228 15.7821 14.295L14.8121 14.538ZM11.5001 11C12.5281 11 13.2501 11.503 13.7781 12.207C14.3181 12.925 14.6341 13.832 14.8121 14.538L15.7821 14.295C15.5901 13.531 15.2321 12.479 14.5781 11.606C13.9131 10.72 12.9201 10 11.5001 10V11ZM10.0681 11.403C10.4581 11.156 10.9261 11 11.5001 11V10C10.7321 10 10.0791 10.212 9.53209 10.559L10.0681 11.403ZM9.43909 11.326C10.3861 12.316 10.7651 13.665 10.9121 14.586L11.8991 14.428C11.7391 13.428 11.3161 11.842 10.1621 10.635L9.43909 11.326ZM10.9121 14.586C10.9431 14.783 10.7921 15 10.5001 15V16C11.3131 16 12.0411 15.322 11.8991 14.428L10.9121 14.586Z"
        fill={fill}
      />
      <path
        d="M18.5 2.25H14.5C14.3619 2.25 14.25 2.36193 14.25 2.5C14.25 2.63807 14.3619 2.75 14.5 2.75H18.5C18.6381 2.75 18.75 2.63807 18.75 2.5C18.75 2.36193 18.6381 2.25 18.5 2.25Z"
        stroke={fill}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M16.75 4.5V0.5C16.75 0.361929 16.6381 0.25 16.5 0.25C16.3619 0.25 16.25 0.361929 16.25 0.5V4.5C16.25 4.63807 16.3619 4.75 16.5 4.75C16.6381 4.75 16.75 4.63807 16.75 4.5Z"
        stroke={fill}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddMemberIcon;