import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <footer className="bg-red dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
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
            
            {/* Botão de tema fixo no canto inferior direito */}
            <button
                onClick={toggleTheme}
                className="rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 z-50"
                aria-label="Alternar tema"
            >
                {theme === 'light' ? (
                    <Moon className="w-5 h-5" />
                ) : (
                    <Sun className="w-5 h-5" />
                )}
            </button>
        </>
    );
}