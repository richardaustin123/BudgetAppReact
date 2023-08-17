import { Modal, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';

export default function addBudgetModal({ show, handleClose }) {

    // const nameRef = useRef()
    // const maxRef = useRef()
    // const { addBudget } = useBudget()

    function handleSubmit(e) {
        e.preventDefault()
        addBudgetModal({
            // name: nameRef.current.value,
            // max: parseFloat(maxRef.current.value)
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSumbit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Budget Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter budget name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Budget</Form.Label>
                        <Form.Control type="number"  required min={0} step={0.01} placeholder="Enter budget max" />
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
