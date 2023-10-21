import { IconProps } from '@/components/Icons';

export default function Padrão({ className }: IconProps) {
  return (
    <svg
      role='img'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={className}
      aria-label='Twitter'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <rect width='512' height='512' rx='15%' fill='#1da1f2'></rect>
        <path
          fill='#ffffff'
          d='M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37'
        ></path>
      </g>
    </svg>
  );
}
