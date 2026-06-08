import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';

type Props = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  navigate: (path: string) => void;
  children?: React.ReactNode;
};

export default function AppShell({ theme, toggleTheme, navigate, children }: Props) {
  const location = useLocation();
  const currentPath = location.pathname || '/';

  useEffect(() => {
    // Ensure after route navigation the page is always scrolled to the top.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-slate-900 selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300">

      <style
        // Re-introduce the keyframes used by pages.
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-x {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
          .animate-gradient-x{background-size:200% 200%;animation:gradient-x 4s ease infinite}
          @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
          .animate-float{animation:float 6s ease-in-out infinite}
          @keyframes fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
          .animate-fade-in{animation:fade-in 0.5s ease-out forwards}
          @keyframes blob{0%{transform:translate(0px,0px) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(0.9)}100%{transform:translate(0px,0px) scale(1)}}
          .animate-blob{animation:blob 7s infinite}
          .animation-delay-2000{animation-delay:2s}
          `
        }}
      />

      <Navbar
        currentPath={currentPath}
        setPath={navigate}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main key={currentPath} className="flex-grow animate-fade-in">
        {children}
      </main>

      <Footer setPath={navigate} />
      <WhatsAppButton />
    </div>
  );
}
