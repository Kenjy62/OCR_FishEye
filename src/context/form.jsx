import { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleForm = (e) => {
        e.preventDefault()
        setIsOpen(isOpen === false ? true : false)

        if (isOpen) {
            document.getElementById('openForm').focus()
        }
    }

    return (
        <FormContext.Provider value={{ isOpen, toggleForm }}>
            {children}
        </FormContext.Provider>
    )
}
