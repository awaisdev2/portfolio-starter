import { React } from "react";
import { Link } from "react-scroll";

const Header = () => {

  return (
    <header className="pt-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="uppercase font-bold m-0 text-2xl">
              <span className="text-blue-300">Muha</span>
              <span className="text-purple-500">mmad</span>
            </p>
            <p className="text-2xl font-bold text-slate-50 m-0">AWAIS</p>
          </div>
          <Link
          smooth={true}
          spy={true}
            className="bg-blue-600 p-2 rounded-xl cursor-pointer"
            to="work"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
