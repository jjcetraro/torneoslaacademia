import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const links = [
    { name: "Torneos", link: "/torneos" },
    { name: "Jugadores", link: "/jugadores" },
  ];
  if (process.env.REACT_APP_SHOW_RANKING === "true") {
    links.push({ name: "Ranking", link: "/ranking_anual" });
  }
  if (process.env.REACT_APP_SHOW_REGULATION === "true") {
    links.push({ name: "Reglamento", link: "/reglamento" });
  }

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          {process.env.REACT_APP_NAME}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faClose : faBars}></FontAwesomeIcon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {links.map((link, index) => {
            return (
              <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  className="text-gray-800 hover:text-gray-400 duration-500"
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
