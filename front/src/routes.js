import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./pages/App";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path ='/' exact component = {App}/>
            </Switch>
        </BrowserRouter>
    )
}