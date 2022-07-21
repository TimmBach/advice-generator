import React, { useEffect, useState } from "react";
import desktopPatterDivider from "./images/pattern-divider-desktop.svg";
import mobilePatterDivider from "./images/pattern-divider-mobile.svg";
import diceIcon from "./images/icon-dice.svg";

const url = "https://api.adviceslip.com/advice";
const App = () => {
  const [buttonShadow, setButtonShadow] = useState(false);
  const [randomText, setRandomText] = useState("");
  const [textId, setTextId] = useState(0);

  const fetchAdvice = async function () {
    try {
      const { slip } = await fetch(url).then((res) => res.json());

      setRandomText(slip.advice);
      setTextId(slip.id);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      <div className="bg-darkBlue h-screen flex justify-center">
        <div className="flex flex-col  w-[90vw] md:w-lg max-w-xl h-[50vh] mb-60 px-14 lg:px-8 my-auto items-center bg-darkGrayishBlue text-lightCyan relative rounded-xl">
          <h1 className="py-8 text-neonGreen font-bold tracking-widest text-sm">
            ADVICE #{textId}
          </h1>
          <p className="align-middle text-3xl  text-center pb-[8%]">
            {randomText}
          </p>
          <img
            className="visible lg:invisible"
            src={mobilePatterDivider}
            alt="divider"
          />
          <img
            className="invisible lg:visible"
            src={desktopPatterDivider}
            alt="divider"
          />
          <div
            className={
              "absolute top-[41vh] mt-[2vh] bg-neonGreen opacity-40 rounded-full blur-sm outline-none focus:outline-none w-24 h-24" +
              (!buttonShadow ? "invisible" : "")
            }
          ></div>
          <button
            className="bg-neonGreen hover:before:visible w-16 h-16 border-none outline-none focus:outline-none  z-10 rounded-full flex absolute top-[43vh] mt-[2vh]  justify-center items-center cursor-pointer shadow-2xl"
            onClick={fetchAdvice}
            onMouseDown={() => setButtonShadow(true)}
            onMouseUp={() => setButtonShadow(false)}
            onPointerDown={() => setButtonShadow(true)}
            onPointerUp={() => setButtonShadow(false)}
          >
            <img src={diceIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
