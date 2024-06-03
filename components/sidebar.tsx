import Link from 'next/link';
import Image from 'next/image';

import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

import Logo from '../public/logoName.svg';
import Learn from '../public/learn.svg';
import Leaderboard from '../public/leaderboard.svg';
import quests from '../public/quests.svg';
import shop from '../public/shop.svg';

import { SidebarItem } from './sidebar-item';

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className,
      )}
    >
      <Link href={'/learn'}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={Logo} width={'100'} height={'100'} alt={'logo'} />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label={'Learn'} iconSrc={Learn} href={'/learn'} />
        <SidebarItem
          label={'LeaderBoard'}
          iconSrc={Leaderboard}
          href={'/leaderboard'}
        />
        <SidebarItem label={'quests'} iconSrc={quests} href={'/quests'} />
        <SidebarItem label={'Shop'} iconSrc={shop} href={'/shop'} />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
