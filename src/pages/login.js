import RootLayout from "@/components/UI/RootLayout";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import { signIn } from "next-auth/react";
import useAllData from "@/hooks/useAllData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const { myUserHook } = useAllData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfos, setUserInfos] = useState({
  //   name: "abcd efgh",
  //   password: "12345678",
  //   email: "a@b.com",
  // });
  const [userInfos, setUserInfos] = useState({});

  const router = useRouter();
  const redirectCallbackUrl = `${
    router?.query?.callbackUrl
      ? router?.query?.callbackUrl
      : "https://techtech-frontend.vercel.app/"
  }`;
  const [myImage, setMyImage] = useState(null);
  const [loginState, setLoginState] = useState("login");

  if (myUserHook?.email) {
    router.push("/");
    return;
  }
  //  handler of user info change
  const handleInfoUpdate = (e) => {
    e.preventDefault();
    const myUser = userInfos;
    const name = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      if (e.target.files[0]) {
        console.log("file changed");
        myUser[`${name}`] = e.target.files[0];
        const createdImage = URL.createObjectURL(e.target.files[0]);
        setMyImage(createdImage);
      }
    } else {
      myUser[`${name}`] = value;
    }
    setUserInfos(myUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfos);

    // ! warning:  you have to remove this
    return;
    if (loginState === "login") {
      const myUser = {};
      myUser["email"] = userInfos["email"];
      myUser["password"] = userInfos["password"];

      fetch(`https://tech-backend-lovat.vercel.app/api/v1/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const myUser = { ...userInfos };

      if (userInfos.image) {
        const f = new FormData();
        f.append("image", userInfos.image);
        f.append("name", `${new Date().getTime()}${userInfos.image.name}`);
        console.log(f);
        const imageApi = `e401b7f2a3e7e93437e3c5a5bd096cd7`;
        fetch(`https://api.imgbb.com/1/upload?key=${imageApi}`, {
          method: "POST",
          body: f,
        })
          .then((resp) => resp.json())
          .then((imgData) => {
            console.log(imgData);
            if (imgData.success) {
              myUser["image"] = imgData.data;
              console.log(myUser);
              fetch(
                `https://tech-backend-lovat.vercel.app/api/v1/users/add-user`,
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(myUser),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleLoginState = (type) => {
    if (type === loginState) return;
    else {
      setLoginState(type);
      setMyImage(null);
    }
  };

  if (myUserHook && !myUserHook.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className={`${styles.loginFormController}`}>
            <p
              onClick={() => handleLoginState("login")}
              className={`${
                loginState === "login"
                  ? `${styles.loginFormControllerActive}`
                  : ""
              }`}
            >
              Login
            </p>
            <p
              onClick={() => handleLoginState("signup")}
              className={`${
                loginState === "signup"
                  ? `${styles.loginFormControllerActive}`
                  : ""
              }`}
            >
              Sign Up
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className={`mt-8 space-y-3 ${styles.loginForm}`}
            id="login-form"
            encType="multipart/form-data"
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
                handleInfoUpdate(e);
              }}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-t-md rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => {
                handleInfoUpdate(e);
              }}
            />
            {loginState === "signup" && (
              <>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-t-md rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    handleInfoUpdate(e);
                  }}
                />
                <div className="relative">
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    required
                    className="appearance-none rounded-t-md rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm absolute"
                    placeholder="insert your image"
                    onChange={(e) => {
                      handleInfoUpdate(e);
                    }}
                  />
                  {myImage && (
                    <div className="absolute top-0 right-0 bg-white border-2 border-[#006699] rounded-sm overflow-hidden grid align-middle w-[50px] h-[40px] mt-[1.5px] z-20 ">
                      <Image
                        className=" m-auto object-contain"
                        src={myImage}
                        height={40}
                        width={40}
                        responsive="true"
                        alt="userImage"
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                value="signIn"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex justify-center mx-0">
            <p className="text-2xl">or</p>
          </div>
          <div className="flex justify-center">
            <div className="flex">
              <div
                className={`mx-2 h-[40px] w-[40px] flex bg-blue-700 hover:bg-blue-800 border border-none rounded-[50%] p-1 ${styles["login-icons"]} `}
                onClick={() => {
                  signIn("google", {
                    callbackUrl: redirectCallbackUrl,
                  });
                }}
              >
                <FontAwesomeIcon
                  className={`m-auto`}
                  color="background"
                  size="2x"
                  icon={faG}
                />
              </div>
              <div
                className={`mx-2 h-[40px] w-[40px] flex bg-blue-700 hover:bg-blue-800 border border-none rounded-[50%] p-1 ${styles["login-icons"]} `}
                onClick={() => {
                  signIn("github", {
                    callbackUrl: redirectCallbackUrl,
                  });
                }}
              >
                <FontAwesomeIcon
                  className={`m-auto`}
                  color="background"
                  size="2x"
                  icon={faGithub}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
