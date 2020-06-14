import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

const routes = [
    {
        path: "/",
        exact: true,
        main: ({match}) => <HomePage match={match}/>
    },
    {
        path: "",
        exact: true,
        main: () => <NotFoundPage/>
    }
]

export default routes;