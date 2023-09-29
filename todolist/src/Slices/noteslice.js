import {createSlice} from '@reduxjs/toolkit'

const notesSlice=createSlice({
    name:'notesSlice',
    initialState:{
        list:[],
    },
    reducers:{
        addlist:(state,action)=>{
            if(action.payload.data=='') return;
         state.list.push(action.payload)
         console.log('the list is',action.payload);
        },
        deletelist:(state,action)=>{
           state.list=state.list.filter(list => list.id !== action.payload);
        }
    }
})

export default notesSlice.reducer;
export const {addlist,deletelist}=notesSlice.actions