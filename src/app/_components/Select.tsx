"use client";
import React, { ReactNode } from "react";
import { Form } from "react-bootstrap";

type Props = {
  id: string;
  children: ReactNode;
};
export const Select: React.FC<Props> = ({ id, children }) => {
  return (
    <Form.Select
      className="bg-gray-800 h-8 rounded-md border-1 border-primary-400/20 hover:border-primary-400/50 transition-colors duration-300 focus:border-primary-300 outline-none px-2 mb-3 overflow-y-auto cursor-pointer w-full"
      id={id}
    >
      {children}
    </Form.Select>
  );
};
