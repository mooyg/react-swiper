import React from 'react';
import './App.css'
import Swiper from './Swiper'
const App = () => {
    return (
        <div className={'app'}>
            <Swiper images={['https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=648&q=80', 'https://images.unsplash.com/photo-1535459548739-91d8b0a25e3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60']}/>
        </div>
    );
};

export default App;
