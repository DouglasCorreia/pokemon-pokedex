import './App.css'
import PokemonList from './components/PokemonList'
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Home />

      <div className='py-40'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-4 justify-end'>
            <PokemonList
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
