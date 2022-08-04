import React, { useState } from "react";
import Logo from "../Logo.svg";
import { ShoppingCart, Menu, Close } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex-col justify-between items-center w-full fixed bg-white z-10">
      <nav className="flex mx-auto w-full max-w-6xl h-20 items-center px-4 justify-between">
        <img className="h-12 mb-2" src={Logo} />
        <ul className="list-none flex menu-links">
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Home
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Categories
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Products
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Shop
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Blog
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              About
            </li>
          </a>
          <a className="text-[#008F95] hover:text-[#06444A]" href="">
            <li className="p-2 m-2 border-b-2 border-white hover:border-b-[#06444A] hover:bg-[#97d8da]">
              Contact
            </li>
          </a>
        </ul>
        <div className="flex items-center">
          <IconButton>
            <ShoppingCart className="text-[#06444A]" />
          </IconButton>
          <Avatar className="ml-2 mr-2" />
          {!menuOpen ? (
            <IconButton
              className="dropdown-button !hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="text-[#06444A]" />
            </IconButton>
          ) : (
            <IconButton onClick={() => setMenuOpen(false)}>
              <Close className="text-[#06444A]" />
            </IconButton>
          )}
        </div>
      </nav>
      <div className="flex w-full bg-white">
        <ul className={`w-full ${!menuOpen && "hidden"}`}>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Home
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Categories
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Products
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Shop
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Blog
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              About Us
            </li>
          </a>
          <a href="">
            <li className="text-center p-1 text-[#06444A] text-lg hover:bg-[#97D8DA]">
              Contact Us
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
