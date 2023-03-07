import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../../constants/Routes";
import { Navigation as navigationType } from "../../../models/navigation";

interface NavigationProps {
  navigation: navigationType[];
}

const Navigation: FunctionComponent<NavigationProps> = ({ navigation = [] }) => {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-black sm:relative sm:w-1/2">
      <ul className="flex">
        {navigation.map((nav) => (
          <li className="flex-1">
            <NavLink
              className="group group relative block p-4"
              to={PATH.COMPANIES + "/" + nav.url}
              children={({ isActive }) => (
                <>
                  <span
                    className={classNames(
                      "-sm:-top-px absolute inset-x-0 h-px w-full group-hover:bg-white sm:-bottom-px",
                      {
                        "block bg-red-600": isActive,
                      },
                    )}
                  />
                  <div className="items-c text-whiteenter flex justify-center gap-4">
                    <span className="text-sm font-medium text-white group-hover:font-semibold"> {nav.name} </span>
                  </div>
                </>
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
