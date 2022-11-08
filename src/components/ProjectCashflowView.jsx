import React, { useState } from 'react';
import ProjectCashflowDetails from './ProjectCashflowDetails';



const  ProjectCashflowView = () => {

    const [details, setDetails] = useState([]);

  return (
    <>
    <div>
        <ProjectCashflowDetails data={[]}/>
    </div>
    </>
  );
}

export default ProjectCashflowView;