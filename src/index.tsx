import React, {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import './assets/sass/index.scss'
import {RouterProvider} from 'react-router-dom';
import App from './App';
import router from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router}/>
        </Suspense>
    </React.StrictMode>
);