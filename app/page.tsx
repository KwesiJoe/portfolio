'use client';
import { useState } from "react";
import { passions } from "./lib/passions";
import { Footer } from "./ui/components/page/Footer";
import Image from "next/image";

export default function Home() {
  const [selectedPassions, setSelectedPassions] = useState<string[]>([]);
  const [displayedPassions, setDisplayedPassions] = useState<string[]>(passions);
  const [narrowTo, setNarrowTo] = useState<number>(10);

  const handleNarrowClick = () => {
    setDisplayedPassions(selectedPassions);
    setNarrowTo(selectedPassions.length === 5 ? 3 : 5)
    setSelectedPassions([]);
  }

  const handlePassionClick = (passion: string) => {
    if (selectedPassions.includes(passion)) {
      setSelectedPassions(selectedPassions.filter((p) => p !== passion));
      return;
    }
    setSelectedPassions([...selectedPassions, passion])
  }

  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <main>
        <div className="h-24 sticky top-0 bg-[#cce8d2] text-[#4D4D4D] font-bold text-[1rem] mb-2">
          {narrowTo === 10 ? <div>Please choose {narrowTo} interests to start.</div> : displayedPassions.length === 3 ? <div className="text-[2rem]">Your top interests are:</div> : <div>Please choose {narrowTo} values to continue.</div>}
          {selectedPassions.length === narrowTo
            ? <button className="w-[10rem] h-[3rem] border m-4 bg-[#84BC9C] rounded-md"
              onClick={() => { handleNarrowClick() }}
            >
              Narrow to {narrowTo}
            </button>
            : <div className={(displayedPassions.length === 3 ? "hidden" : "")}>{narrowTo - selectedPassions.length} choices remaining</div>
          }
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-1">
          {displayedPassions.map((passion, index) => (
            <div className={"flex justify-center items-center border-2 border-[#a8aca4]  h-[6rem] w-[30%] font-mono font-medium text-[0.8rem]" + (selectedPassions.includes(passion) ? " bg-[#b6eeb6]" : "")}
              key={index}
              onClick={() => handlePassionClick(passion)}
            >{passion}
            </div>
          ))}
        </div>
      </main>
      <Footer>
        inspired by
        <a href="http://colas.sebastien.free.fr/values/" className="flex items-center justify-center gap-1 border mb-1">
          <Image width={16} height={16} alt="" src="http://colas.sebastien.free.fr/favicon.ico" />
          Values
        </a>
      </Footer>
    </div>
  );

}
