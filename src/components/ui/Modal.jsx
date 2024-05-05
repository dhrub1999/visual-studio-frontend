import React from 'react';
import { IoClose } from 'react-icons/io5';
import FeatureCard from './FeatureCard';

const Modal = () => {
  return (
    <div>
      <div aria-label='Modal Controls'>
        <IoClose />
        <button>Remind Later</button>
      </div>
      <FeatureCard />
    </div>
  );
};

export default Modal;
