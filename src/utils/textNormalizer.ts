/**
 * Normaliza texto removendo acentos, cedilhas e convertendo para minúsculas
 * @param text - Texto a ser normalizado
 * @returns Texto normalizado sem acentos e em minúsculas
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    // Remove acentos usando normalize + replace
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Substitui caracteres especiais específicos do português
    .replace(/ç/g, 'c')
    .replace(/Ç/g, 'c');
};

/**
 * Normaliza uma palavra-chave para busca
 * @param keyword - Palavra-chave a ser normalizada
 * @returns Palavra-chave normalizada
 */
export const normalizeKeyword = (keyword: string): string => {
  return normalizeText(keyword.trim());
};

/**
 * Cria uma regex para busca de palavra-chave normalizada
 * @param keyword - Palavra-chave normalizada
 * @returns RegExp para busca da palavra
 */
export const createKeywordRegex = (keyword: string): RegExp => {
  // Escapa caracteres especiais da regex
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Cria regex que busca a palavra completa (word boundary)
  return new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
};