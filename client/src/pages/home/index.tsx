import { Link } from '../../components/atoms/Link';
import { PATH } from '../../constants/Routes';

const Home = () =>
(
    <section className="flex justify-between h-screen bg-white">
        <div className="w-1/3 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-start">
            <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-9xl font-extrabold sm:text-5xl">
                    Ready to become an
                    <strong className="block font-extrabold text-rose-600">
                        Astronaut <span className='text-black'>?</span>
                    </strong>
                </h1>
                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    tenetur fuga ducimus numquam ea!
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <Link to={PATH.COMPANIES + "/spacex"} variant='solid'>Yes, i'm ready</Link>
                    <Link to={PATH.DOIT} variant='outline'>Not yet</Link>
                </div>
            </div>
        </div>
        <img src="https://cdn.dribbble.com/users/1058830/screenshots/16416801/media/2b524838094f3ba96d312f477f8d07fe.png?compress=1&resize=1000x750&vertical=top" className='transform scale-x-[-1]' />
        <a href="https://dribbble.com/jarodocton" className='absolute text-white bottom-0 right-0 p-2 underline hover:text-blue-500' target="_blank">Jarod Octon</a>
    </section>
);

export default Home