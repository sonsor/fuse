import {createContext, useState} from 'react'

const InfoFormContent = createContext()

export const InfoFormContextProvider = ({children}) => {

    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    const initalFormValues = {
        name,
        setName,
        dateOfBirth,
        setDateOfBirth
    }

    return (
        <InfoFormContent.Provider value={initalFormValues}>
            {children}
        </InfoFormContent.Provider>
    )
}

export default InfoFormContent