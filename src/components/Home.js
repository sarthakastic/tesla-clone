import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'


function Home() {
  return (
    <Container>
        
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bkgdImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rtBtnTxt="Existing Inventory"
        />
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bkgdImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rtBtnTxt="Existing Inventory"
        />
        <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bkgdImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rtBtnTxt="Existing Inventory"
        />
        <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bkgdImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rtBtnTxt="Existing Inventory"
        />
        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        bkgdImg="solar-panel.jpg"
        leftBtnTxt="Order Now"
        rtBtnTxt="Learn More"
        />
        <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bkgdImg="solar-roof.jpg"
        leftBtnTxt="Order Now"
        rtBtnTxt="Learn More"
        />
        <Section
        title="Accessories"
        description=""
        bkgdImg="accessories.jpg"
        leftBtnTxt="Shop Now"
        
        />


    </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;
`