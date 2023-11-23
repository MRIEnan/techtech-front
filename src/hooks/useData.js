import React, { useEffect, useState } from "react";
import {
  CpuChipIcon,
  CogIcon,
  HashtagIcon,
  BoltIcon,
  ArchiveBoxIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const useData = () => {
  const [myUserHook, setMyUserHook] = useState({});
  const loginInfo = { type: "none" };
  // final Data
  // const computerAccessoriesItems = [
  //   {
  //     name: "CPU/Processor",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: CpuChipIcon,
  //   },
  //   {
  //     name: "Motherboard",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: CogIcon,
  //   },
  //   {
  //     name: "RAM",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: HashtagIcon,
  //   },
  //   {
  //     name: "Power Supply Unit",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: BoltIcon,
  //   },
  //   {
  //     name: "Storage Device",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: ArchiveBoxIcon,
  //   },
  //   {
  //     name: "Monitor",
  //     description: "Computer parts",
  //     href: "#",
  //     icon: ComputerDesktopIcon,
  //   },
  // ];

  /* 
  processor
  motherboard
  ram
  powerSupplyUnit
  storage
  monitor
   */

  const [pcMakeInfos, setPcMakeInfos] = useState({
    processor: {
      pId: null,
      data: {},
      name: "CPU/ Processor",
      category: "processor",
      icon: CpuChipIcon,
    },
    motherboard: {
      pId: null,
      data: {},
      name: "Motherboard",
      category: "motherboard",
      icon: CogIcon,
    },
    ram: {
      pId: null,
      data: {},
      name: "RAM",
      category: "ram",
      icon: HashtagIcon,
    },
    powerSupplyUnit: {
      pId: null,
      data: {},
      name: "Power Supply Unit",
      category: "powerSupplyUnit",
      icon: BoltIcon,
    },
    storage: {
      pId: null,
      data: {},
      name: "Storage",
      category: "storage",
      icon: ArchiveBoxIcon,
    },
    monitor: {
      pId: null,
      data: {},
      name: "Monitor",
      category: "monitor",
      icon: ComputerDesktopIcon,
    },
  });

  useEffect(() => {
    console.log(`changing pcMakeInfos`);
    // alert(`changing pcMakeInfos`);
  }, [pcMakeInfos]);
  useEffect(() => {
    console.log(`Changing data in loginInfo`);
    // alert(`changing data in loginInfo`);
  }, [loginInfo]);
  useEffect(() => {
    console.log(`Changing data in myUser`);
    // alert(`Changing data in myUser`);
  }, [myUserHook]);

  return {
    myUserHook,
    setMyUserHook,
    loginInfo,
    pcMakeInfos,
    setPcMakeInfos,
    // navItems: {
    //   computerAccessories: computerAccessoriesItems,
    // },
  };
};

export default useData;
