import {
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

import logo from "../images/banner2.png"
const Footer = () => {
  const socialLinks = [
    { label: "Twitter", icon: FaXTwitter },
    { label: "Facebook", icon: FaFacebook },
    { label: "Instagram", icon: FaWhatsapp },
    { label: "YouTube", icon: FaYoutube },
  ];

  const links = [
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Status", key: "item-2-5" },
      { label: "Privacy policy", key: "item-2-4" },
    ],
  ];

  return (
    <div className="app flex items-end justify-center font-poppins">
      <div className="pt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-[#000000] text-white w-full p-4 relative">
        <div className="  ">
          <div className="footer-img flex items-center">
            <img
              src={logo}
              alt=""
              className="w-auto h-10"
            />

          </div>
          <div className="infos text-gray-400 py-2">
            <p>Copyright © 2024 Ministry of Labour and Social Protection.</p>
            <p>All rights reserved</p>
          </div>
          <div className="footer-icons flex items-center  justify-center py-2 space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-10 h-10 p-2 rounded-full bg-[#2E6C9D] hover:bg-white hover:text-[#2E6C9D] cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0  ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 cursor-pointer ${link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                        }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
