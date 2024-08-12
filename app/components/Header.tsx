'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import { NavItem } from '../types';

interface HeaderProps {
    navMenuItems: NavItem[];
}

const Header: FC<HeaderProps> = ({ navMenuItems }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
    const navRef = useRef<HTMLUListElement>(null);

    const handleSubMenuToggle = (id: number) => {
        setActiveSubMenu(prevId => (prevId === id ? null : id));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setActiveSubMenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header className="bg-darkCyan">
            <nav>
                <ul ref={navRef} className="flex">
                    {navMenuItems.map(({ id, title, subMenu }) => (
                        <li onClick={() => subMenu && handleSubMenuToggle(id)} key={id} className={`px-8 cursor-pointer relative text-4xl leading-9 first-letter:text-yellow hover:bg-black hover:text-white ${activeSubMenu === id ? 'bg-black text-white' : ''}`}>
                            <span>
                                {title}
                            </span>
                            {subMenu && (
                                <div className={` py-5 px-3 z-10 absolute left-0 w-[32rem] bg-darkCyan ${activeSubMenu === id ? 'block' : 'hidden'}`}>
                                    <ul
                                        className={`px-1 py-2 outline-4 outline outline-black`}
                                    >
                                        {subMenu.map(({ id: subId, title: subTitle, command }) => (
                                            <li key={subId} className='first-letter:text-yellow cursor-pointer text-black hover:text-white hover:bg-black flex justify-between'>
                                                <span>{subTitle}</span>
                                                <span>{command}</span>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
