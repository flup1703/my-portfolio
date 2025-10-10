"use client";

import { useState } from "react";
import { ModeToggle } from "../ModeToggle/ModeToggle";

export default function Navigation({ header, logo, link, items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-[100%] top-0 fixed z-50 backdrop-blur-md bg-(--main-nav-background) p-3 shadow-xl">
      <div className="container flex justify-between items-center">
        <a href={link} className="flex items-center justify-center text-2xl font-bold gap-5 text-(--main-foreground)">
          <img
            className="rounded-[50%]"
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
          {header}
        </a>
        <ul className="flex items-center justify-center gap-7 list-none max-[785px]:hidden">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} className="flex flex-row-reverse items-center justify-center gap-1 text-(--main-muted-foreground) hover:text-(--main-foreground)">
                  {item.value}
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        <ModeToggle />
        </ul>
        <div className='hidden max-[785px]:flex justify-center items-center gap-4'>
        <ModeToggle />
          <i className="fa fa-bars flex text-2xl" onClick={() => setIsOpen(!isOpen)}>
            <ul className={` ${isOpen ? "flex" : "hidden"} flex items-center justify-center flex-col fixed gap-3.5 p-[20px] rounded-2xl bg-(--main-background) right-[20px] top-[100px] w-[140px] h-[190px] text-base`}>
              {items.map((item, index) => {
                return (
                  <li key={index} className="">
                    <a href={item.href} className="flex items-center justify-center flex-row-reverse gap-3">
                      {item.value}
                      <i className={item.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </i>
        </div>
      </div>
    </nav>
  );
}
