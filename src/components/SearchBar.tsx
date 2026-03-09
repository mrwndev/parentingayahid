"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className='w-full md:w-[75%] lg:w-[75%] mx-auto mb-10 px-4 transition-all duration-300 ease-in-out'>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none' />

        <Input
          placeholder='Cari buku di sini...'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='w-full h-10 text-sm pl-10'
        />
      </div>
    </div>
  );
}
