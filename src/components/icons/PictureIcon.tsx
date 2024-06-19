interface IPictureIconProps {
  fill: string;
}

const PictureIcon = ({ fill }: IPictureIconProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M4.13329 26.5575H25.8672C28.4917 26.5575 29.8101 25.252 29.8101 22.6655V7.33392C29.8101 4.74749 28.4917 3.44196 25.8672 3.44196H4.13329C1.52168 3.44249 0.19043 4.73571 0.19043 7.33392V22.6661C0.19043 25.2648 1.52168 26.5575 4.13329 26.5575ZM21.0458 14.9689C20.4806 14.467 19.8404 14.2028 19.1628 14.2028C18.4594 14.2028 17.8438 14.4418 17.2663 14.9566L11.5915 20.0293L9.26865 17.9196C8.74097 17.4552 8.17579 17.2039 7.57364 17.2039C7.02079 17.2039 6.48079 17.4428 5.9665 17.9073L2.21222 21.2839V7.43571C2.21222 6.12963 2.91507 5.46428 4.17079 5.46428H25.8297C27.0726 5.46428 27.7883 6.12963 27.7883 7.43571V21.2973L21.0458 14.9689ZM9.54454 15.1071C11.1645 15.1071 12.4953 13.7764 12.4953 12.1441C12.4953 10.5246 11.1645 9.18106 9.54454 9.18106C7.91275 9.18106 6.58204 10.5246 6.58204 12.1441C6.58345 12.9294 6.89601 13.6822 7.45126 14.2375C8.00652 14.7929 8.75922 15.1056 9.54454 15.1071Z"
        fill={fill}
      />
    </svg>
  );
};

export default PictureIcon;
