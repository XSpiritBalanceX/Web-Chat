interface IMessageIconProps {
  fill: string;
}

const MessageIcon = ({ fill }: IMessageIconProps) => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M7.5 11C7.5 11.3978 7.34196 11.7794 7.06066 12.0607C6.77936 12.342 6.39782 12.5 6 12.5C5.60218 12.5 5.22064 12.342 4.93934 12.0607C4.65804 11.7794 4.5 11.3978 4.5 11C4.5 10.6022 4.65804 10.2206 4.93934 9.93934C5.22064 9.65804 5.60218 9.5 6 9.5C6.39782 9.5 6.77936 9.65804 7.06066 9.93934C7.34196 10.2206 7.5 10.6022 7.5 11ZM13.5 11C13.5 11.3978 13.342 11.7794 13.0607 12.0607C12.7794 12.342 12.3978 12.5 12 12.5C11.6022 12.5 11.2206 12.342 10.9393 12.0607C10.658 11.7794 10.5 11.3978 10.5 11C10.5 10.6022 10.658 10.2206 10.9393 9.93934C11.2206 9.65804 11.6022 9.5 12 9.5C12.3978 9.5 12.7794 9.65804 13.0607 9.93934C13.342 10.2206 13.5 10.6022 13.5 11ZM18 12.5C18.3978 12.5 18.7794 12.342 19.0607 12.0607C19.342 11.7794 19.5 11.3978 19.5 11C19.5 10.6022 19.342 10.2206 19.0607 9.93934C18.7794 9.65804 18.3978 9.5 18 9.5C17.6022 9.5 17.2206 9.65804 16.9393 9.93934C16.658 10.2206 16.5 10.6022 16.5 11C16.5 11.3978 16.658 11.7794 16.9393 12.0607C17.2206 12.342 17.6022 12.5 18 12.5Z"
        fill={fill}
      />
      <path
        d="M3.2475 22.7045L3.2775 22.6985C6.0225 22.154 7.6995 21.4355 8.4795 21.041C9.62768 21.3483 10.8114 21.5026 12 21.5C18.627 21.5 24 16.799 24 11C24 5.201 18.627 0.5 12 0.5C5.373 0.5 0 5.201 0 11C0 13.64 1.1145 16.055 2.955 17.9C2.82672 19.0852 2.56299 20.2518 2.169 21.377L2.1645 21.3935C2.05241 21.7157 1.93035 22.0344 1.7985 22.349C1.68 22.628 1.9095 22.94 2.208 22.892C2.55548 22.835 2.90202 22.7725 3.2475 22.7045ZM4.4475 18.0425C4.46851 17.8229 4.44082 17.6014 4.36641 17.3937C4.292 17.186 4.1727 16.9973 4.017 16.841C2.427 15.245 1.5 13.202 1.5 11C1.5 6.212 6.006 2 12 2C17.994 2 22.5 6.212 22.5 11C22.5 15.788 17.994 20 12 20C10.9426 20.0026 9.88946 19.8654 8.868 19.592C8.51097 19.4963 8.13118 19.5359 7.8015 19.703C7.221 19.997 5.9415 20.558 3.8505 21.0425C4.14196 20.0631 4.34182 19.0588 4.4475 18.0425Z"
        fill={fill}
      />
    </svg>
  );
};

export default MessageIcon;