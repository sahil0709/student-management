import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/finddata');
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const handleAdd = () => {
    setSelectedStudent(null);
    setShowForm(true);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowForm(true);
  };

  const handleDelete = async (roll_no) => {
    try {
      await axios.delete(`http://localhost:8000/deleteuser/${roll_no}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleSave = async (student) => {
    try {
      if (selectedStudent) {
        await axios.put(`http://localhost:8000/updatedata/${student.roll_no}`, student);
      } else {
        await axios.post('http://localhost:8000/register', student);
      }
      fetchStudents();
      setShowForm(false);
      console.log('Modal should be closed now:', showForm);
    } catch (error) {
      console.error('Error saving student data:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Student Records</h1>
      <Button className="mb-3" onClick={handleAdd}>Add Student</Button>
      <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
      <StudentForm show={showForm} handleClose={() => setShowForm(false)} handleSave={handleSave} student={selectedStudent} />
    </Container>
  );
};

export default App;