
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardMedia, CardHeader, CardContent, Box, useMediaQuery, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import SlidesDataArray from "./Slider.data";


const SwipeableTabs = () =>
{
    return (
        <Box m={3}>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                    1800: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

            >
                {SlidesDataArray?.map((item, index) =>
                {
                    return (
                        <SwiperSlide key={item?.imageSrc + index}>
                            <Card
                                variant="outlined"
                                sx={{
                                    borderRadius: '10px',
                                    height: { lg: '600px', md: '670px', xs: "700px", sm: '750px' },
                                }}>
                                <Box m={3}
                                    sx={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'flex-start',
                                    }}>
                                    <CardMedia
                                        sx={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                        }}
                                        image={item?.imageSrc}
                                    />
                                </Box>
                                <Box
                                    sx={{ height: { lg: '270px', md: '390px', xs: "400px", sm: '450px' } }}>
                                    <CardContent>
                                        <Typography
                                            variant="h6">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}>
                                    <Rating
                                        readOnly
                                        value={"5"}
                                        name="feedback"
                                        precision={0.5}
                                        sx={{
                                            height: "2rem",
                                        }}
                                        emptyIcon={
                                            <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                                        }
                                    />
                                    <h2>{item?.name}</h2>
                                    <span className="cardContentSpan">{item?.companyName}</span>
                                </Box>
                            </Card>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default SwipeableTabs;