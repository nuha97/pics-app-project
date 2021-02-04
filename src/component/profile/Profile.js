import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Setting from './Setting';
import MemoryList from '../memory/memoryDisplay/MemoryList'
const Profile = () => {
    return (
        <>
             <Header />
             <Setting/>
             <hr/>
             <MemoryList  />
             <Footer />
        </>
    );
}

export default Profile