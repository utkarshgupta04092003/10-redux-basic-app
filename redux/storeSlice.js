import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ['Burger', 'pizza', 'maggie']
    },
    reducers: {
        addItem: (state, action)=>{

            console.log('state:', state);
            console.log('action:', action);

            // In order redux, state is not mutable so we update state using this method
            // let newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
            
            // In redux-toolkit, we have to mutate the state, but behind the scene immer js library is used which take the prev state and current state and return the new state (basically work of older redux), so at the developer end, we can mutate the state and also we need not to return anything.
            
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{   
            state.items.pop();
        },
        clearCart: (state, action)=>{
            // state.items = [] // will not work because immer doesnot understand this statement.
            // because state works here as local variable, so it we do state = [], it will change locally only inside this function, but it will not modify the redux state.
            // so we have to mutate the state, so immer can work here
            state.items.length = 0  // []
        }
    }
})

export const { addItem, removeItem, clearCart } = storeSlice.actions;
export default storeSlice.reducer;
