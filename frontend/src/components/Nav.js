import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <Nav activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
    <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Adopt a pet</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Disabled
        </Nav.Link>
    </Nav.Item>
    </Nav>
)

export default Nav