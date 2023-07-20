import sapLogo from '../assets/sap-logo-svg.svg'

export const Header = () => {
  return (
    <div className="bg-textmain flex justify-between z-5">
      <div>
        <img
          src={sapLogo}
          className="w-36 h-30"
        />
      </div>
    </div>
  );
};

export default Header;