import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../constants/API";
import { Company } from "../../models/company";

const Companies = () => {
  const [company, setCompany] = useState<Company>({} as Company);
  const { name } = useParams();
  const getArticle = async () => {
    const { data } = await axios.get(API.COMPANY + "/" + name);
    setCompany(data);
  };

  useEffect(() => {
    getArticle();
  }, [name]);

  if (!company.article) {
    return <p>loading...</p>;
  }
  return (
    <section className="z-10  mx-auto bg-black px-4 pb-12 sm:py-12 sm:px-6 lg:h-screen lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div className="relative mt-2 grid rounded p-6 sm:p-8">
          <div className="absolute inset-0 z-0 rounded bg-gray-200 opacity-20" />
          <div className="z-10 mx-auto text-center lg:max-w-md lg:text-left">
            <header className="w-full">
              <h2 className="text-xl font-bold text-white sm:text-3xl">{company.name}</h2>
            </header>
            <p className="mt-4 text-left text-white">{company.article.info}</p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 lg:py-8">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {company.article.spaceShips.map((spaceShip) => (
              <li key={spaceShip.id} className="relative w-full">
                <div className="absolute inset-0 bg-black opacity-20" />
                <h3 className="mx-2 px-2 text-2xl font-bold text-white">{spaceShip.name}</h3>
                <p className="absolute m-2 w-1/2 p-2 text-left text-sm text-white sm:text-base">{spaceShip.info}</p>
                <img
                  src={spaceShip.image}
                  alt={spaceShip.name}
                  className="aspect-square w-screen rounded object-cover sm:w-auto lg:w-screen"
                />
                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Companies;
