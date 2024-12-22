import React from 'react';
// import Navbar from '../Navar/Navbar';
import Banner from './Banner/Banner';
import Message from './Message/Message';
// import Ban from './Banner/Ban';


const Home = () => {
    return (
        <div className='container mx-auto'>
                <Banner></Banner>
                <Message></Message>
                {/* <Ban></Ban> */}
                  </div>
    );
};

export default Home;