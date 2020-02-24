import React, {createContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Impacters from './components/Impacters';
import Layout from './components/Layout';
import apiClient from './api/apiClient';
import SelectUserContext from './context/SelectUserContext';
import PostsLayout from './components/PostsLayout';

function App() {
  const [selectedUser, setSelectedUser] = useState();

  const selectUser = user => {
    apiClient.setUserId(user.id);
    setSelectedUser(user.id);
  };

  if (!selectedUser) {
    return (
      <Layout>
        <SelectUserContext.Provider value={selectUser}>
          <Impacters />
        </SelectUserContext.Provider>
      </Layout>
    );
  }

  return <PostsLayout />;
}

export default App;
