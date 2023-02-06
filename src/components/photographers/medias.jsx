// Required
import { useEffect, useRef, useState } from 'react'

// Components
import Media from './media'

function Medias({ data }) {
    // States
    const [itemSelected, setItemSelected] = useState('Popularité') // Sort type selected
    const [menuItems, setMenuItems] = useState(['Date', 'Titre']) // Sort type available
    const [menuVisibility, setMenuVisibility] = useState(false) // Sort menu visibility
    const [media, setMedias] = useState([]) // Medias of Photographer
    const [isLoading, setIsLoading] = useState(false) // Loading state

    // Ref
    const filterRef = useRef(null)

    // Hide/Show Menu Function
    const toggleMenu = (e) => {
        if (e.key === 'Enter') {
            setMenuVisibility((prevState) => !prevState)
        }
    }

    // eventListener keypress for hide/show menu
    useEffect(() => {
        filterRef.current.addEventListener('keypress', toggleMenu)

        return () => {
            if (filterRef.current) {
                filterRef.current.removeEventListener('keypress', toggleMenu)
            }
        }
    }, [])

    // Set initial data on load
    useEffect(() => {
        setMedias(data)
    }, [media])

    // Sort function, update menu items
    function sortBy(type) {
        setMenuItems(
            menuItems.filter((value) => value !== type).concat(itemSelected)
        )
        setItemSelected(type)
    }

    // Set Sort function
    function setSort() {
        let sort

        switch (itemSelected) {
            case 'Popularité':
                sort = media.sort((a, b) => (a.likes > b.likes ? -1 : 1))
                setMedias([...media, ...sort])
                break
            case 'Date':
                sort = media.sort((a, b) => new Date(a.date) - new Date(b.date))
                setMedias([...media, ...sort])
                break
            case 'Titre':
                sort = media.sort(function (a, b) {
                    if (a.title < b.title) return -1
                    if (a.title > b.title) return 1
                    return 0
                })
                setMedias([...media, ...sort])
                break
            default:
                break
        }
    }

    // Start sort with default value when DOM load
    useEffect(() => {
        if (isLoading) {
            setSort()
        } else {
            setIsLoading(true)
        }
    }, [itemSelected])

    // Menu Accessbility
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sortBy(event.target.getAttribute('value'))
            setMenuVisibility(menuVisibility ? false : true)
        }
    }

    // DOM close filter menu
    document.addEventListener('click', function (e) {
        if (e.target.id != 'selected') {
            setMenuVisibility(false)
        }
    })

    return (
        <>
            <div className="container p-0 flex items-center">
                <span className="font-medium float-left">Trier par</span>
                <div className="custom-select relative inline-block">
                    <div
                        ref={filterRef}
                        id="filter"
                        tabIndex="0"
                        aria-label="Sort by"
                        role="Scrolling Menu"
                        onClick={() => {
                            setMenuVisibility(true)
                        }}
                        className={
                            menuVisibility
                                ? 'selected bg-fePrimary ml-3 mr-3 rounded-tl rounded-tr p-2 text-white cursor-pointer pl-4 pr-4 w-36'
                                : 'selected bg-fePrimary ml-3 mr-3 rounded p-2 text-white cursor-pointer pl-4 pr-4 w-36'
                        }
                    >
                        <span id="selected" className="border-b border-white">
                            {itemSelected}
                        </span>
                    </div>
                    {menuVisibility ? (
                        <div className="bg-fePrimary absolute text-white ml-3 mr-3 z-10 w-[calc(100%_-_24px)] rounded-br rounded-bl">
                            {menuItems.map((type, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="option text-white pl-4 pr-4 pt-3 pb-3"
                                    >
                                        <span
                                            onKeyDown={handleKeyPress}
                                            value={type}
                                            tabIndex="0"
                                            role="Filter"
                                            aria-label={type}
                                            className="border-b border-white cursor-pointer"
                                            onClick={() => {
                                                sortBy(type)
                                            }}
                                        >
                                            {type}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-15 mt-5 mb-10">
                {media.map((el, index) => {
                    return (
                        <Media
                            key={index}
                            medias={media}
                            media={el}
                            index={index}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Medias
