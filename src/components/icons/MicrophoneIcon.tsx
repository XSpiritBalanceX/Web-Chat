interface IMicrophoneIconProps {
  fill: string;
}

const MicrophoneIcon = ({ fill }: IMicrophoneIconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M16 22C17.5908 21.9983 19.116 21.3657 20.2408 20.2408C21.3657 19.116 21.9983 17.5908 22 16V8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8V16C10.0017 17.5908 10.6343 19.116 11.7592 20.2408C12.884 21.3657 14.4092 21.9983 16 22ZM12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20C14.9391 20 13.9217 19.5786 13.1716 18.8284C12.4214 18.0783 12 17.0609 12 16V8ZM17 25.95V30C17 30.2652 16.8946 30.5196 16.7071 30.7071C16.5196 30.8946 16.2652 31 16 31C15.7348 31 15.4804 30.8946 15.2929 30.7071C15.1054 30.5196 15 30.2652 15 30V25.95C12.5346 25.6991 10.2497 24.543 8.5873 22.7051C6.9249 20.8672 6.00305 18.4782 6 16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15C7.26522 15 7.51957 15.1054 7.70711 15.2929C7.89464 15.4804 8 15.7348 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16C24 15.7348 24.1054 15.4804 24.2929 15.2929C24.4804 15.1054 24.7348 15 25 15C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C25.997 18.4782 25.0751 20.8672 23.4127 22.7051C21.7503 24.543 19.4654 25.6991 17 25.95Z"
        fill={fill}
      />
    </svg>
  );
};

export default MicrophoneIcon;