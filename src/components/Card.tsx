interface CardProps {
  title?: string;
  value?: string;
}

export function Card({ title, value }: CardProps) {
  return (
    <div className='flex before:content-[""] before:w-px before:h-3/4 before:bg-gray-300 before:self-center before:mx-6 first:before:content-none'>
      <div className='flex flex-col max-w-[11rem] w-[11rem]'>
        <div className='text-darkGray-600 text-[0.65rem] font-medium tracking-widest mb-1'>
          {title}
        </div>
        <div className='text-darkGray-900 font-medium text-[22px] leading-[30px] text-ellipsis overflow-hidden mb-1'>
          {value}
        </div>
      </div>
    </div>
  );
}
