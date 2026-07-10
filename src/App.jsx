
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import AssignmentList from './components/AssignmentList/AssignmentList';
import ParentsPage from './components/ParentsPage/ParentsPage';
import TeachersPage from './components/TeachersPage/TeachersPage';
import StudentsPage from './components/StudentsPage/StudentsPage';
import { mockAssignments, mockStudents, mockBadges, mockMessages } from './components/mockData';
import AssignmentForm from './components/AssignmentForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  const [assignments, setAssignments] = useState(mockAssignments);
  const [completedAssignments, setCompletedAssignments] = useState([]);
   const toggleComplete = (id) => {
        setCompletedAssignments((prev) => {
          if(prev.includes(id)) {
            return prev.filter((assignmentId) => assignmentId !== id);
          }
          return [...prev, id];
    });
  };
      const handleDelete = (id) => {     
        setAssignments((prev) => prev.filter((assignment) => assignment.id !== id));
    };

 return (
  <div className='app'>
    <Header />
  <main>
     <Routes> 
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutus' element={<AboutPage />} />
    <Route path='/parents' element={<ParentsPage 
    assignments={assignments} 
    setAssignments={setAssignments}
    toggleComplete={toggleComplete}
    completedAssignments={completedAssignments}
    />} />
    <Route path='/teachers' element={<TeachersPage 
    assignments={assignments}
    setAssignments={setAssignments}
    handleDelete={handleDelete}
   />} /> 
    <Route path='/students' element={<StudentsPage 
    assignments={assignments}
    setAssignments={setAssignments}
    toggleComplete={toggleComplete}
    completedAssignments={completedAssignments}
    />} />
  </Routes>
   </main>
  <Footer />
  </div>
  
 );
}

export default App;   
    
 

