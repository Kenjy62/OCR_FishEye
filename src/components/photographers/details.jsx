// Required
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// JSON Data
import JSON from '../../datas/photographers.json'

// Required
import Profil from './profil'
import Medias from './medias'

// Pattern
import FactoryPhotographer from '../../patterns/photographer'

function Details() {
    // Get :id params in URL
    let params = useParams()

    // States
    const [photographerData, setPhotographerData] = useState([])
    const [medias, setMedias] = useState([])

    // Save JSON data for Photographer by id
    useEffect(() => {
        const data = Object.values(JSON.photographers).find(
            (e) => e.id === parseInt(params.id)
        )
        setPhotographerData(data)

        const medias = JSON.media
            .filter((e) => e.photographerId === parseInt(params.id))
            .sort((a, b) => (a.likes > b.likes ? -1 : 1)) // Default sort by popularity
        setMedias(medias)

        // Pattern for create infosbar
        let infosbar = new FactoryPhotographer(photographerData)
        infosbar.makeInfosbar()
    }, [])

    // Starting calculate total likes
    useEffect(() => {
        if (Object.keys(photographerData).length && Object.keys(medias)) {
            calculate(medias, photographerData)
        }
    }, [photographerData, medias])

    // Likes Calculate Function
    function calculate(medias, photographer) {
        let totals = 0
        medias.forEach((e) => {
            totals = totals + e.likes
        })

        let target = document.getElementsByClassName('infosbar')
        target[0].innerHTML =
            "<span id='totalLikes' aria-label='Likes'></span><span tabIndex='-1'></span>"
        target[0].firstChild.textContent = totals
        target[0].lastChild.textContent =
            ' ♥ ' + photographer.price + '$/jour' || 0
    }

    return (
        <>
            <Profil data={photographerData} />
            <Medias data={medias} />
        </>
    )
}

export default Details
