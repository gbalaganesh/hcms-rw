import './appreciations.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Appreciations = () => {
    return (
        <div className='hcmscontent'>
            <Form>
                <InputGroup className="mb-3">
                    <Form.Control
                        id="empEmail"
                        placeholder="Employee email address"
                        aria-label="Employee's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">@bs.nttdata.com</InputGroup.Text>
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Appreciation Text</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button type='submit' className='ndbsButton' onClick={() => { console.log('btn click'); }} >Submit</Button>
        </div>
    )
}

export default Appreciations
