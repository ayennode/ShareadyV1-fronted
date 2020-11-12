import React from 'react';
import Navbar from '../components/navbar/Navbar'
import SignUpBox from '../components/home/SignUpBox'
import WhatBox from '../components/home/WhatBox'

const Home = () => {
    return(<div>
            <Navbar />
            <SignUpBox/>
            <WhatBox />
        </div>
    )
}

export default Home;