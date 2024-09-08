import { cn } from '@/lib/utils';

const Container = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'w-full flex flex-col justify-center items-center gap-5 bg-white text-gray-800 px-[3rem] py-[4rem]',
        props.className
      )}
    />
  );
};

export default Container;
