import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { awardItems } from '../../data/Awards'
import './awards.css'

const Awards = () => {
    return (
        <div className='hcmscontent'>
            <div className="d-flex justify-content-around">
                {
                    awardItems.map(({ awardType, awardMonth, awardedBy, certificatePath }, index) => {
                        return (
                            <Card id={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{awardType} @ {awardMonth}</Card.Title>
                                    <Card.Text>Nominated By :
                                        {awardedBy}
                                    </Card.Text>
                                    <Button variant="primary">Download Certificate {certificatePath}</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Awards
