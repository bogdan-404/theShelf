import { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import NavigationContext from '../context/navigation';

function NavBar() {
    const { navigate } = useContext(NavigationContext);

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" style={{ marginLeft: 5 }} onClick={() => navigate("/startup")}>
                    <CollectionsBookmarkIcon />
                </IconButton>
                <IconButton color="inherit" onClick={() => navigate("/startup")}>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        theShelf
                    </Typography>
                </IconButton>
                <Box style={{ flexGrow: 1 }} />
                <Button color="inherit" style={{ marginRight: 30 }} onClick={() => navigate("/books")}>Books</Button>
                <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;