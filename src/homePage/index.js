import React from 'react'
import './style.css'

import LoginComponent from './components/loginComponet'
import ValuationComponent from './components/valuationComponent'
import BondsComponent from './components/bondsComponent'
import TipsComponent from './components/tipsComponent'
import OrtherComponent from './components/ortherComponent'

function Home() {
    return (
        <div >
            <LoginComponent />
            <ValuationComponent />
            <BondsComponent />
            <TipsComponent />
            <OrtherComponent />
        </div>
    )
}

export default Home;