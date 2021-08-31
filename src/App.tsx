import * as React from "react";
import { TEXT } from "@/utils";
import '@/global.scss';

export default function App(): JSX.Element {
  React.useEffect(() => {
    document.title = import.meta.env.VITE_TITLE as string;
  }, []);
  return (
    <>
      <div className="App">hello world~~~~~{TEXT}</div>
      <div>{TEXT?.a?.b?.c}</div>
      <div>{["DEMO", "TEXT"].includes(TEXT) ? "includes" : "none"}</div>
      <div>
        {["DEMO", "TEXT"].find((key) => key === TEXT)
          ? "find includes"
          : "none"}
      </div>
    </>
  );
}

