import { createContext, useState, useContext, useEffect } from "react";
import { useMobileDetect } from ".";
import { getUserInfo } from "../fetch";
import { type GetProp } from "antd";
import { Attachments } from "@ant-design/x";
interface UserInfoProps {
  token: string;
  user_name: string;
  realname: any;
}
const GlobalContext = createContext<{
  userInfo: UserInfoProps;
  [x: string]: any;
}>(null!);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfoProps>(null!);
    const [headerOpen, setHeaderOpen] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<
    GetProp<typeof Attachments, "items">
  >([]);
  let device = useMobileDetect();
  useEffect(() => {
    // getUserInfo().then((res) => {
    //   setUserInfo(res.data);
    //   window.localStorage.setItem("userInfo", JSON.stringify(res.data));
    // });
  }, []);
  return (
    <GlobalContext.Provider value={{ headerOpen, setHeaderOpen,userInfo, setUserInfo,attachedFiles, setAttachedFiles, device }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
