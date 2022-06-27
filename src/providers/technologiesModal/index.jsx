import { createContext, useContext, useState } from "react";


const TechnologiesModalContext = createContext()

export const TechnologiesModalProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <TechnologiesModalContext.Provider value={{openModal, closeModal, modalIsOpen}}>
            {children}
        </TechnologiesModalContext.Provider>
    )
}

export const useTechnologiesModal = () => useContext(TechnologiesModalContext)