import { InputHTMLAttributes, MouseEventHandler } from 'react';
import iconArrowUrl from '../../images/icon-arrow.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | undefined;
}

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Input(inputProps: InputProps, buttonProps: ButtonProps) {
  return (
    <div className='flex'>
      <input
        type={inputProps.type ? inputProps.type : 'text'}
        placeholder={inputProps.children ? inputProps.children : undefined}
        onChange={inputProps.onChange}
        className='px-5 py-3 rounded-xl rounded-r-none text-sm w-96 focus-visible:outline-none input-outline-none focus-visible:input-outline transition-shadow duration-200 ease-in-out'
      />
      <button
        onClick={buttonProps.onClick}
        className='bg-black text-white px-5 rounded-xl rounded-l-none'
      >
        <img src={iconArrowUrl} className='w-2'></img>
      </button>
    </div>
  );
}
