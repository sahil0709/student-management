import React from 'react';
import { Table, Button } from 'react-bootstrap';

const StudentTable = ({ students, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Course</th>
                    <th>Marks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.roll_no}>
                        <td>{student.roll_no}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                        <td>{student.course}</td>
                        <td>{student.marks}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(student)}>Edit</Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(student.roll_no)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default StudentTable;