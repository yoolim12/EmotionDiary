import { configureStore, createSlice} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist"
import sessionStorage from "redux-persist/es/storage/session";

const Login = createSlice({
    name: "LoginReducer",
    initialState: { user: "", is_login: false},
    reducers: {
        login: (state, action) => {
            return { 
                user:action.payload.email, 
                is_login: true
            };
        },
        logout: () => {
            // deleteCookie("is_login")
            return { 
                user:"", 
                is_login: false
            };
        }
    }
});

const rootReducer = combineReducers({
    login:Login.reducer
});

const persistConfig = {
    key: 'root',
    storage:sessionStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer});

export const { login, logout } = Login.actions;
export default store;