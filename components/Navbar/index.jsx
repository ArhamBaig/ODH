"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [subLiActive, setSubLiActive] = useState("");
  const [sidebarLiActive, setSidebarLiActive] = useState("");
  const [sidebarSubLiActive, setSidebarSubLiActive] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 1024) {
        setSidebarToggle(false);
      } else if (window.outerWidth <= 1023) {
        setLiActive("");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseClickLi = (link) => () => {
    // e.stopPropogation();
    if (link.title === "Services") {
      setSubLiActive("Report");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }
    if (link.title === "Countries") {
      setSubLiActive("All countries");
      if (liActive === link.title) {
        setLiActive("");
      } else {
        setLiActive(link.title);
      }
    }
  };
  const handleMouseClickLowerDiv = (link) => () => {
    setLiActive("");
  };

  return (
    <>
      <div className="z-40 text-black fixed select-none ">
        <div className="flex justify-between lg:justify-center items-center w-screen lg:h-[120px] whitespace-nowrap px-3  bg-white relative shadow-md">
          <Link href="/">
            <Image
              className=" w-[180px] mr-10 p-1"
              alt="Go to home"
              width={180}
              height={90}
              src={"/assets/logo.png"}
            />
          </Link>
          <ul className=" hidden lg:flex  gap-10 lg:gap-12 items-center ">
            {navLinks.map((link) => (
              <li
                className="flex cursor-default relative justify-center items-center"
                key={link.title}
                onClick={
                  link.dropdown
                    ? handleMouseClickLi(link)
                    : handleMouseClickLowerDiv("")
                }
              >
                {link.href ? (
                  <Link href={link.href}>{link.title}</Link>
                ) : (
                  link.title
                )}
                {link.dropdown && (
                  <ChevronDown
                    className={`ml-2 transition-transform transform w-5 h-5 ${
                      liActive === link.title ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-x-5 justify-center items-center">
            <div className="lg:hidden flex  px-8 mt-2 z-30 ">
              <Menu
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setSidebarToggle(!sidebarToggle)}
              />
            </div>
          </div>
          <Link
            className="bg-secondary rounded-lg p-2 hidden  lg:block mt-4 ml-5"
            href="/order"
          >
            ORDER NOW
          </Link>
        </div>

        <div
          className={`dropdown absolute left-[0%] xl:left-[8%] 2xl:left-[11%] flex justify-center duration-300 mx-auto w-[100vw] xl:w-[85vw] 2xl:w-[70vw] bg-gradient-to-b bg-white rounded-b-lg shadow-lg
           transition-all ease-in-out  
          ${
            liActive === "Services" || liActive === "Countries"
              ? "dropdown-enter"
              : "dropdown-exit"
          }`}
        >
          {navLinks.map((link) =>
            Array.isArray(link.dropdown) &&
            link.dropdown.length > 0 &&
            link.title === liActive ? (
              <ul key={link.title} className="flex flex-col">
                {link.dropdown.map((subLink) => (
                  <Link
                    href={subLink?.href}
                    key={subLink.title}
                    className={`p-2 pr-20 flex items-center justify-between group hover:bg-black/10 transition-all duration-300 rounded-md ${
                      subLink.title === subLiActive ? "bg-black/10" : ""
                    }`}
                    onMouseEnter={() => setSubLiActive(subLink.title)}
                    onClick={subLink.href ? handleMouseClickLowerDiv("") : ""}
                  >
                    <li className="whitespace-nowrap w-full">
                      {subLink.title}
                    </li>

                    {subLink.subdropdown && (
                      <ChevronRight
                        className={`h-5 w-5 transition-all duration-700 opacity-0 group-hover:opacity-100 ${
                          subLiActive === subLink.title
                            ? "translate-x-10 opacity-100"
                            : ""
                        }`}
                      />
                    )}
                  </Link>
                ))}
              </ul>
            ) : null
          )}
          <div
            className={`ml-8 pl-8 ${
              liActive === "Services" || liActive === "Countries"
                ? "border-l-[1px] border-black/10"
                : ""
            }  lg:w-[1000px]`}
          >
            <ul className="grid grid-cols-3 gap-x-3  ">
              {navLinks.map((link) =>
                Array.isArray(link.dropdown) &&
                link.dropdown.length > 0 &&
                link.title === liActive
                  ? link.dropdown.map((subLink) =>
                      Array.isArray(subLink.subdropdown) &&
                      subLink.subdropdown.length > 0
                        ? subLink.subdropdown.map((subSubLink) => {
                            return (
                              subLink.title === subLiActive &&
                              subLink.subdropdown && (
                                <Link
                                  key={subSubLink.title}
                                  href={subSubLink.href}
                                  className=" w-fit"
                                >
                                  <li
                                    onClick={handleMouseClickLowerDiv("")}
                                    className={`p-2 hover:text-secondary transition-all w-fit`}
                                  >
                                    {subSubLink.title}
                                  </li>
                                </Link>
                              )
                            );
                          })
                        : null
                    )
                  : null
              )}
            </ul>
          </div>
        </div>

        <div
          onClick={handleMouseClickLowerDiv("")}
          className={`bg-black/50 flex h-screen transition-opacity duration-300 z-0  ${
            liActive ? "opacity-100" : "opacity-0 hidden"
          }`}
        ></div>

        <div
          className={`${
            sidebarToggle ? "sidebar-visible" : "sidebar-hidden"
          } p-6 bg-gradient-to-b from-primary to-tertiary text-white right-0 top-0 h-full w-full fixed z-40 transition-all`}
        >
          <div className="relative flex justify-between pt-2">
            <h2 className="px-3 py-10 text-2xl"></h2>
            <X
              className="h-7 w-7 object-contain cursor-pointer"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </div>
          <div className="items-center flex flex-col px-4 h-[84%] overflow-y-scroll overflow-hidden">
            <ul className="list-none mt-10 flex flex-col w-full">
              {navLinks.map((link) => (
                <li key={link.title} className={`py-1 cursor-pointer w-full `}>
                  {/* link.href goes here */}
                  <Link
                    href="#"
                    className="flex justify-between bg-tertiary  rounded-sm"
                  >
                    <p className="py-1 px-2">{link.title}</p>
                    {link.dropdown && (
                      <div
                        className="px-2 flex justify-center items-center rounded-r-sm bg-gray-800"
                        onClick={() =>
                          setSidebarLiActive((prev) =>
                            prev === link.title ? "" : link.title
                          )
                        }
                      >
                        {sidebarLiActive === link.title ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </Link>
                  {link.dropdown && sidebarLiActive === link.title && (
                    <div
                      className={`sidebar-dropdown ${
                        sidebarLiActive === link.title
                          ? "sidebar-dropdown-enter"
                          : "sidebar-dropdown-exit"
                      } transition-all ease-in-out duration-300`}
                    >
                      <ul className="list-none mt-4 flex flex-col">
                        {link.dropdown.map((subLink) => (
                          <li
                            key={subLink.title}
                            className="py-1 mx-2  cursor-pointer"
                          >
                            <Link
                              className={`flex justify-between bg-tertiary  rounded-sm `}
                              href="#"
                            >
                              <p className="py-[2px] px-2">{subLink.title}</p>
                              {subLink.subdropdown && (
                                <div
                                  className="px-2 flex justify-center items-center rounded-r-sm bg-gray-800"
                                  onClick={() =>
                                    setSidebarSubLiActive((prev) =>
                                      prev === subLink.title
                                        ? ""
                                        : subLink.title
                                    )
                                  }
                                >
                                  {sidebarSubLiActive === subLink.title ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </div>
                              )}
                            </Link>
                            {subLink.subdropdown &&
                              sidebarSubLiActive === subLink.title && (
                                <ul className="list-none mt-4 flex flex-col">
                                  {subLink.subdropdown.map((nestedSubLink) => (
                                    <Link
                                      key={nestedSubLink.title}
                                      href={nestedSubLink.href}
                                    >
                                      <li
                                        onClick={() =>
                                          setSidebarToggle(!sidebarToggle)
                                        }
                                        className="py-1 ms-6"
                                      >
                                        {nestedSubLink.title}
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
