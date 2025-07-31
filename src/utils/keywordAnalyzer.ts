import type { KeywordResult, AnalysisResult } from '../types';
import { normalizeText, normalizeKeyword, createKeywordRegex } from './textNormalizer';

/**
 * Calcula a densidade de palavras-chave em um texto
 * @param keywords - Array de palavras-chave para analisar
 * @param text - Texto completo para análise
 * @returns Resultado da análise com densidade e classificação
 */
export const analyzeKeywordDensity = (keywords: string[], text: string): AnalysisResult => {
  // Normaliza o texto removendo acentos e convertendo para minúsculas
  const normalizedText = normalizeText(text);
  
  // Remove caracteres especiais e mantém apenas letras, números e espaços
  const cleanText = normalizedText.replace(/[^\w\s]/g, ' ');
  
  // Divide o texto em palavras
  const words = cleanText.split(/\s+/).filter(word => word.length > 0);
  const totalWords = words.length;
  
  if (totalWords === 0) {
    return {
      totalWords: 0,
      keywords: keywords.map(keyword => ({
        keyword: keyword.trim(),
        count: 0,
        density: 0,
        status: 'poor' as const,
        statusText: 'Pobre - Precisa melhorar',
        statusColor: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20'
      }))
    };
  }
  
  const keywordResults: KeywordResult[] = keywords.map(keyword => {
    const normalizedKeyword = normalizeKeyword(keyword);
    
    // Conta ocorrências da palavra-chave normalizada no texto normalizado
    const regex = createKeywordRegex(normalizedKeyword);
    const matches = cleanText.match(regex) || [];
    const count = matches.length;
    
    // Calcula a densidade como porcentagem
    const density = (count / totalWords) * 100;
    
    // Determina o status baseado na densidade
    let status: KeywordResult['status'];
    let statusText: string;
    let statusColor: string;
    
    if (density >= 0 && density <= 0.59) {
      status = 'poor';
      statusText = 'Pobre - Precisa melhorar';
      statusColor = 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20';
    } else if (density >= 0.6 && density <= 1.5) {
      status = 'excellent';
      statusText = 'Ótima - Pode ser usado';
      statusColor = 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20';
    } else if (density >= 1.51 && density <= 2) {
      status = 'bad';
      statusText = 'Ruim - Precisa reduzir';
      statusColor = 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20';
    } else {
      status = 'terrible';
      statusText = 'Péssima - Correção urgente';
      statusColor = 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30';
    }
    
    return {
      keyword: keyword.trim(),
      count,
      density: Number(density.toFixed(2)),
      status,
      statusText,
      statusColor
    };
  });
  
  return {
    totalWords,
    keywords: keywordResults
  };
};