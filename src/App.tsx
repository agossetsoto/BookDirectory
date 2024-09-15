import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import BookDirectory from './pages/BookDirectory';
import MyBooks from './pages/MyBooks';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BookProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/directory"
              element={
                <ProtectedRoute element={<BookDirectory />} />
              }
            />
            <Route
              path="/mybooks"
              element={
                <ProtectedRoute element={<MyBooks />} />
              }
            />
          </Routes>
        </Router>
      </BookProvider>
    </AuthProvider>
  );
};

export default App;