import { Search } from 'lucide-react';
import React from 'react';

const SearchInput = () => {
  return (
    <div className='flex items-center justify-between w-1/2 h-16 px-10 font-semibold bg-white border-solid opacity-85 border-1 rounded-3xl border-primary'>
      <input
        className='w-full h-full bg-transparent border-none outline-none placeholder-primary '
        placeholder="O que você está procurando?"
      />
      <Search className='text-primary' size={24} />
    </div>
  );
};

export default SearchInput;
