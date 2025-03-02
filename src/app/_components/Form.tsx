import React, { ReactNode } from "react";
import { Input } from "./Input";

type Props = {
  children: ReactNode;
};
export const FormSide: React.FC<Props> = ({ children }) => {
  return (
    <form className="tabletMax:border-r border-primary-800">
      <h2 className="text-3xl mb-3">Search</h2>
      <div className="flex flex-col  gap-2 mobileMax:flex-row tabletMax:flex-col  tabletMax:w-[230px]">
        <Input value="name" />

        {children}
      </div>
    </form>
  );
};
