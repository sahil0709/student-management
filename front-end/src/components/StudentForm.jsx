import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const initialFormData = {
    roll_no: '',
    name: '',
    age: '',
    gender: '',
    course: '',
    marks: ''
};

const StudentForm = ({ show, handleClose, handleSave, student }) => {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (student) {
            setFormData(student);
        } else {
            setFormData(initialFormData);
        }
    }, [show, student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        handleSave(formData);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{student ? 'Edit Student' : 'Add Student'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control
                            type="number"
                            name="roll_no"
                            value={formData.roll_no}
                            onChange={handleChange}
                            disabled={!!student}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course</Form.Label>
                        <Form.Control
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Marks</Form.Label>
                        <Form.Control
                            type="number"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default StudentForm;