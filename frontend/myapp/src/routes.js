import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "./containers/Login";
import Signup from './containers/Signup'
import UserDetail from "./containers/UserDetail";
import UserList from "./containers/UserList";

const BaseRouter = () => (
    <Routes>
        <Route exact path='/login' element={< Login />} />
        <Route exact path='/signup' element={< Signup />} />
        <Route exact path='/' element={< UserList />} />
        <Route exact path='/:userId' element={< UserDetail />} />
    </Routes>
)
export default BaseRouter;