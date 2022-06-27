import { AboutMeModalProvider } from "./aboutMeModal";
import { ProjectsModalProvider } from "./projectsModal";
import { TechnologiesModalProvider} from "./technologiesModal";

const Providers = ({ children }) => {
  return (
    <ProjectsModalProvider>
        <TechnologiesModalProvider>
              <AboutMeModalProvider>{children}</AboutMeModalProvider>
        </TechnologiesModalProvider>
    </ProjectsModalProvider>
  );
};

export default Providers;