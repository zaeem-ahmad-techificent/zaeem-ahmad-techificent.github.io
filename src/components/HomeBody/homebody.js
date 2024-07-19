

import { Box, Button, Typography, Grid, useMediaQuery, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";



import itemData from './IconData'

const Homepage = () =>
{
    return (
        <Box >
            <Grid p={2} container spacing={{ xs: 0.5, sm: 4, md: 4 }}>
                <Grid item mt={{ sm: 2, md: 2 }} xs={4} sm={2} md={2} >
                    <ImageList cols={1}>
                        {itemData.slice(0, 2).map((item) => (
                            <Box key={item?.img}>
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            textWrap: "wrap",
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                whiteSpace: "normal",
                                                fontSize: { xs: '0.7rem', sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        titleWrap="wrap"
                                        title={item?.title}
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item mt={{ sm: 12, md: 12 }} xs={4} sm={2} md={2}>
                    <ImageList cols={1} rowHeight={164}>
                        {itemData.slice(2, 4).map((item) => (
                            <Box key={item?.img} >
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                fontSize: { xs: '0.7rem', sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        title={item?.title}
                                        titleWrap="wrap"
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item mt={{ sm: 7, md: 7 }} xs={4} sm={2} md={2}>
                    <ImageList cols={1} rowHeight={164}>
                        {itemData.slice(4, 6).map((item) => (
                            <Box key={item?.img} >
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                fontSize: { xs: '0.7rem', sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        title={item?.title}
                                        titleWrap="wrap"
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    <ImageList cols={1} rowHeight={164}>
                        {itemData.slice(6, 9).map((item) => (
                            <Box key={item?.img} >
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                fontSize: { xs: '0.7rem', sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        title={item?.title}
                                        titleWrap="wrap"
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item mt={{ sm: 15, md: 15 }} xs={4} sm={2} md={2}>
                    <ImageList cols={1} rowHeight={164}>
                        {itemData.slice(9, 11).map((item) => (
                            <Box key={item?.img} >
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                whiteSpace: "normal",
                                                fontSize: { xs: "0.7rem", sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        title={item?.title}
                                        titleWrap="wrap"
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item mt={{ sm: 8, md: 8 }} xs={4} sm={2} md={2}>
                    <ImageList cols={1} rowHeight={164}>
                        {itemData.slice(11, 13).map((item) => (
                            <Box key={item?.img} >
                                <ImageListItem
                                    key={item?.img}
                                    sx={{
                                        height: { xs: "100px !important", sm: "110px !important", md: "140px !important", lg: "190px !important" },
                                        backgroundColor: item?.BgColor,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box>
                                        {item.img}
                                    </Box>
                                    <ImageListItemBar
                                        sx={{
                                            backgroundColor: item?.BgColor,
                                            textAlign: "center",
                                            borderRadius: '20px',
                                            "& .css-dasnyc-MuiImageListItemBar-title": {
                                                whiteSpace: "normal",
                                                fontSize: { xs: "0.7rem", sm: "0.875rem", md: "1rem", lg: "1rem" }
                                            }
                                        }}
                                        position='below'
                                        title={item?.title}
                                    >
                                    </ImageListItemBar>
                                </ImageListItem>
                            </Box>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Homepage;

