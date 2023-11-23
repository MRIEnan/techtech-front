import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function PopOverMenuItem({
  classes = "",
  solutions,
  apiRoutesNames,
}) {
  const router = useRouter();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleOnClick = (val) => {
    router.push(val);
  };
  return (
    <Popover className="md:relative cursor-pointer">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold  text-white font-bold h-full">
        <span
          className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
        >
          Computer accessories
        </span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="sm:absolute md:left-[0px] z-10 flex lg:w-[300px] md:w-full max-w-max">
          {({ close }) => (
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="md:p-2 sm:p-0 ">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      handleOnClick(
                        `${apiRoutesNames?.productsCategory}${item.href}`
                      );
                      close();
                    }}
                    className="font-semibold text-gray-900 my-auto"
                  >
                    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                      <div className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:text-blue-400">
                        <item.icon
                          className="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="w-full h-full my-auto">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
