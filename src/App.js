import React from 'react';
import Footer from './components/Footer/Footer';
import Routes from './routes/Routes';
import DriverRegisterContextProvider from './contexts/driverRegisterContext';
function App() {

  return (
    <div>
      <DriverRegisterContextProvider>
      <Routes/>
      </DriverRegisterContextProvider>
      <Footer/>
    </div>
  );
  
}

export default App;
