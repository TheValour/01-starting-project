import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('LogedIn')) {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('LogedIn', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('LogedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
