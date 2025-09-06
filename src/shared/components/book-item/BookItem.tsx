import Image from 'next/image';
import Link from 'next/link';

import { BookData } from '@/entities';

type Props = BookData;

export const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  description,
  coverImgUrl,
}: Props) => {
  return (
    <Link
      href={`/book/${id}`}
      className='flex gap-4 border-b-gray-200 px-5 py-2.5 text-black last:border-none'
    >
      <Image src={coverImgUrl} alt={title} width={80} height={80} />
      <div>
        <div className='font-bold'>{title}</div>
        <div className='break-keep'>{subTitle}</div>
        <br />
        <div className='text-stone-400'>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};
