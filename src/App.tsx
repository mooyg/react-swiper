import React, {useEffect, useState} from 'react';
import './App.css'
import Swiper from './Swiper'
const App = () => {
    const arr = ['https://images.unsplash.com/photo-1537813075314-eab032200609?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=840&q=80']
    return (
        <div className={'app'}>
            <Swiper images={arr}/>
        </div>
    );
};

export default App;
