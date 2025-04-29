import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {
  
 const navigateByUrl=useNavigate()
  return (
    <>
    
    <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{fontSize:"40px"}}>Welcome to <span className='text-warning'>Weather-</span>Help! <i class="fa-solid fa-cloud-sun fa-bounce"></i></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt quas aperiam modi sapiente quibusdam saepe molestiae quis. Sint delectus nam quidem doloremque laborum veniam laboriosam laudantium, eius eveniet voluptatum!
          Doloribus eius vel nobis distinctio, itaque quos at officia magni unde maiores ipsa? Exercitationem, reprehenderit sit. Ex eveniet corrupti quidem magnam error libero voluptatem veritatis molestias, iusto laborum voluptatibus reiciendis.
        </p>
        <Button onClick={()=>navigateByUrl("/home")} className="btn btn-dark">Get Started</Button>
        </Col>
        <Col lg={5}>
        <img style={{height:"450px",borderRadius: "15px"}} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif"/></Col>
        <Col></Col>
      </Row>


    </>
  )
}

export default Landingpage
