interface IEditIconProps {
  fill: string;
}

const EditIcon = ({ fill }: IEditIconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M6.94417 8.29167C6.65977 8.57649 6.50002 8.96252 6.5 9.36501V11.5H8.64833C9.05083 11.5 9.4375 11.34 9.7225 11.055L16.0558 4.71834C16.1969 4.57735 16.3087 4.40995 16.3851 4.22572C16.4614 4.04148 16.5007 3.84401 16.5007 3.64459C16.5007 3.44517 16.4614 3.2477 16.3851 3.06347C16.3087 2.87923 16.1969 2.71184 16.0558 2.57084L15.43 1.94501C15.289 1.80386 15.1215 1.69188 14.9372 1.61548C14.7529 1.53908 14.5554 1.49976 14.3558 1.49976C14.1563 1.49976 13.9588 1.53908 13.7744 1.61548C13.5901 1.69188 13.4227 1.80386 13.2817 1.94501L6.94417 8.29167Z"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 9.00006C16.5 12.5359 16.5 14.3034 15.4017 15.4017C14.3033 16.5001 12.535 16.5001 9 16.5001C5.46417 16.5001 3.69667 16.5001 2.59833 15.4017C1.5 14.3034 1.5 12.5351 1.5 9.00006C1.5 5.46423 1.5 3.69673 2.59833 2.59839C3.69667 1.50006 5.465 1.50006 9 1.50006"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
