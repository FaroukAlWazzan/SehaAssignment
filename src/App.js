// import logo from './logo.svg';
import './Components/Styles.css'
import './App.css';
import NavComponent from './Components/NavComponent';
import DoctorBackground from './Components/DoctorBackground';
import FloatingPanel from './Components/FloatingPanel';
import SiteContainer from './Components/SiteContainer';
import GridSystem from './Components/GridSystem';
import BigGrid from './Components/BigGrid';
import SmallGrid from './Components/SmallGrid';
import DoctorInfo from './Components/DoctorInfo';
import TabSwitch from './Components/TabSwitch';
import DoctorSummary from './Components/DoctorSummary';
import WorkPlaces from './Components/WorkPlaces';
import DoctorServices from './Components/DoctorServices';
import Certificates from './Components/Certificates';
import Instructions from './Components/Instructions';
import Footer from './Components/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, faCoffe } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function App() {
   return (
      <div className="App">
         <SiteContainer>
            <NavComponent />
         </SiteContainer>
         <DoctorBackground />
         <SiteContainer>
            <FloatingPanel />
            <GridSystem>
               <BigGrid>
                  <DoctorInfo />
                  <TabSwitch />
                  <DoctorSummary />
                  <WorkPlaces />
                  <DoctorServices />
                  <Certificates />
                  <Instructions />
               </BigGrid>
               <SmallGrid></SmallGrid>
            </GridSystem>
         </SiteContainer>
         <Footer />
      </div >

   );
}

export default App;
