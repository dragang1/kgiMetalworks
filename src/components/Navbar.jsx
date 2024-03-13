import React from 'react'
import { useEffect, useState } from 'react';
import BurgerMenu from './burgermenu/BurgerMenu';

function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (<BurgerMenu />) : (
                <div className='font-oswald bg-mainBg flex justify-between items-center px-20 min-h-[150px]'>
                    <div className='flex flex-col justify-center items-center text-headingColor font-bold '>
                        <h1 className='text-[5rem] uppercase'>Kgi</h1>
                        <span className='text-[1.5rem]'>MetalWorks</span>

                    </div>
                    <div className=' flex justify-between items-center gap-10 font-medium text-xl'>
                        <p>Početna</p>
                        <p>O nama</p>
                        <p>Galerija</p>
                        <p>Kontakt</p>
                    </div>

                </div>

            )}


        </>
    )
}

export default Navbar