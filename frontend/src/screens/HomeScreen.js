import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export const HomeScreen = () => {
    const [formText, setFormText] = useState('')
    const [animatedText, setAnimatedText] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [showButton, setShowButton] = useState(true)

    
    const submitHandler = (e) => {
        setSubmitted(true)
        e.preventDefault()
    }
    useEffect(() => {
        if(!showButton){
            setTimeout(() => setShowButton(true), 2000)
        }
        if(submitted){
            console.log('submitted loop')
            setAnimatedText(formText)
            setFormText('')
            setShowButton(false)
            setSubmitted(false)
        }
    }, [submitted, showButton])

    return (
        <Container>
            <Form onSubmit={submitHandler} style={{position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                {showButton ? <><Form.Group className="mb-3" controlId="text">
                    <Form.Control type="text" placeholder=". . ." onChange={e => setFormText(e.target.value)} value={formText}/>
                </Form.Group>
                <Button style={{width: '100%'}} variant="dark" type="submit">
                    Send into the void
                </Button></> : (
                    <h1 style={{color: 'white'}}>{animatedText}</h1>
                )}
            </Form>
        </Container>
    )
}
