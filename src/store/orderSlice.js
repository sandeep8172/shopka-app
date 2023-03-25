import { createSlice } from "@reduxjs/toolkit";

const star = <i className="fa-solid fa-star full_star"></i>;
const half_star = <i className="fa-solid fa-star-half-stroke half_star"></i>;

const initialState = {
    DUMMY_ITEMS: [
        {
            name: "Nikon Camera",
            img: "https://rukminim1.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            price: 500,
            description: "A camara",
            offer: "20% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "black",
            quantity: 0,
        },
        {
            name: "SET WET Deo",
            img: "https://rukminim1.flixcart.com/image/400/400/xif0q/deodorant/o/h/w/-original-imaga36aktvbsxmx.jpeg?q=70",
            price: 3,
            description: "smell good in every condition",
            offer: "to% OFF",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
            variant: "Swag Avatar",
            quantity: 0,
        },
        {
            name: "Woodland Shoes",
            img: "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/5aa98b7cee183286.jpg?q=70",
            price: 45,
            description: "Shoes that build for you",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "brown",
            quantity: 0,
        },
        {
            name: "Bath Towel",
            img: "https://rukminim1.flixcart.com/image/612/612/ke4kjgw0/bath-towel/9/v/h/bathtoweltealblue60-tezztlpblue60-tezz-original-imafuv958adbutt5.jpeg?q=70",
            price: 6,
            description: "A camara",
            offer: "10% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "extra soft",
            quantity: 0,
        },
        {
            name: "Lavie Woman's Handbag",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/hand-messenger-bag/t/4/p/-original-imagg7fqjtz66bgu.jpeg?q=70",
            price: 120,
            description: "Classic handbag that suits your peronality",
            offer: "Cool deal!",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.8,
            variant: "brown",
            quantity: 0,
        },
        {
            name: "Samsung LED Monitor",
            img: "https://rukminim1.flixcart.com/image/400/400/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
            price: 90,
            description: "Full HD monitor",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "Fulll HD",
            quantity: 0,
        },
        {
            name: " HRX Helmet",
            img: "https://rukminim1.flixcart.com/image/400/400/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70",
            price: 20,
            description: "helmet",
            offer: "25% OFF",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "Medium",
            quantity: 0,
        },
        {
            name: " Niviab Football",
            img: "https://rukminim1.flixcart.com/image/612/612/kp4difk0/ball/r/h/y/420-470-5-storm-niviafb353-football-nivia-original-imag3fdvg5vrezfc.jpeg?q=70",
            price: 15,
            description: "play safe",
            offer: "Hot deal!",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
            variant: "Yellow",
            quantity: 0,
        },
        {
            name: "Car Fan",
            img: "https://rukminim1.flixcart.com/image/400/400/l4d2ljk0/car-interior-fan/y/o/b/4-12-car-fan12v-electric-2-speed-dual-head-fans-360-degree-original-imagfa6qdvyynbub.jpeg?q=70",
            price: 6,
            description: "Get yourself cool",
            offer: "",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "Black",
            quantity: 0,
        },
        {
            name: "Car Light Bulb",
            img: "https://rukminim1.flixcart.com/image/400/400/kw104nk0/vehicle-light-bulb/z/x/m/12-h7-geniune-9000lm-6500k-72-w-led-automotive-headlight-bulbs-original-imag8sqneb7etpg6.jpeg?q=70",
            price: 10,
            description: "Get yourself cool",
            offer: "30% OFF",
            rating: [star, star, star, star, half_star],
            rating_Value: 4.5,
            variant: "white",
            quantity: 0,
        },
        {
            name: "Puzzles & Cubes",
            img: "https://rukminim1.flixcart.com/image/400/400/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70",
            price: 6,
            description: "Get yourself cool",
            offer: "Cool deal!",
            rating: [star, star, star, star],
            rating_Value: 4,
            variant: "circle",
            quantity: 0,
        },
    ],
    CART_ITEMS: [],
    totalQuantity: 0,
    userAddress: [],
};
const orderSlice = createSlice({
    name: "oredr",
    initialState,
    reducers: {
        addItems(state, actions) {
            const newItem = actions.payload;
            const length = state.DUMMY_ITEMS.length;
            for (let i = 0; i < length; i++) {
                state.DUMMY_ITEMS[i].quantity++;
            }
            const existingItems = state.CART_ITEMS.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItems) {
                state.CART_ITEMS.push({
                    id: newItem.id,
                    itemName: newItem.itemName,
                    img: newItem.img,
                    totalPrice: newItem.price,
                    variant: newItem.variant,
                    quantity: 1,
                });
            } else {
                existingItems.totalPrice += newItem.price;
                existingItems.quantity++;
            }
            console.log(state.CART_ITEMS);
        },
        addAddress(state, actions) {
            state.userAddress.push(actions.payload);
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
