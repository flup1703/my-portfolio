"use client";

import { useState } from "react";
import "./navigation.css";

export default function Navigation({ header, logo, link, items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="container nav-container">
        <a href={link} className="logo">
          <img
            className="logo-image"
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
          {header}
        </a>
        <ul className="nav-links">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>
                  {item.value}
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="sidebar">
          <i className="fa fa-bars" onClick={() => setIsOpen(!isOpen)}>
            <ul className={`sidebar-links ${isOpen ? "open" : "close"}`}>
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href}>
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
