import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/id/234/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 10,
        comments: 3,
    },
    {
        id: 3,
        image: "https://picsum.photos/id/345/500/500",
        description: "Post 3 description",
        date: new Date().toISOString(),
        likes: 8,
        comments: 2,
    },
    {
        id: 4,
        image: "https://picsum.photos/id/456/500/500",
        description: "Post 4 description",
        date: new Date().toISOString(),
        likes: 12,
        comments: 7,
    },
    {
        id: 5,
        image: "https://picsum.photos/id/567/500/500",
        description: "Post 5 description",
        date: new Date().toISOString(),
        likes: 20,
        comments: 4,
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0,
            }
            state.push(newPost)
        },
        updatePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;
        },
    }
})

export const { createPost, updatePost } = postsSlice.actions
export default postsSlice.reducer;