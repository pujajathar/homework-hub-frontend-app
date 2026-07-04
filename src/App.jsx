
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

import ParentsPage from './components/ParentsPage/ParentsPage';
import TeachersPage from './components/TeachersPage/TeachersPage';
import StudentsPage from './components/StudentsPage/StudentsPage';


function App() {
  
 return (
  
  <Routes> 
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutus' element={<AboutPage />} />
    <Route path='/parents' element={<ParentsPage />} />
    <Route path='/teachers' element={<TeachersPage />} /> 
    <Route path='/students' element={<StudentsPage />} />
  </Routes>
  
 );
}

export default App;   
    
 

