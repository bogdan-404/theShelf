import { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import NavigationContext from '../context/navigation';

function NavBar() {
    const { navigate } = useContext(NavigationContext);

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={() => navigate("/startup")}>
                    <CollectionsBookmarkIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }} onClick={() => navigate("/startup")}>
                    theShelf
                </Typography>
                <Button color="inherit" style={{ marginRight: 40 }} onClick={() => navigate("/books")}>Books</Button>
                <Button color="inherit" style={{ marginRight: 40 }} onClick={() => navigate("/movies")}>Movies</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;