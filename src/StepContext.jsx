import React, { useState } from 'react';
import Projectinfo from './components/project/project-information'
export const multistepcontext = React.createContext();

const StepContext = () => {

    const [locationData, setLocationData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [contractorData, setContractorData] = useState([]);
    const [timeframes, setTimeframes] = useState([]);



  return (
    <div>
        <multistepcontext.Provider value = {{timeframes, setTimeframes, contractorData, setContractorData, locationData, setLocationData, userData, setUserData, finalData, setFinalData}}>
           <Projectinfo/>
        </multistepcontext.Provider>
    </div>
  )
}

export default StepContext;