import React, {createContext, useState} from 'react'

export const ServicesContext = createContext()

export const ServicesProvider = ({children}) => {

    const [initialState, setInitialState] = useState()
    const [packageSelected, setPackage] = useState()
    const [solutionSelected, setSolution] = useState()

    
    return(
        <ServicesContext.Provider value={[initialState, setInitialState, packageSelected, setPackage, solutionSelected, setSolution ]}>
            {children}
        </ServicesContext.Provider>
    )
}