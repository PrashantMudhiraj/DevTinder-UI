import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
    },
});

export const { addFeed } = feed.actions;
export default feed.reducer;
