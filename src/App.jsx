import './App.css'
import PokemonList from './components/PokemonList'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <Header />

      <Hero
        title="Capture todos eles!"
        text="O guia perfeito para analisar cada pokémon"
      />

      <main className='py-[160px]'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-4 justify-end'>
            <PokemonList
              search={debouncedSearch}
              setSearch={setSearch}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
