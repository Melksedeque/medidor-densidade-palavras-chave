import { ChartLine } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            <ChartLine /> Medidor de Densidade de Palavras-Chave
          </h1>
          
          
        </div>
      </div>
    </header>
  );
};