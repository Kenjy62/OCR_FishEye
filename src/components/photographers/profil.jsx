// Required
import { useEffect } from 'react'

// Components
import Button from '../button'

// Pattern
import Photographer from '../../patterns/photographer'

function Profil(props) {
    // using Pattern for making DOM
    useEffect(() => {
        const photographer = new Photographer(props.data)
        photographer.makeDOM()
    }, [props.data])

    return (
        <main id="main" className="mt-4 mb-4">
            <div className="p-10 flex flex-col-reverse gap-12 justify-between items-center bg-background shadow-sm md:flex-row md:gap-10">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="nameProfil text-feSecondary text-5xl"></h2>
                    <span className="locationProfil text-fePrimary text-xl"></span>
                    <span className="taglineProfil text-md text-feSecondaryGray"></span>
                </div>
                <Button />
                <div>
                    {props.data.portrait ? (
                        <img
                            alt={props.data.name}
                            className="pictureProfil w-32 h-32 rounded-full shadow object-cover"
                            src={require(`../../res/images/photographers/pictures/${props.data.portrait}`)}
                        />
                    ) : null}
                </div>
            </div>
        </main>
    )
}

export default Profil
