import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../constants/API';
import { Company } from '../../models/company';

const Companies = () => {
    const [company, setCompany] = useState<Company>({} as Company);
    const { name } = useParams();
    const getArticle = async () => {
        const { data } = await axios.get(API.COMPANY + "/" + name);
        setCompany(data)
    };

    useEffect(() => {
        getArticle();
    }, [name])

    if (!company.article) {
        return <p>loading...</p>
    }
    return (
        <section className="h-screen px-4 mx-auto sm:py-12 sm:px-6 lg:px-8 bg-black">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div className="relative grid p-6 rounded sm:p-8">
                    <div className="absolute inset-0 rounded bg-gray-200 opacity-20 z-0" />
                    <div className="max-w-md mx-auto text-center lg:text-left z-10">
                        <header className='w-full'>
                            <h2 className="text-xl font-bold text-white sm:text-3xl">{company.name}</h2>
                        </header>
                        <p className="mt-4 text-white">
                            {company.article.info}
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:py-8">
                    <ul className="grid grid-cols-2 gap-4">
                        {company.article.spaceShips.map((spaceShip) =>
                            <li key={spaceShip.id} className="relative w-full">
                                <div className="absolute inset-0 bg-black opacity-10" />
                                <h3 className="text-white font-bold text-2xl px-2 mx-2">{spaceShip.name}</h3>
                                <p className="absolute text-white text-left w-1/2 p-2 m-2">
                                    {spaceShip.info}
                                </p>
                                <img src={spaceShip.image} alt={spaceShip.name} className="object-cover w-screen rounded aspect-square" />
                                <a
                                    href="#"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Companies