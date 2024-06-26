"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Btnpop from "../navbar/Btnpop";

const Btn = () => {
  const toggled = useSelector((state) => state.toggle.toggled);

  if (toggled) return null;

  return (
    <div className="max-w-[768px] mx-auto p-4 my-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">Get Tairo now</h2>
        <p className="text-sm text-[#6b7280] w-8/12 text-center py-[10px]">
          Don&apos;t waste time, it&apos;s time to kickstart your new app. Start
          building your next project with Tairo today.
        </p>
        <Btnpop />
        <p className="text-sm text-[#9ca3af]">
          Made by
          <Link href="#" className="hover:underline">
            cssninja.io
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Btn;
