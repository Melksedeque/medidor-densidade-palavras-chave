import Header from './components/Header';
import ExplanationSection from './components/ExplanationSection';
import KeywordAnalyzer from './components/KeywordAnalyzer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <ExplanationSection />
      <KeywordAnalyzer />
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-xs mt-2">
              Ferramenta para análise de densidade de palavras-chave em textos
            </p>
            <p className="text-sm">
              Desenvolvido por <a href="https://github.com/Melksedeque" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Melksedeque Silva</a> com ❤️ usando React, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
