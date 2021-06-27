import { Header } from './header'
import { Features } from './features'
import { About } from './about'
import { Services } from './services'
import { Partenaires } from './partenaires'
import { Testimonials } from './testimonials'
import { Team } from './Team'
import { Media } from './medias'
import { useEffect, useState } from 'react'
import JsonData from '../data/data.json'
import { useHistory } from 'react-router-dom'

const Cockpit = (props) => {

    const _history = useHistory()
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    return (
        <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Media data={landingPageData.Media} />
            <Partenaires data={landingPageData.Partenaires} />
        </>
    );
}

export default Cockpit;