"use client";
import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  value: string;
  type?: string;
  min?: number;
  max?: number;
};
export const Input: React.FC<Props> = (props) => {
  const { value, type = "text", min, max } = props;
  return (
    <Form.Control
      className="bg-gray-800 h-8 rounded-md  border-1 border-primary-400/20 focus:border-primary-300 outline-none px-2  mb-3 [&::-webkit-inner-spin-button]:opacity-50 [&::-webkit-inner-spin-button]:h-5 [&::-webkit-outer-spin-button]:opacity-50 [&::-webkit-outer-spin-button]:h-5 appearance-none hover:border-primary-400/50 transition-colors duration-300 cursor-pointer"
      type={type}
      id={value}
      min={min}
      max={max}
      placeholder={`Search by ${value}`}
    />
  );
};
