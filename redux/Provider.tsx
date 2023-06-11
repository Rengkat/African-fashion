"use client";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import { store } from "./store";
interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
