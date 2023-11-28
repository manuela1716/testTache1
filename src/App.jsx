import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register1 />}/>
                <Route path='/register2' element={<Register2 />}/>
                <Route path='/register3' element={<Register3 />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;