import { createContext, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

export const UserContext = createContext(null as any);
export const UserUpdateContext = createContext(null as any);

export default function App() {
  const [userData, setUserData] = useState(false);

  function setAuthData(response: boolean) {
    setUserData(response);
  }

  return (
    <div>
      <UserContext.Provider value={userData}>
        <UserUpdateContext.Provider value={setAuthData}>
          {userData ? <Logout /> : <Login />}
        </UserUpdateContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
