import { FaChevronRight } from "react-icons/fa";

interface StationSelectorProps {
  title: string;
  stationURL: string;
  isSelected: boolean;
}

function StationSelector({
  title,
  stationURL,
  isSelected,
}: StationSelectorProps) {

  const styling = isSelected
    ? "bg-nostromo-green text-dark-gray"
    : "text-nostromo-green";
  const opacity = isSelected ? "opacity-100" : "opacity-50";

  return (
    <div className="flex flex-row flex-nowrap w-full">
      <div className="self-center pr-2">
        {isSelected ? <FaChevronRight size={12} color="#92CC00" /> : <FaChevronRight size={12} color="#2E2E2E" />}
      </div>
      <div
        className={`border-2 shadow-lg border-nostromo-green font-nostromo drop-shadow-nostromo-green ${styling} my-3 w-full`}
        id={stationURL}
      >
        <div className="flex flex-row flex-nowrap">
          <h2 className="pl-2 text-[28px] p-1  ">{title}</h2>
          <div className={`flex flex-col  px-12 flex-grow ${opacity}`}>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-dashed border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white text-sm text"> X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StationSelector;
