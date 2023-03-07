import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API } from "../constants/API";
import { Navigation } from "../models/navigation";
import Header from "./Header";

const Layout = () => {
  const [navigation, setnavigation] = useState<Navigation[]>([]);

  useEffect(() => {
    const getNavigation = async () => {
      const { data } = await axios.get(API.COMPANY + "/navigation");
      setnavigation(data);
    };
    getNavigation();
  }, []);

  return (
    <>
      <Header navigation={navigation} />
      <Outlet />
      <footer className="w-full bg-inherit text-center text-white">Rajanan.dev - 2023</footer>
    </>
  );
};

export default Layout;
