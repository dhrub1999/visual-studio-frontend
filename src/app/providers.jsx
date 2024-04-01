'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute='class' enableSystem defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
};

export { Providers };
