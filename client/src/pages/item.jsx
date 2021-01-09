import { Card, Button } from "react-bootstrap"
import NavbarComponent from "./navbar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ItemComponent() {

    const [dataItem, setDataItem] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3001'
        })
            .then(({ data }) => {
                setDataItem(data)
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5">
                <div className='row'>
                    {dataItem?.map(item => {
                        return (
                            <div className='col'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image_url} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.desc}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}