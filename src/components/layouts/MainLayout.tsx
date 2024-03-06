import React from "react";
import NavBar from "../shared/NavBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <NavBar />
      {children}
    </div>
  );
};
