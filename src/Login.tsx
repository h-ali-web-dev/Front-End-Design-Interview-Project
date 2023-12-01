import Logo from "./assets/Logo.png";
import GoogleLogo from "./assets/Google Icon.svg";
import { useContext, useState } from "react";
import { UserUpdateContext } from "./App";

export default function Login() {
  const setAuthData = useContext(UserUpdateContext);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function sendCredentials() {
    const data = JSON.stringify({ username: username, password: password });
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((v) => {
        if (v["message"] == "Invalid credentials") {
          setIsError(true);
        } else {
          setIsError(false);
          setAuthData(true);
        }
      });
  }

  return (
    <>
      <div className="flex flex-row h-screen bg-white">
        <div className="self-center place-self-center m-16 px-20 ">
          <div>
            <img src={Logo} height={44} width={170} />
          </div>
          <div className="text-[64px] text-[#222B33] font-semibold pb-3 pt-[52px] font-sora leading-[60px] tracking-[-1.5%]">
            Welcome back
          </div>
          <div className="text-[#3B4752] pb-8 font-sans font-light text-lg">
            You need to be signed in to access the project dashboard.
          </div>
          <div className="text-[#222B33] text-[16px] leading-8 font-sans font-medium">
            Email or username
          </div>
          <input
            value={username}
            onChange={(v) => setUsername(v.target.value)}
            placeholder="wesley.mendoza@example.com"
            type="text"
            className={`w-96 border p-2 bg-slate-100 text-[#3B4752] text-[16px] leading-5 font-[340] ${
              isError ? "border-red-600 border-2" : ""
            }`}
          ></input>
          <div className="text-[#222B33] text-[16px] leading-8 font-sans font-medium pt-2">
            Password
          </div>
          <div
            className={`w-96 border bg-slate-100 relative ${
              isError ? "border-red-600 border-2" : ""
            }`}
          >
            <input
              value={password}
              onChange={(v) => setPassword(v.target.value)}
              className="w-full p-2 bg-slate-100 text-[#3B4752] text-[16px] leading-5 font-[340] tracking-[3.5%]"
              placeholder="password"
              type={isPasswordVisible ? "text" : "password"}
            ></input>
            <button
              className="absolute inset-y-0 right-0 pr-2"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    color="#6D7B88"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    color="#6D7B88"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#6D7B88"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    color="#6D7B88"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-between mt-6 mb-8">
            <span className="items-center flex">
              <input type="checkbox" className="w-5 h-5 mr-2" />
              <span className="text-[#222B33] font-[360] text-base font-sans ">
                Keep me signed in
              </span>
            </span>
            <span className="text-black justify-end underline font-medium font-sans text-base underline-offset-4">
              Forgot password?
            </span>
          </div>

          {isError && (
            <div className="text-center text-red-500">
              There was a problem Logging in.
            </div>
          )}

          <button
            className="w-full bg-[#50F89A] border border-[#00E687] mb-3 pt-4 pb-[14px] font-sora text-[16px] leading-[18px] font-[460] text-[#005237]"
            onClick={sendCredentials}
          >
            Sign in
          </button>

          <div>
            <button className="text-[#3B4752] w-full border border-[#CFD8E1] inline-flex justify-center gap-[10px] mb-6 font-sora text-[16px] leading-[18px] font-[460] pt-4 pb-[14px] items-end">
              <img src={GoogleLogo} height={20} width={20} className="" />
              Sign in with Google
            </button>
          </div>
          <div className="text-[#3B4752] font-[360] text-[16px] leading-7 text-center">
            Haven't joined yet?{" "}
            <span className="underline font-medium text-[#11161B] text-[16px] leading-7 underline-offset-4">
              Sign in
            </span>
          </div>
        </div>
        <div className="bg-slate-600 h-full w-screen bg-[url('./assets/Building.png')] bg-cover"></div>
      </div>
    </>
  );
}
