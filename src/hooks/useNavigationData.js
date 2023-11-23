import React, { useState } from "react";
import {
  CpuChipIcon,
  CogIcon,
  HashtagIcon,
  BoltIcon,
  ArchiveBoxIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const useNavigationData = () => {
  // final Data
  const computerAccessoriesItems = [
    {
      name: "CPU/Processor",
      description: "Computer parts",
      href: "processor",
      icon: CpuChipIcon,
    },
    {
      name: "Motherboard",
      description: "Computer parts",
      href: "motherboard",
      icon: CogIcon,
    },
    {
      name: "RAM",
      description: "Computer parts",
      href: "ram",
      icon: HashtagIcon,
    },
    {
      name: "Power Supply Unit",
      description: "Computer parts",
      href: "powerSupplyUnit",
      icon: BoltIcon,
    },
    {
      name: "Storage Device",
      description: "Computer parts",
      href: "storage",
      icon: ArchiveBoxIcon,
    },
    {
      name: "Monitor",
      description: "Computer parts",
      href: "monitor",
      icon: ComputerDesktopIcon,
    },
  ];

  // api routes names
  const apiRoutesNames = {
    productsCategory: "/products/category/",
  };
  return {
    navItems: {
      computerAccessories: computerAccessoriesItems,
    },
    apiRoutesNames: apiRoutesNames,
  };
};

export default useNavigationData;
