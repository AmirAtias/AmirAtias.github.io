import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import UserContext from "./components/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/amiratias")
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <UserContext.Provider value={user}>
          <Main />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
