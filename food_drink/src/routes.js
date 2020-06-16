import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ReviewProduct from "./pages/ReviewProduct/ReviewProduct";
const routes = [
    {
        path: "/",
        exact: true,
        main: ({match}) => <HomePage match={match}/>
    },
    {
        path: "",
        exact: true,
        main: () => <ReviewProduct />
    },
    {
        path: "",
        exact: true,
        main: () => <ReviewProduct />
    }
]

export default routes;