import Link from 'next/link';
import { Button } from './ui/button';
import { InfinityIcon } from 'lucide-react';
import Image from 'next/image';
import Hearts from '../public/hearts.svg';
import Points from '../public/points.svg';

type Props = {
  activeCourse: { imageSrc: string; title: string }; //TODO: Replace with db types
  points: number;
  hearts: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant={'clear'}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={35}
            height={35}
          />
        </Button>
      </Link>
      <Link href={'/shop'}>
        <Button variant={'clear'} className="text-orange-500">
          <Image
            src={'/points.svg'}
            width={24}
            height={24}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={'/shop'}>
        <Button variant={'clear'} className="text-rose-500">
          <Image
            src={Hearts}
            width={30}
            height={30}
            alt="Hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 troke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
