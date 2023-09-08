import React from 'react';
import "../css/home.css";

import TableComponent from './TableComponent';



 function Home() {
  
  return (
  <>
<div>
    <h1 className='heading'>Transaction Dashboard</h1><hr/>
    </div>
   
   
    
    <div>
        <TableComponent/>
    </div>
  </>
    
  )
}
export default Home;
