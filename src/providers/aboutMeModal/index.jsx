import { createContext, useContext, useState } from "react";


const AboutMeModalContext = createContext()

export const AboutMeModalProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <AboutMeModalContext.Provider value={{openModal, closeModal, modalIsOpen}}>
            {children}
        </AboutMeModalContext.Provider>
    )
}

export const useAboutMeModal = () => useContext(AboutMeModalContext)