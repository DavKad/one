import React from 'react'
import MenuBar from './appBar/MenuBar';
import GlobalContext, {alert, margins} from './context/global/GlobalContext';
import Home from './home/Home'

const App = () => {
  return (
    <>
      <GlobalContext.Provider value={{alert, margins}}>
        <MenuBar/>
        <Home/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;