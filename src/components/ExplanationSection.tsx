const ExplanationSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona o Medidor de Densidade
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Analise a densidade de palavras-chave em seus textos para otimizar o SEO de forma eficiente e natural.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📝 Como Usar
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🔍 Normalização Inteligente
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-medium text-green-600 dark:text-green-400 mb-1">✅ Funciona:</p>
                <p><strong>Palavra-chave:</strong> gaucho</p>
                <p><strong>Encontra:</strong> gaúcho, Gaúcho, GAÚCHO</p>
              </div>
              <div>
                <p className="font-medium text-green-600 dark:text-green-400 mb-1">✅ Funciona:</p>
                <p><strong>Palavra-chave:</strong>acao</p>
                <p><strong>Encontra:</strong> ação, Ação, AÇÃO</p>
              </div>
              <div>
                <p className="font-medium text-blue-600 dark:text-blue-400 mb-1">💡 Dica:</p>
                <p>Digite palavras-chave sem acentos para melhor compatibilidade</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📊 Classificação da Densidade
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>0% - 0,59%:</strong> Pobre - Precisa melhorar
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>0,6% - 1,5%:</strong> Ótima - Pode ser usado
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>1,51% - 2%:</strong> Ruim - Precisa reduzir
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 rounded mr-3"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Acima de 2%:</strong> Péssima - Correção urgente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;