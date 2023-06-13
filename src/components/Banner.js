import { Card } from "@tremor/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

import heroBackground from "../assets/SAPVECTORLOGO-COLOR.svg";
import cascadeImage from "../assets/cascade-recovery-lineup.svg";
import ecoActionImage from "../assets/eco-action-lineup.svg";
import refundableImage from "../assets/refundables-lineup.svg";
import wasteImage from "../assets/waste-management-lineup.svg";

function Banner() {
  return (
    <div className="bg-bgmain py-4 flex justify-evenly items-center border-b-[60px] border-textmain">
      <div className="flex flex-col">
        <h1 className="text-textmain font-bold text-5xl z-10">
          Reveal the Green
        </h1>
        <h1 className="text-textmain font-bold text-5xl z-10">
          Team Revolution
        </h1>
        <h2 className="text-textmain text-2xl z-10">
          Witness the Journey from Waste to sustainability.
        </h2>
        <div className="absolute top-1 right-0 left-[-50px] bottom-0">
          <img
            src={heroBackground}
            className="w-[550px] h-[550px] z-0 opacity-10"
          />
        </div>
      </div>

      <div classname="flex flex-row">
        <div className="flex flex-row my-4 gap-x-4">
          {/* Hero Card Cascade Recovery */}
          <Card className="w-[255px] flex flex-col items-center border-cascadeBorder border-[5px] drop-shadow-xl">
            <h1 className="text-textmain font-bold">Cascade Recovery</h1>
            <img
              src={cascadeImage}
              className="my-3"
            />
            <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
              <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
              <p className="font-bold text-lg text-green-900">45%</p>
            </div>
          </Card>
          {/* Hero Card Eco Action */}
          <Card className="w-[255px] flex flex-col items-center border-ecoBorder border-[5px] drop-shadow-xl">
            <h1 className="text-textmain font-bold">Eco Action</h1>
            <img
              src={ecoActionImage}
              className="my-3"
            />
            <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
              <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
              <p className="font-bold text-lg text-green-900">45%</p>
            </div>
          </Card>
        </div>

        <div className="flex flex-row my-4 gap-x-4">
          {/* Hero Card Waste Control Services */}
          <Card className="w-[255px] flex flex-col items-center border-wasteBorder border-[5px] drop-shadow-xl">
            <h1 className="text-textmain font-bold">Waste Control Services</h1>
            <img
              src={wasteImage}
              className="my-3"
            />
            <div className="w-32 h-12 rounded-full bg-pillBgRed bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
              <ArrowDownIcon className="text-red-900 stroke-[3px] w-6 h-6" />
              <p className="font-bold text-lg text-red-900">45%</p>
            </div>
          </Card>
          {/* Hero Card refundables */}
          <Card className="w-[255px] flex flex-col items-center border-refundBorder border-[5px] drop-shadow-xl">
            <h1 className="text-textmain font-bold">Refundables</h1>
            <img
              src={refundableImage}
              className="my-3"
            />
            <div className="w-32 h-12 rounded-full bg-pillBgGreen bg-opacity-[40%] text-center flex flex-row items-center justify-center gap-x-2 drop-shadow-2xl">
              <ArrowUpIcon className="text-green-900 stroke-[3px] w-6 h-6" />
              <p className="font-bold text-lg text-green-900">45%</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Banner;
