import { ChartColumn, CircleCheckBig, FilePenLine, Lightbulb, Search } from "lucide-react";

export default function ExplanationSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona o Medidor de Densidade
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Analise a densidade de palavras-chave em seus textos para otimizar o SEO de forma eficiente e natural.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
              <FilePenLine className="mr-2" /> Como Usar
            </h3>
            <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">1.</span>
                Insira suas palavras-chave separadas por vírgulas
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">2.</span>
                Cole ou digite seu texto completo
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">3.</span>
                Clique em "Analisar Densidade" para ver os resultados
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
              <Search className="mr-2" /> Normalização Inteligente
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <div>
                <p className="flex items-center font-semibold text-lg text-green-600 dark:text-green-400 mb-1">
                  <CircleCheckBig className="mr-2" /> Funciona:
                </p>
                <p><strong>Palavra-chave:</strong> gaucho</p>
                <p><strong>Encontra:</strong> gaúcho, Gaúcho, GAÚCHO</p>
              </div>
              <div>
                <p className="flex items-center font-semibold text-lg text-green-600 dark:text-green-400 mb-1">
                  <CircleCheckBig className="mr-2" /> Funciona:
                </p>
                <p><strong>Palavra-chave:</strong> acao</p>
                <p><strong>Encontra:</strong> ação, Ação, AÇÃO</p>
              </div>
              <div>
                <p className="flex items-center font-medium text-lg text-blue-600 dark:text-blue-400 mb-1">
                  <Lightbulb className="mr-2 text-amber-500" /> Dica:
                </p>
                <p>Digite palavras-chave sem acentos para melhor compatibilidade</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-4">
              <ChartColumn className="mr-2" /> Classificação da Densidade
            </h3>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-sky-500 rounded mr-3"></div>
                <span>
                  <strong>0% - 0,59%:</strong><br />Pobre - Precisa melhorar
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span>
                  <strong>0,6% - 1,5%:</strong><br />Ótima - Pode ser usado
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-amber-500 rounded mr-3"></div>
                <span>
                  <strong>1,51% - 2%:</strong><br />Ruim - Precisa reduzir
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                <span className="text-lg text-gray-600 dark:text-gray-300">
                  <strong>Acima de 2%:</strong><br />Péssima - Correção urgente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};