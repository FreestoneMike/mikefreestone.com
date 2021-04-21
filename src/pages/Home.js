import { useEffect } from 'react'
import React from 'react'

// COMPONENTS IMPORTS
import Hero from '../components/Hero/Hero';

function Home() {

  useEffect(() => {
    document.title = "Mike Freestone";
  }, []);

  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home;
