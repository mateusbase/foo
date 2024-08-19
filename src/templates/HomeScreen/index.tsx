import { Search } from 'lucide-react';
import SearchInput from './components/SearchInput';
import ServicesSection from '@/components/ServicesSection';

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex flex-wrap gap-4">
      <div className="relative w-full">
        <img
          src="https://placehold.co/1920x600/000000/FFF"
          alt=""
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <SearchInput />
        </div>

      </div>
      <ServicesSection />
    </main>
  );
}
