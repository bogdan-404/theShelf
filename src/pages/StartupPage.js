import { Container, Box, Typography } from "@mui/material";
import bookImage from '../img/1.png';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RateReviewIcon from '@mui/icons-material/RateReview';


function StartupPage() {

    return (
        <div>
            <Box sx={{ backgroundColor: "#C4DDDD", minHeight: "80vh" }}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "80vh",
                        }}>
                        <Box sx={{ flex: "1" }}>
                            <Typography
                                variant="body2"
                                sx={{ fontSize: "18px", color: "#687690" }}>
                                Welcome to theShelf!
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "64px",
                                    color: "black",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    lineHeight: "1.2"
                                }}>
                                Store all the read books and watched movies in one place.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: "18px",
                                    color: "#687690",
                                    marginTop: "1rem"
                                }}>
                                theShelf is a simple app that allows you to store all the books and movies you have read and watched in one place. You can also rate and add notes to each book and movie.
                            </Typography>
                        </Box>

                        <Box sx={{ flex: "1.25" }}>
                            <img
                                src={bookImage}
                                alt="book"
                                style={{
                                    maxWidth: "100%",
                                    marginBottom: "3rem",
                                    transform: "translateX(30%) scale(1.1)",
                                }} />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ minHeight: "80vh" }}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <div
                            style={{
                                width: "8%",
                                height: "5px",
                                backgroundColor: "black",
                                marginTop: "7rem",
                                marginBottom: "1rem auto"
                            }}>
                        </div>
                        <Typography
                            variant="h3"
                            sx={{ fontSize: "35px", fontWeight: "bold", color: "black", my: 3 }} >
                            How it works?
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                marginTop: "1rem"
                            }}>
                            Store all the books and movies you have read and watched in one place
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            width: "100%",
                            marginTop: "4rem",
                        }}>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "2rem",

                                width: "30%",
                                height: "200px",
                            }}>
                            <LibraryAddIcon sx={{ fontSize: "50px", color: "#008080" }} />
                            <Typography
                                variant="h3"
                                sx={{ fontSize: "20px", fontWeight: "bold", color: "black", my: 5, textAlign: "center" }} >
                                Save all the read books and  watched movies
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "2rem",

                                width: "30%",
                                height: "200px",
                            }}>
                            <RateReviewIcon sx={{ fontSize: "50px", color: "#008080" }} />
                            <Typography
                                variant="h3"
                                sx={{ fontSize: "20px", fontWeight: "bold", color: "black", my: 5, textAlign: "center" }} >
                                Add rating, notes and quotes
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "2rem",
                                width: "30%",
                                height: "200px",
                            }}>
                            <BorderColorIcon sx={{ fontSize: "50px", color: "#008080" }} />
                            <Typography
                                variant="h3"
                                sx={{ fontSize: "20px", fontWeight: "bold", color: "black", my: 5, textAlign: "center" }} >
                                Edit and delete
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default StartupPage;