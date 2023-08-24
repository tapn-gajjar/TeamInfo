import React from 'react';
import './app.scss'
import AllRoutes from './routes/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <React.Fragment>
      {/* <OffcanvasExample/> */}
      {/* <LandingPage/> */}
      <Header/>
   <AllRoutes/>
   <Footer/>
   </React.Fragment>
  );
}

export default App;
