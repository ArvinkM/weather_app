import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    
    <div className='bg-light py-2 ' style={{marginTop: "220px"}}>
    <Row>
      <Col lg={3}> <h1>
<span className=''>Weather</span>{' '}
<span className='text-warning'>Help</span>
</h1>
<p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestiae quae exercitationem quis similique, provident corrupti doloremque a in? Culpa quaerat reprehenderit minima inventore qui, voluptas ea consectetur harum fuga.</p></Col>
      <Col lg={3}><h2 className=''>Pages</h2>
      <ul className='list-unstyled'>
      <li>Landing Page</li>
      <li>Home</li>
      </ul>
      </Col>
     
     
      <Col lg={3}><h2 className=''>Features</h2>
      <ul className='list-unstyled'>
      <li>Weather Forecasts</li>
      <li>Various Locations</li>
      <li>Easy Access</li>
      </ul></Col>

      <Col lg={3}><div className='mt-2 p-2'>
      <i className="fa-brands fa-facebook fa-lg me-3" style={{ color: '' }}></i>
      <i class="fa-brands fa-instagram fa-lg me-3"  style={{ color: '' }}></i>
      <i class="fa-brands fa-whatsapp fa-lg me-3" style={{ color: '' }}></i>
      <i class="fa-brands fa-x-twitter fa-lg me-3"  style={{ color: '' }}></i>
      </div>
      <div className='mt-2'>
      <input className='' type="text" /> <button className='btn btn-sm'>Search</button>
      </div>
      </Col>
      
    </Row>
    <h5 className='text-center mt-2'>Weather-Help@2025</h5>
    </div>

  )
}

export default Footer
