import Image from "next/image";

export default function HeroSection() {
  return (
    <div className='text-center py-4 px-4'>
      {/* Logo Responsive */}
      <div className='relative mx-auto mb-3 w-20 sm:w-25 md:w-30 lg:w-35 xl:w-40 aspect-square transition-all duration-500 ease-in-out'>
        {" "}
        <Image
          src='/images/logo.svg'
          alt='ParentingAyah.ID'
          fill
          priority
          className='object-contain'
        />
      </div>

      {/* Title */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 transition-all duration-500 ease-in-out'>
        ParentingAyah.ID
      </h1>

      {/* Subtitle */}
      <h2 className='"text-base sm:text-lg md:text-xl text-gray-600 font-bold mb-2 transition-all duration-500 ease-in-out'>
        Rekomendasi Buku Edukasi Anak
      </h2>
    </div>
  );
}
