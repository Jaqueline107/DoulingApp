import Image from 'next/image';
import learnDou from '../../public/learnDou.png';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Link from 'next/link';

const MarketingLayout = () => {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[434px] lg:h-[424] mb-8 lg:mb-0">
        <Image src={learnDou} alt={'LearnDou'} />
      </div>
      <div className="flex flex-col items-center gap-y-8"></div>
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
        Learn, pratice, and master new languages with Doulingo.
      </h1>
      <div
        className={'flex flex-col itemns-center gap-y-3 max-w-[330px] w-full'}
      >
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" signInFallbackRedirectUrl={'/learn'}>
              <Button size={'lg'} variant={'secondary'} className={'w-full'}>
                Get Started
              </Button>
            </SignUpButton>
            <SignUpButton mode="modal" signInFallbackRedirectUrl={'/learn'}>
              <Button
                size={'lg'}
                variant={'primaryOutline'}
                className={'w-full'}
              >
                I already have an accont
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button
              size={'lg'}
              variant={'secondary'}
              className={'w-full'}
              asChild
            >
              <Link href="/learn">Continue Learnig</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default MarketingLayout;
