import { Link } from "../../components/atoms/Link";
import { PATH } from "../../constants/Routes";

const Home = () =>
(
    <section className="relative h-screen bg-black lg:bg-white flex items-center lg:justify-between z-0">
        <div className="flex justify-center w-full z-10 lg:w-1/3 lg:max-w-screen-xl lg:px-4 lg:py-32">
            <div className="max-w-xl text-center ">
                <h1 className="text-4xl font-extrabold text-black mb-10 px-3 text-left">
                    Ready to become an <br className="block" />
                    <strong className="text-red-600 pl-1">
                        Astronaut <span className="text-black">?</span>
                    </strong>
                </h1>
                <p className="mb-10 px-3 text-left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    tenetur fuga ducimus numquam ea!
                </p>
                <div className="flex justify-around lg:flex-row-reverse">
                    <Link to={PATH.DOIT} variant="outline">Not yet</Link>
                    <Link to={PATH.COMPANIES + "/spacex"} variant="solid">Yes, i"m ready</Link>
                </div>
            </div>
        </div>
        <img className="absolute scale-x-[-1] z-0 object-cover h-screen right-0 2xl:relative" src="https://cdn.dribbble.com/users/1058830/screenshots/16416801/media/2b524838094f3ba96d312f477f8d07fe.png?compress=1&resize=1000x750&vertical=top" />
        <a href="https://dribbble.com/jarodocton" className="absolute text-white bottom-0 right-0 p-2 underline hover:text-blue-500 z-10" target="_blank">Jarod Octon</a>
        <div className="absolute inset-0 bg-white opacity-50 sm:block 2xl:hidden z-0" />
    </section>
);

export default Home