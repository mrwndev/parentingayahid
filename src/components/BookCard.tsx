"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/book";
import { Card } from "@/components/ui/card";

export default function BookCard({ book }: { book: Book }) {
  if (!book.affiliateUrl) return null;

  return (
    <Link href={book.affiliateUrl} target='_blank' className='block'>
      <Card className='w-full rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
        {/* Square Image 1:1 */}
        <div className='relative w-full aspect-square'>
          <Image
            src={book.image === "" ? "/images/loremipsum.jpg" : book.image}
            alt={book.title}
            fill
            className='object-cover'
          />
        </div>

        {/* Title */}
        <div className='px-3 py-3 bg-white'>
          <h3 className='text-black text-sm font-bold leading-snug line-clamp-2 h-[2.3rem]'>
            {book.title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}
