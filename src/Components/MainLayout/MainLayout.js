import React from "react";
import Navigation from "./Navigation";
import AuthProvider from "../../Providers/AuthProvider";
import YouTubeProvider from '../../Providers/YouTubeProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../Login/Login";
import { StyledContainer } from "./Styles";
import { AnimatePresence } from 'framer-motion'
import Detail from "../Detail/Detail";
import VideosContainer from "../Videos/VideosContainer";
import Loader from "../Loader/Loader";

const MainLayout = () => {
    return (
        <AuthProvider>
            <YouTubeProvider>
                <Router>
                    <Loader/>
                    <Navigation />
                    <StyledContainer>
                        <AnimatePresence exitBeforeEnter>
                            <Switch>
                                <Route path="/" exact>
                                    <VideosContainer />
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
            </YouTubeProvider>
        </AuthProvider>
    );
};
export default MainLayout;