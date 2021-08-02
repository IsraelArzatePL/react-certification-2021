import React from "react";
import Navigation from "./Navigation";
import AuthProvider from "../../Providers/AuthProvider";
import ApiProvider from '../../Providers/ApiProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../Login/Login";
import { StyledContainer } from "./Styles";
import CardsContainer from "../Cards/CardsContainer";
import { AnimatePresence } from 'framer-motion'
import Detail from "../Detail/Detail";

const MainLayout = () => {
    return (
        <AuthProvider>
            <ApiProvider>
                <Router>
                    <Navigation />
                    <StyledContainer>
                        <AnimatePresence exitBeforeEnter>
                            <Switch>
                                <Route path="/" exact>
                                    <CardsContainer />
                                </Route>
                                <Route path="/detail">
                                    <Detail />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    </StyledContainer>
                </Router>
            </ApiProvider>
        </AuthProvider>
    );
};
export default MainLayout;