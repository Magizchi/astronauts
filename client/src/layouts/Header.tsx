import { FunctionComponent } from 'react';
import Button from '../components/atoms/button';
import Navigation from '../components/organisms/Navigation';
import { Navigation as NavigationType } from '../models/navigation';

interface HeaderProps {
    navigation: NavigationType[]
}
const Header: FunctionComponent<HeaderProps> = ({ navigation }) => {
    return (
        <header className="flex justify-between items-center py-5 px-8">
            <h1 className="text-white text-4xl">Astronauts</h1>
            <Navigation navigation={navigation} />
            <Button />
        </header>
    )
}

export default Header