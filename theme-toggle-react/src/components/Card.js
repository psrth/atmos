import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin: 2rem 10rem;
height: 300px;
background-color: inherit;
border: 1px solid grey;
border-radius: 20px;
padding: 2rem;
`

export default () => (
    <div>
        <Card className="card">hello</Card>
        <Card className="card">hello</Card>
        <Card className="card">hello</Card>
    </div>
    
)