import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    return currentPath === path ? children : null;
}

export default Route;