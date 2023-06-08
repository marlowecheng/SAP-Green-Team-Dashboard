import sapLogo from '../assets/sap-logo-svg.svg'

export const Header = () => {
  return (
    <div className="bg-textmain flex justify-between">
      <div>
        <img
          src={sapLogo}
          className="w-36 h-30"
        />
      </div>
      <div className="mb-4">
        <button className="rounded-full w-32 h-10 mt-4 border-4 border-insightBtn bg-white text-insightBtn mr-4">
          Home
        </button>
        <button className="rounded-full w-32 h-10 mt-4 bg-insightBtn text-white mr-10">
          Insights
        </button>
      </div>
    </div>
  );
};
