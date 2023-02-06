import { createContext, useState } from 'react'

export const LigthboxContext = createContext()

export const LigthboxProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mediasList, setMediasList] = useState([])
    const [current, setCurrent] = useState()

    const toggleLigthbox = (medias, index, e) => {
        e.preventDefault()
        setMediasList(medias)
        setCurrent(index)
        setIsOpen(isOpen === false ? true : false)
    }

    const switchMedia = (action, e) => {
        const length = mediasList.length
        console.log({ current, length })

        if (action === 'next') {
            if (length != current + 1) {
                setCurrent(current + 1)
            } else {
                setCurrent(0)
            }
        } else if (action === 'prev') {
            if (current - 1 >= 0) {
                setCurrent(current - 1)
            } else {
                setCurrent(length - 1)
            }
        }
    }

    return (
        <LigthboxContext.Provider
            value={{ isOpen, toggleLigthbox, current, mediasList, switchMedia }}
        >
            {children}
        </LigthboxContext.Provider>
    )
}
