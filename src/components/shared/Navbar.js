import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PopOverMenuItem from "./PopOverMenuItem";
import Image from "next/image";
import logoImageOne from "@/assets/images/techtech_logo_One.png";
import Link from "next/link";
import useAllData from "@/hooks/useAllData";
import { useSession, signOut } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const navItemsOne = [
  { name: "PC Builder", href: "/make-pc", current: false },
  { name: "Home", href: "/", current: false },
  // { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const { navItems, apiRoutesNames, myUserHook, setMyUserHook, pcMakeInfos } =
    useAllData();
  const [showLogOut, setShowLogOut] = useState(false);
  const { data: session } = useSession();

  // sign out method : firebase
  const [firebaseSignOut] = useSignOut(auth);
  const handleFirebaseSignOut = () => {
    firebaseSignOut(auth);
  };

  // sign out method : next
  const handleSignOut = () => {
    signOut();
  };

  const handleMainLogOutBtn = () => {
    handleSignOut();
    for (let k in myUserHook) {
      delete myUserHook[k];
    }
  };

  const handleBell = () => {
    // handle onClick action of the bell icon
    // console.log(myUserHook);
    console.log(pcMakeInfos);
  };
  const handleNavRouting = (routeLink) => {
    router.push(routeLink);
  };

  useEffect(() => {
    if (
      session &&
      session.user &&
      myUserHook &&
      myUserHook.email !== session.user.email
    ) {
      setMyUserHook(session.user);
      setShowLogOut(true);
    } else if (myUserHook && !myUserHook.email) {
      setShowLogOut(false);
    }
  }, [session]);

  const handleImageClick = () => {
    router.push("/");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  onClick={handleImageClick}
                  className="flex w-[40px] h-[40px] flex-shrink-0 items-center bg-white border rounded-[50%] p-1 hover:animate-spin"
                >
                  <Image
                    src={logoImageOne}
                    alt="Your Company"
                    height={40}
                    width={40}
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 h-full">
                    <PopOverMenuItem
                      apiRoutesNames={apiRoutesNames}
                      solutions={navItems?.computerAccessories}
                    />
                    {navItemsOne.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => handleNavRouting(item.href)}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium grid items-center cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={handleBell}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        height={32}
                        width={32}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile icon"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => handleNavRouting("/profile")}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => handleNavRouting("/setting")}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </div>
                        )}
                      </Menu.Item>
                      {!showLogOut && (
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => handleNavRouting("/login")}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign In
                            </div>
                          )}
                        </Menu.Item>
                      )}
                      {showLogOut && (
                        <Menu.Item onClick={() => handleMainLogOutBtn()}>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Log out
                            </div>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 h-full">
              <PopOverMenuItem
                classes={""}
                apiRoutesNames={apiRoutesNames}
                solutions={navItems?.computerAccessories}
              />
              {navItemsOne.map((item) => (
                <div
                  key={item.name}
                  as="a"
                  onClick={() => handleNavRouting(item.href)}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
