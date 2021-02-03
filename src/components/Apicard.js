import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Apicard (props){
        return(
               <>
                {props.fakeapi && props.fakeapi.map((fakeapi) => 
                <Card className="container m-3" style={{ width: '300px'}}>
                <Card.Body>
                    <Card.Title>
                        {fakeapi.title}
                    </Card.Title>
                    <Card.Text>
                        {fakeapi.body}
                    </Card.Text>
                    <Button variant="primary">
                           Click Me
                    </Button>
                </Card.Body>
                </Card>
                )}

               </> 
        )
}

