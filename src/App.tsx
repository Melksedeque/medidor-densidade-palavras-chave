import Header from './components/Header';
import ExplanationSection from './components/ExplanationSection';
import KeywordAnalyzer from './components/KeywordAnalyzer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <ExplanationSection />
      <KeywordAnalyzer />
      <Footer />
    </div>
  );
}

export default App;
