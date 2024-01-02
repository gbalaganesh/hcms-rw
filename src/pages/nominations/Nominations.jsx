import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import './nominations.css'
import empLists from '../../data/empList';

const Nominations = () => {
    const [empEmailID, setEmpSelect] = useState('');

    return (
        <div className='hcmscontent'>
            <Tabs defaultActiveKey="CusDelight"
                id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="CusDelight" title="Customer Delight">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Select Employee</th>
                                <th>Comments</th>
                                <th>Attach Proof</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <Form.Select
                                    id="selectEmp"
                                    className="mt-2"
                                    onChange={(e) => setEmpSelect(e.currentTarget.value)}
                                >
                                    {empLists.map(({ empName, empEmailID }, index) => (
                                        <option key={index} value={empEmailID}>
                                            {empName}
                                        </option>
                                    ))}
                                </Form.Select></td>
                                <td><Form.Control as="textarea" rows={2} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> <Form.Select
                                    id="selectEmp"
                                    className="mt-2"
                                    onChange={(e) => setEmpSelect(e.currentTarget.value)}
                                >
                                    {empLists.map(({ empName, empEmailID }, index) => (
                                        <option key={index} value={empEmailID}>
                                            {empName}
                                        </option>
                                    ))}
                                </Form.Select></td>
                                <td><Form.Control as="textarea" rows={2} /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> <Form.Select
                                    id="selectEmp"
                                    className="mt-2"
                                    onChange={(e) => setEmpSelect(e.currentTarget.value)}
                                >
                                    {empLists.map(({ empName, empEmailID }, index) => (
                                        <option key={index} value={empEmailID}>
                                            {empName}
                                        </option>
                                    ))}
                                </Form.Select></td>
                                <td><Form.Control as="textarea" rows={2} /></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="QOService" title="Quality Of Service">
                    Tab content for quality of service
                </Tab>
                <Tab eventKey="SpSolutions" title="Speedy Solutions">
                    Tab content for speedy solutions
                </Tab>
                <Tab eventKey="CgCatalyst" title="Change Catalyst">
                    Tab content for change catalyst
                </Tab>
            </Tabs>
            <Button type='submit' className='ndbsButton' onClick={() => { console.log('btn click'); }} >Submit</Button>
        </div>
    )
}

export default Nominations
