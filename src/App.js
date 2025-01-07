import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
    <div className="min-h-screen  bg-[#B49986] dark:bg-[#321C0F] text-[#321C0F] dark:text-[#B49986] transition-all">
      <Header />
      <Body />
    </div>
  );
};

export default App;
