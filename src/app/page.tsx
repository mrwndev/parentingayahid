"use client";

import { useState, useEffect } from "react";
import books from "@/data/books.json";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const perPage = 12;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredBooks.length / perPage);

  const start = (currentPage - 1) * perPage;
  const paginatedBooks = filteredBooks.slice(start, start + perPage);

  return (
    <main className='mx-auto max-w-4xl px-4 py-4'>
      <HeroSection />

      <SearchBar value={search} onChange={setSearch} />

      <div className='container mx-auto px-4'>
        {filteredBooks.length === 0 && (
          <p className='text-center text-gray-500'>Buku tidak ditemukan.</p>
        )}

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
          {" "}
          {paginatedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}{" "}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      <footer className='text-center pt-20 pb-10 text-gray-500 text-sm'>
        Copyright © 2026 - All rights reserved.
      </footer>
    </main>
  );
}
