import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { addextra } from '../redux/extraSlice';
function Addextra() {
  const [show, setShow] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newextra, setnewextra]= useState(
    {title:"",
      description:"",
      image:"",
      prix:""
    }
  )
  return (
    <div>

<Button variant="none" onClick={handleShow}>
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"  style={{display:"flex", justifyContent:"space-around"}}>           
<path fill="currentColor" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/>
 </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserver <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#ed071e" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"/>
          </svg> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setnewextra({...newextra, title:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Form>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" onChange={(e)=> setnewextra({...newextra, description:e.target.value})} />
      
      </Form.Group>
      </Form>
    
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>categorie de service</Form.Label>
        <Form.Control type="text" onChange={(e)=> setnewextra({...newextra, description:e.target.value})} />
      
      </Form.Group>
      </Form>
    
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>date de reservation </Form.Label>
        <Form.Control type="date" placeholder="00/00/0000" onChange={(e)=> setnewextra({...newextra, image:e.target.value})} />
       
      </Form.Group>
      </Form>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>nombre des heures </Form.Label>
        <Form.Control type="number" placeholder="0" onChange={(e)=> setnewextra({...newextra, prix:e.target.value})} />
       
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="grey" onClick= {()=>dispatch(addextra(newextra))}>
          add 
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default Addextra