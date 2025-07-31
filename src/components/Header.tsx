export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl flex items-center justify-center font-bold text-gray-900 dark:text-white">
                    Medidor de Densidade de Palavras-chave
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-center">
                    Analise a densidade de palavras-chave em seus textos
                </p>
            </div>
        </header>
    );
}
