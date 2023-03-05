import { Link } from "react-router-dom";
import { PATH } from '../../constants/Routes';

const DoIt = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-black">
            <img src={"https://cdn.dribbble.com/userupload/3592203/file/original-170c48e0976d8e7582a6e7f411a685ec.png?compress=1&resize=1024x768"} className="bg-clip-content p-5" />
            <div className='flex items-center'>
                <h2 className="text-5xl text-white font-bold">Do It!</h2>
                <Link
                    className="ml-5 inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    to={PATH.HOME}
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </Link>
            </div>
        </section >
    )
}

export default DoIt