import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { useSelector } from "react-redux";
// import { toggleAuth } from '../store/actions';

function AppRouter(props) {
    
    const isAuth = useSelector(state => state.isAuth);

    return (
       <Routes>
        {isAuth && authRoutes.map(el=> <Route path={el.path}
            exact
         Component={el.Component}
         key={el.path}
         />
         )}
        {publicRoutes.map(el=> <Route path={el.path}
        exact
         Component={el.Component}
         key={el.path}
         />
         )}
         <Route path='*' 
         element={<Navigate to="/" replace />}/>
       </Routes>
    );
}

export default AppRouter;