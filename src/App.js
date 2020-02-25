import React, {createContext, useState} from 'react';
import './App.css';
import Impacters from './components/Impacters/Impacters';
import Layout from './components/Layout';
import apiClient from './api/apiClient';
import SelectUserContext from './context/SelectUserContext';
import PostsLayout from './components/PostsLayout';

function App() {
  const [selectedUser, setSelectedUser] = useState();

  const selectUser = user => {
    apiClient.setUserId(user.id);
    setSelectedUser(user);
  };

  if (!selectedUser) {
    return (
      <Layout>
        <h1>Select an Impacter to start</h1>
        <SelectUserContext.Provider value={selectUser}>
          <Impacters />
        </SelectUserContext.Provider>
      </Layout>
    );
  }

  return <PostsLayout user={selectedUser} />;
}

export default App;
