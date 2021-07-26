import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CardsContainer from '../Components/Cards/CardsContainer'
import Login from '../Components/Login/Login'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/video">
                    <h1>Video</h1>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <CardsContainer />
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter