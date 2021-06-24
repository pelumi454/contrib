import React,{useState} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import './AllInvestment.css'
import Rectangle64 from '../../assets/Rectangle 64.svg'


const AllInvestment = () =>{
    const [key, setKey] = useState('home');     
     return (
       <div className="container-fluid">
   
      
           <Tabs
             id="controlled-tab-example"
             className=".nav-link.active"
             activeKey={key}
             onSelect={(k) => setKey(k)}
           >
      
             <Tab eventKey="home" title="Home">
               <p className="get-started">Select an investment plan to get started</p>
               <div className="silver-investment">
               <img src={Rectangle64} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               </div>
                </div>
             </Tab>
             <Tab eventKey="profile" title="Profile">
               <p>this is profile tab</p>
             </Tab>
             <Tab eventKey="setting" title="Setting">
               <p>this is setting tab</p>
             </Tab>
          
           </Tabs>
      
       </div>
     );
   }

export default AllInvestment
