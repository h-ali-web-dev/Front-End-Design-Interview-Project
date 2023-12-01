import { useContext } from "react";
import { UserUpdateContext } from "./App";

export default function Logout() {
  const setAuthData = useContext(UserUpdateContext);
  return (
    <>
      <div className="m-10 mx-auto max-w-lg">
        <button
          className="w-full bg-[#50F89A] border border-[#00E687] mb-3 pt-4 pb-[14px] font-sora text-[16px] leading-[18px] font-[460] text-[#005237]"
          onClick={() => setAuthData(false)}
        >
          Logout
        </button>
      </div>
    </>
  );
}
