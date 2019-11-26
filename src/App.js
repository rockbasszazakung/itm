import React,{ Component }  from 'react';
import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import Header from './Layout/Header';
import { BrowserRouter,Route} from "react-router-dom";

import Home from './Home/Home';
import Footer from './Layout/Footer';
import Publicize from './componets/Publicize/Publicize';
import Admin from './Admin/Admin';
import Activities from './componets/Activities/Activities';
import ActivitiesPublicze from './componets/Activities/ActivitiesPublicze';
import Activitiescreate from './componets/Activities/Activitiescreate';
import Activitiesupdate from './componets/Activities/Activitiesupdate';



export default class App extends Component{
  // state = {
  //   'isLogin': false
  // };

  // constructor(props) {
  //   super(props);
  //   const isLoggin = localStorage.getItem('isLogin');
  //   this.setState({
  //     'isLogin': (isLoggin)?true:false
  //   });
  // }

  render(){
    
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
      <Header></Header>
      <Route exact path="/" component={Home} />
      <Route path="/Publicize"  component={Publicize} />   
      <Route path="/Activities"  component={Activities} />   
      <Route path="/ActivitiesPublicze"  component={ActivitiesPublicze} />   
      <Route path="/Activitiescreate"  component={Activitiescreate} /> 
      <Route path="/Activitiesupdate" component={Activitiesupdate} />
      <Route exact path="/Admin"  component={Admin} /> 
      <Footer></Footer>
    </BrowserRouter>
  )
}
  }
