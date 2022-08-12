import React from "react";
import { Link } from "react-router-dom";

import links from "../../data/footerLinks.json";

import BrandLink from "../BrandLink/BrandLink";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const Footer = () => (
  <footer className="bg-dark text-light flex justify-center">
    <div className="container flex flex-col md:flex-row justify-between py-8">
      <BrandLink classes="text-yellow mb-4 md:mb-0 inline-block order-1" />

      <div className="flex flex-col md:flex-row justify-between md:mx-auto space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
        {links.map((item) => (
          <div className="flex flex-col flex-wrap" key={item.title}>
            <h6 className="font-krona text-sm text-start">{item.title}</h6>
            <div className="text-start">
              {item.links.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className="lowercase text-sm block hover:text-yellow"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-yellow space-x-4 md:space-x-0 order-2 md:order-3 flex md:block mb-6 md:mb-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
