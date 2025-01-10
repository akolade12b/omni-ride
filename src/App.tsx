import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Routes } from '@/routes';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ride-theme">
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;