// Required
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { FormContext } from '../../context/form'

function Form() {
    // Use Context
    const { isOpen, toggleForm } = useContext(FormContext)

    // Send Form
    function handleForm(e) {
        e.preventDefault()

        let data = {
            name: e.currentTarget.name.value,
            lastname: e.currentTarget.lastname.value,
            email: e.currentTarget.email.value,
            textarea: e.currentTarget.textarea.value,
        }

        console.log(data)
    }

    // Keyboard Accessibility
    document.addEventListener(
        'keydown',
        (e) => {
            if (isOpen && e.key === 'Escape') {
                toggleForm(e)
            }
        },
        false
    )

    return isOpen ? (
        <div className="absolute w-full bg-white text-black top-0 h-[100vh] z-50 bg-[#80808026] flex">
            <div className="h-full w-full p-2 md:p-4 md:h-full lg:h-fit lg:p-8 lg:w-[480px] bg-infosBarBg m-auto relative shadow-2xl">
                <Link
                    to={null}
                    tabIndex="0"
                    aria-label={`Open in ligthbox`}
                    id="closeForm"
                    className="absolute top-3 right-3 cursor-pointer text-white text-3xl"
                    onClick={(e) => toggleForm(e)}
                >
                    X
                </Link>
                <h2 className="text-3xl m-0">
                    Contactez-moi <br /> Mimi Keel
                </h2>
                <form onSubmit={(e) => handleForm(e)}>
                    <label htmlFor="name" className="w-full block text-xl mt-2">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full block h-9 rounded-sm"
                    ></input>
                    <label
                        htmlFor="lastname"
                        className="w-full block text-xl mt-2"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        className="w-full block h-9 rounded-sm"
                    ></input>
                    <label
                        htmlFor="email"
                        className="w-full block text-xl mt-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full block h-9 rounded-sm"
                    ></input>
                    <label
                        htmlFor="textarea"
                        className="w-full block text-xl mt-2"
                    >
                        Votre message
                    </label>
                    <textarea
                        id="textarea"
                        className="w-full h-32 rounded-sm resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        aria-label="Send Form"
                        className="mt-4 w-fit px-7 py-2 cursor-pointer font-medium rounded-sm bg-fePrimary text-white hover:bg-feSecondary hover:text-black"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    ) : null
}

export default Form
