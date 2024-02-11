import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
})

const productSlice = createSlice({
    name : 'product',
    initialState: {
        data : [],
        status : STATUSES.IDLE      
    },
    reducers : {
        // setItems(state, action){
        //     state.data = action.payload
        // },
        // setStatus(state, action){
        //     state.status = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItems.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchItems.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
})


//Thunks
export const fetchItems = createAsyncThunk('items/fetch',async()=>{
    const res = await fetch('https://dummyjson.com/products');
        const {products} = await res.json();
        return products
})


export const {setItems,setStatus} = productSlice.actions
export default productSlice.reducer






// dispatch(setStatus(STATUSES.LOADING))
//     try{
//         const res = await fetch('https://dummyjson.com/products');
//         const {products} = await res.json();
//         dispatch(setItems(products))
//         dispatch(setStatus(STATUSES.IDLE))
//     }catch(err){
//         console.log(err)
//         dispatch(setStatus(STATUSES.ERROR))
//     }