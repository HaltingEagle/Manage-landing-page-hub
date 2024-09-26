import React from 'react';
import { isMobile, isDesktop } from 'react-device-detect';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

const App = () => {
  return (
    <>
      {isMobile && <Mobile/>}
      {isDesktop && <Desktop/>}
    </>
  );
};

export default App;
