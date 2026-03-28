import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            console.log(action.payload.feed);
            return action.payload.feed;
        },
        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter((user) => user._id !== action.payload);
            return newFeed;
        },
    },
});

export const { addFeed, removeUserFromFeed } = feed.actions;
export default feed.reducer;
