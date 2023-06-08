import footerLogo from '../assets/SAPVECTORLOGO.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-textmain flex p-2">
      <div className="flex items-center justify-center basis-11/12 text-white">
          {" "}
          &copy; {year} | Designed & Developed by the BCIT Green Team | All
          Rights Reserved.
      </div>
      <div className="flex items-center justify-center basis-1/12">
        <img
          className="w-20 h-20"
          src={footerLogo}
        />
      </div>
    </footer>
  );
};

export default Footer;
