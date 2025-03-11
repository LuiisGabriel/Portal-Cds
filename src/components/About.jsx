import React from 'react';
import { useUser } from '../lib/customHooks';
import Navbar from './Navbar';

const About = () => {
    const { user, authenticated } = useUser();
    if (!user || !authenticated) {
      return <div className="p-16 bg-gray-800 h-screen flex justify-center items-center">
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>;
    }

    return (
        <>
            <nav className="sticky top-0 z-50"><Navbar /></nav>
            <h1>Sobre</h1>
        </>
    );
}
export default About;