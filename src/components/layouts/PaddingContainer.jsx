import { cn } from '@/lib/utils';
import React from 'react';

const PaddingContainer = ({ classname, children }) => {
  return (
    <div className={cn(classname, 'px-6 md:px-16 lg:px-[120px]')}>
      {children}
    </div>
  );
};

export default PaddingContainer;
