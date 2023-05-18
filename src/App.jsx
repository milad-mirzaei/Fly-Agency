import React from 'react'
import { Navbar,Home, Search, Support, Info, Lounge, Travelers, Subscribers ,Footer } from './Components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer/>
    </div>
  )
}

export default App