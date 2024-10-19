import React, { useState } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import PostJob from './components/PostJob';
import JobList from './components/JobList';
import './index.css'; // Make sure this is present


const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <Header />
      {token ? (
        <>
          <PostJob token={token} />
          <JobList />
        </>
      ) : (
        <>
          <Register />
          <Login setToken={setToken} />
        </>
      )}
    </div>
  );
};

export default App;
