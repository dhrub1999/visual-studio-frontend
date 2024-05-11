'use client';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import FeatureCard from './FeatureCard';

const Modal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      document.body.style.overflowY = 'hidden';
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('modalClosed', 'true');
    document.body.style.overflowY = 'auto';
  };

  useEffect(() => {
    if (localStorage.getItem('modalClosed') === 'true') {
      setOpen(false);
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return (
    <dialog
      className={`fixed left-0 top-0 z-50 flex h-screen w-full flex-col-reverse items-center justify-center gap-4 overflow-auto bg-neutral-900 bg-opacity-50 backdrop-blur ${open ? 'fixed' : 'hidden'}`}
    >
      <button
        aria-label='close modal'
        className='absolute right-10 top-10 rounded-md border border-neutral-700 p-2 text-2xl-pacifico text-neutral-400 transition-all duration-200 hover:scale-110 hover:text-neutral-200'
        onClick={() => setOpen(!open)}
      >
        <IoClose className='' />
      </button>
      <FeatureCard />
    </dialog>
  );
};

export default Modal;
