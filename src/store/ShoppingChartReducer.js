import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total : 72,
    items: [
        {
            name: 'Red Shirt',
            image: 't-shirt.jpg',
            type: 'SHIRT',
            color: 'RED',
            size: "M",
            qty: 1,
            price : 17,
            notes: 'repeat order'
        },
        {
            name: 'Black Hoodie',
            image: 'hoodie.jpg',
            type: 'HOODIE',
            color: 'BLACK',
            size: "M",
            qty: 1,
            price : 35,
        },
        {
            name: 'Black Hoodie',
            image: 'hoodie.jpg',
            type: 'HOODIE',
            color: 'BLACK',
            size: "M",
            qty: 1,
            price : 20,
        },
        
    ]
};

const shoppingSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      Increment : (state, action)=>{
        state.items[action.payload].qty = state.items[action.payload].qty + 1;
        var total = 0;
        for(let i = 0; i < state.items.length; i++){
            total = total + (state.items[i].qty * state.items[i].price)
        }
        state.total = total
      },
      Decrement : (state, action)=>{
        state.items[action.payload].qty = state.items[action.payload].qty - 1;
        var total = 0;
        for(let i = 0; i < state.items.length; i++){
            total = total + (state.items[i].qty * state.items[i].price)
        }
        state.total = total
      },
      Delete : (state, action)=>{
        state.items.splice(action.payload,1)
        var total = 0;
        for(let i = 0; i < state.items.length; i++){
            total = total + (state.items[i].qty * state.items[i].price)
        }
        state.total = total
      },
    },
});

export const { Increment, Decrement, Delete } = shoppingSlice.actions;
export default shoppingSlice.reducer;