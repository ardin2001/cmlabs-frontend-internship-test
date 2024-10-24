"use client";
import { Provider } from "react-redux";
import storeUser from "../redux/user/store";

export default function Layout({ children }: any) {
    return (
        <Provider store={storeUser} >
            {children}
        </Provider >
    )
}