import { createSlice } from "@reduxjs/toolkit";

const persistedState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const cartSlice = createSlice({
    name : 'cart',
    initialState : persistedState,
    reducers: {
        add(state, action){
            const {id} = action.payload
            const existingItem = state.find(item => item.id === id)
            if(existingItem){
                existingItem.quantity +=1
            }else{
                state.push({...action.payload,quantity: 1})
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        remove(state, action){
            const newState = state.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState;
        },
        increment(state,action){
            const {id} = action.payload
            const existingItem = state.find(item => item.id === id)
            if(existingItem){
                existingItem.quantity +=1
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        decrement(state,action){
            const {id} = action.payload
            const existingItem = state.find(item => item.id === id)
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -=1
                localStorage.setItem('cart', JSON.stringify(state));
            }else if (existingItem && existingItem.quantity === 1) {
                return state.filter(item => item.id !== id);
            }
        },
        clearCart(state,action){
            localStorage.removeItem('cart')
            return []
        }
    }
})

export const { add, remove, increment, decrement, clearCart } = cartSlice.actions
export default cartSlice.reducer