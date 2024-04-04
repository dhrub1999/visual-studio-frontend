import React from 'react';
import { cn } from '@/lib/utils';

const Instagram = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('group h-6 w-auto md:h-7 lg:h-8', className)}
    >
      <path
        className={`fill-neutral-400 transition-all duration-300 ease-in group-hover:fill-neutral-200`}
        d='M6.50033 1.6665H13.5003C16.167 1.6665 18.3337 3.83317 18.3337 6.49984V13.4998C18.3337 14.7817 17.8244 16.0111 16.918 16.9175C16.0116 17.8239 14.7822 18.3332 13.5003 18.3332H6.50033C3.83366 18.3332 1.66699 16.1665 1.66699 13.4998V6.49984C1.66699 5.21796 2.17622 3.98858 3.08264 3.08215C3.98907 2.17573 5.21845 1.6665 6.50033 1.6665ZM6.33366 3.33317C5.53801 3.33317 4.77495 3.64924 4.21234 4.21185C3.64973 4.77446 3.33366 5.53752 3.33366 6.33317V13.6665C3.33366 15.3248 4.67533 16.6665 6.33366 16.6665H13.667C14.4626 16.6665 15.2257 16.3504 15.7883 15.7878C16.3509 15.2252 16.667 14.4622 16.667 13.6665V6.33317C16.667 4.67484 15.3253 3.33317 13.667 3.33317H6.33366ZM14.3753 4.58317C14.6516 4.58317 14.9165 4.69292 15.1119 4.88827C15.3072 5.08362 15.417 5.34857 15.417 5.62484C15.417 5.9011 15.3072 6.16606 15.1119 6.36141C14.9165 6.55676 14.6516 6.6665 14.3753 6.6665C14.0991 6.6665 13.8341 6.55676 13.6388 6.36141C13.4434 6.16606 13.3337 5.9011 13.3337 5.62484C13.3337 5.34857 13.4434 5.08362 13.6388 4.88827C13.8341 4.69292 14.0991 4.58317 14.3753 4.58317ZM10.0003 5.83317C11.1054 5.83317 12.1652 6.27216 12.9466 7.05356C13.728 7.83496 14.167 8.89477 14.167 9.99984C14.167 11.1049 13.728 12.1647 12.9466 12.9461C12.1652 13.7275 11.1054 14.1665 10.0003 14.1665C8.89526 14.1665 7.83545 13.7275 7.05405 12.9461C6.27265 12.1647 5.83366 11.1049 5.83366 9.99984C5.83366 8.89477 6.27265 7.83496 7.05405 7.05356C7.83545 6.27216 8.89526 5.83317 10.0003 5.83317ZM10.0003 7.49984C9.33728 7.49984 8.7014 7.76323 8.23256 8.23207C7.76372 8.70091 7.50033 9.3368 7.50033 9.99984C7.50033 10.6629 7.76372 11.2988 8.23256 11.7676C8.7014 12.2364 9.33728 12.4998 10.0003 12.4998C10.6634 12.4998 11.2993 12.2364 11.7681 11.7676C12.2369 11.2988 12.5003 10.6629 12.5003 9.99984C12.5003 9.3368 12.2369 8.70091 11.7681 8.23207C11.2993 7.76323 10.6634 7.49984 10.0003 7.49984Z'
        fill='#DEE2E6'
      />
    </svg>
  );
};

export default Instagram;