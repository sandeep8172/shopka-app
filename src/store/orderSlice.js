import { createSlice } from "@reduxjs/toolkit";

const star = <i className="fa-solid fa-star full_star"></i>;
const half_star = <i className="fa-solid fa-star-half-stroke half_star"></i>;

const initialState = {
    DUMMY_ITEMS: [
        {
            name: "Nikon Camera",
            img: "./img/camera.webp",
            price: 500,
            description: "A camara",
            offer: "20% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: "SET WET Deo",
            img: "./img/deo.webp",
            price: 3,
            description: "smell good in every condition",
            offer: "to% OFF",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
        },
        {
            name: "Woodland Shoes",
            img: "./img/shoes.webp",
            price: 45,
            description: "Shoes that build for you",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: "Bath Towel",
            img: "./img/towel.webp",
            price: 6,
            description: "A camara",
            offer: "10% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: "Lavie Woman's Handbag",
            img: "./img/handbag.webp",
            price: 120,
            description: "Classic handbag that suits your peronality",
            offer: "Cool deal!",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.8,
        },
        {
            name: "Samsung LED Monitor",
            img: "./img/led_tv.webp",
            price: 90,
            description: "Full HD monitor",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: " HRX Helmet",
            img: "./img/helmet.webp",
            price: 20,
            description: "helmet",
            offer: "25% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: " Niviab Football",
            img: "./img/football.webp",
            price: 15,
            description: "play safe",
            offer: "Hot deal!",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
        },
        {
            name: "Car Fan",
            img: "./img/carfan.webp",
            price: 6,
            description: "Get yourself cool",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
        {
            name: "Car Light Bulb",
            img: "./img/carlight.webp",
            price: 10,
            description: "Get yourself cool",
            offer: "30% OFF",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
        },
        {
            name: "Puzzles & Cubes",
            img: "./img/puzzle.webp",
            price: 6,
            description: "Get yourself cool",
            offer: "Cool deal!",
            rating: [star, star, star, star],
            rating_Value: 4,
        },
    ],
};
const orderSlice = createSlice({
    name: "oredr",
    initialState,
    reducers: {},
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
