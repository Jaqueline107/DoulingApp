import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo from '../assets/douling.png';

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className,
      )}
    >
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src={Logo} width={'40'} height={'40'} alt={'logo'} />
        <h1 className="text-2xl font-extrabold text-lime-500 tracking-wide">
          Doulingo
        </h1>
      </div>
    </div>
  );
};
