import { createContext, useContext, useState } from "react";


const ProjectsModalContext = createContext()

export const ProjectsModalProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <ProjectsModalContext.Provider value={{openModal, closeModal, modalIsOpen}}>
            {children}
        </ProjectsModalContext.Provider>
    )
}

export const useProjectsModal = () => useContext(ProjectsModalContext)