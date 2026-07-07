
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import AssignmentList from './components/AssignmentList/AssignmentList';
import ParentsPage from './components/ParentsPage/ParentsPage';
import TeachersPage from './components/TeachersPage/TeachersPage';
import StudentsPage from './components/StudentsPage/StudentsPage';
import mockAssignments from './components/mockAssignments';
import AssignmentForm from './components/AssignmentForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  const [assignments, setAssignments] = useState(mockAssignments);
   const toggleComplete = (id) => {
        setAssignments((prev) => 
        prev.map((a) => 
        a.id === id ? {...a, completed : !a.completed} : a
    )
);
    };
 return (
  <div className='app'>
  <main>
     <Routes> 
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutus' element={<AboutPage />} />
    <Route path='/parents' element={<ParentsPage 
    assignments={assignments} 
    setAssignments={setAssignments}
    toggleComplete={toggleComplete}
    />} />
    <Route path='/teachers' element={<TeachersPage 
    assignments={assignments}
    setAssignments={setAssignments}
    toggleComplete={toggleComplete} />} /> 
    <Route path='/students' element={<StudentsPage />} />
  </Routes>
   </main>
  <Footer />
  </div>
  
 );
}

export default App;   
    
 

