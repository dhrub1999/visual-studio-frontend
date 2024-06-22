'use client';
import React, { useState, useEffect } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Logo from '../icons/Logo';
import PaddingContainer from './PaddingContainer';
import { navUl, navLi } from '@/lib/framer-motion';

const menu = [
  { name: 'Home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'pricing', link: '/pricing' },
  { name: 'blogs', link: '/blogs' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true); //* Initially visible
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    const updateOpenState = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    updateOpenState();

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check scroll direction
      if (prevScrollPos > currentScrollPos) {
        setIsSticky(true); //* Scrolling up, show header
      } else {
        setIsSticky(false); //* Scrolling down, hide header
      }

      // Save current scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`border-b border-neutral-800 transition-all duration-200 ease-in ${isSticky ? 'bg-white sticky top-0 z-50' : ''}`}
    >
      <PaddingContainer
        classname={`relative flex items-center justify-between bg-overlay-2 py-2 ${open ? '' : 'backdrop-blur-[1px]'}`}
      >
        <div>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <nav
          className={`md:bg-transparent max-w-screen absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-overlay-2 backdrop-blur-xl transition-all md:relative md:h-full md:translate-x-0 md:flex-row md:justify-end md:backdrop-blur-none ${open ? 'visible translate-x-0' : 'hidden translate-x-full'}`}
        >
          <motion.ul
            variants={navUl}
            // initial='hidden'
            initial={false}
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-12 lg:gap-x-16'
          >
            {menu.map((item) => (
              <motion.li
                onClick={() => setOpen(false)}
                variants={navLi}
                key={item.name}
                className={`capitalize underline-offset-4 transition-all duration-200 hover:text-neutral-100 hover:underline ${pathName === item.link || (pathName === '/' && item.link === '/') ? 'text-brand-600' : 'text-neutral-300'}`}
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className='block md:hidden' aria-label='mobile menu'>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            direction='right'
            color='#F8F9FA'
            rounded
            distance='sm'
            size={24}
          />
        </div>
      </PaddingContainer>
    </header>
  );
};

export default Header;
