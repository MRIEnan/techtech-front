import React, { useState } from "react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const useData = () => {
  // test Data
  const testData = "connected";
  const [counter, setCounter] = useState(1);
  const addOneCounter = () => {
    setCounter(counter + 1);
  };
  const removeOneCounter = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };
  const addAnyCounter = (num) => {
    setCounter(counter + num);
  };
  const removeAnyCounter = (num) => {
    setCounter(counter - num);
  };

  // final Data
  const computerAccessoriesItems = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  return {
    testData,
    counterHelper: {
      counter,
      setCounter,
      addOneCounter,
      removeOneCounter,
      addAnyCounter,
      removeAnyCounter,
    },
    navItems: {
      computerAccessories: computerAccessoriesItems,
    },
  };
};

export default useData;
