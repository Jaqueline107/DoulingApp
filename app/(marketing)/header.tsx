import Image from 'next/image';
import Logo from '../../public/douling.png';

import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={Logo} width={'40'} height={'40'} alt={'logo'} />
          <h1 className="text-2xl font-extrabold text-lime-500 tracking-wide">
            Doulingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size={'lg'} variant={'clear'}>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
