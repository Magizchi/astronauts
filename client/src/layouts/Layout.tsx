import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer className="w-full text-center text-white bg-inherit">Rajanan.dev - 2023</footer>
        </>
    )
}

export default Layout