export interface KeywordResult {
  keyword: string;
  count: number;
  density: number;
  status: 'poor' | 'excellent' | 'bad' | 'terrible';
  statusText: string;
  statusColor: string;
}

export interface AnalysisResult {
  totalWords: number;
  keywords: KeywordResult[];
}