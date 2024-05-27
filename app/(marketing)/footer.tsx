import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HrFlag from '../../assets/flags/HRCroatia.svg';
import EsFlag from '../../assets/flags/ES.svg';
import ItFlag from '../../assets/flags/IT.svg';
import JpFlag from '../../assets/flags/JP.svg';
import FrFlag from '../../assets/flags/FR.svg';

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={'lg'} variant={'clear'} className="w-full">
          <Image
            src={HrFlag}
            width={'35'}
            height={'35'}
            alt={'Croatian'}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size={'lg'} variant={'clear'} className="w-full">
          <Image
            src={EsFlag}
            width={'35'}
            height={'35'}
            alt={'Spanish'}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size={'lg'} variant={'clear'} className="w-full">
          <Image
            src={FrFlag}
            width={'35'}
            height={'35'}
            alt={'French'}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size={'lg'} variant={'clear'} className="w-full">
          <Image
            src={ItFlag}
            width={'35'}
            height={'35'}
            alt={'Italian'}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size={'lg'} variant={'clear'} className="w-full">
          <Image
            src={JpFlag}
            width={'35'}
            height={'35'}
            alt={'Japanese'}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
