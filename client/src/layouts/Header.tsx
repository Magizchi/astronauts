import Button from '../components/atoms/button';
import Navigation from '../components/organisms/Navigation';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 px-8">
            <h1 className="text-white text-4xl">Astronauts</h1>
            <Navigation />
            <Button />
        </header>
    )
}

export default Header