import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Categories from './components/Categories';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-neuclean-green selection:text-slate-950">
      
      {/* Header (Menu / Navigation) */}
      <Header />
      
      {/* Main Content Areas */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero />
        
        {/* B2B Problem & Solution / Benefits Section */}
        <Benefits />
        
        {/* Product Category Grid */}
        <Categories />
        
        {/* Webhook-integrated B2B Quotation Form */}
        <QuoteForm />
        
      </main>
      
      {/* Standard B2B Footer */}
      <Footer />
      
    </div>
  );
}
