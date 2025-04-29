import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <Link to={"/"} style={{textDecoration:"none", fontWeight:"50px"}}>
          <img
              alt=""
              src="https://img.samsungapps.com/productNew/000004235047/IconImage_20190904081028016_NEW_WAP_ICON_512_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Weather-Help
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
