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
                            Desenvolvido por <a href="https://github.com/Melksedeque" target="_blank" className="text-red-700 dark:text-red-400 hover:underline">Melksedeque Silva</a> com ❤️ usando React, TypeScript e Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
            
            {/* Botão de tema fixo no canto inferior direito */}
            <button
                onClick={toggleTheme}
                className="cursor-pointer fixed bottom-6 right-6 rounded-full text-gray-600 dark:text-gray-300 transition-all duration-200 z-50 opacity-50 hover:opacity-100"
                aria-label="Alternar tema"
            >
                {theme === 'light' ? (
                    <Moon className="w-10 h-10 hover:text-sky-400" />
                ) : (
                    <Sun className="w-10 h-10 hover:text-amber-400" />
                )}
            </button>
        </>
    );
}