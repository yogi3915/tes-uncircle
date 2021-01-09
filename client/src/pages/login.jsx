import { Form, Button } from 'react-bootstrap'

export default function LoginPage() {

    function onSubmitForm(e) {
        e.preventDefault()
        console.log("masuk ke submit login")
    }
    return (
        <div className="container mt-5">
            <Form onSubmit={(event) => onSubmitForm(event)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
             </Button>
            </Form>
        </div>
    )
}