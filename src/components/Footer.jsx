import React from "react";
import logo_light from "../assets/logo/logo_light.png";
import logo_dark from "../assets/logo/logo_dark.png";
import { usePageConfig } from "../hooks/PageConfigProvider";

const Footer = () => {
  const { pageConfig } = usePageConfig();
  return (
    <footer className=" bg-base-200 text-base-content w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="footer sm:footer-horizontal ">
          <aside>
            <div className="mb-5">
              {pageConfig.theme === "light" ? (
                <a href="/">
                  <img src={logo_light} alt="Red_hope_logo" className="w-64" />
                </a>
              ) : (
                <a href="/">
                  <img src={logo_dark} alt="Red_hope_logo" className="w-64" />
                </a>
              )}
            </div>

            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
