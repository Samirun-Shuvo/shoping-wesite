"use strict";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="#">HOME</Link>
          <Link className="navbar_link relative" href="about">CATEGORIES</Link>
          <Link className="navbar_link relative" href="about">MEN'S</Link>
          <Link className="navbar_link relative" href="about">WOMEN'S</Link>
          <Link className="navbar_link relative" href="about">JEWELRY</Link>
          <Link className="navbar_link relative" href="about">PERFUME</Link>
          <Link className="navbar_link relative" href="about">BLOG</Link>
          <Link className="navbar_link relative" href="about">HOT OFFERS</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
