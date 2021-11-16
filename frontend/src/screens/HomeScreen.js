import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {Animate} from 'react-simple-animate'

export const HomeScreen = () => {
    const [formText, setFormText] = useState('')
    const [animatedText, setAnimatedText] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [play, setPlay] = useState(false)

    
    const submitHandler = (e) => {
        setSubmitted(true)
        e.preventDefault()
    }
    useEffect(() => {
        if(!showButton){
            setTimeout(() => {setShowButton(true); setPlay(false)}, 2100)
        }
        if(submitted){
            console.log('submitted loop')
            setAnimatedText(formText)
            setFormText('')
            setShowButton(false)
            setSubmitted(false)
            setPlay(true)
        }
    }, [submitted, showButton, formText])

    return (
        <Container>
            <Form onSubmit={submitHandler} style={{position: 'fixed', top: '60%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Animate duration={.5} play={play} start={{transform: 'translateY(0px)'}} end={{transform: 'translateY(-100px'}}>
                    <Animate play={play} duration={1} delay={.5}  start={{opacity: 1, transform: 'scale(2)'}} end={{opacity: 0, transform: 'scale(.1)'}}>
                        <h1 style={{
                            color: 'white',
                            visibility: showButton ? 'hidden' : 'visible'
                            }}>{animatedText}</h1>
                    </Animate>
                </Animate>
                {showButton && <><Form.Group className="mb-3" controlId="text">
                    <Form.Control autoComplete="off" type="text" placeholder="Enter text here. . ." onChange={e => setFormText(e.target.value)} value={formText}/>
                </Form.Group>
                <Button style={{width: '100%'}} variant="dark" type="submit">
                    Send into the void
                </Button></>}
            </Form>
        </Container>
    )
}
