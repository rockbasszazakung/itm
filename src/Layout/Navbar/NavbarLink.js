import React, {Component } from 'react';
import {Link} from 'react-router-dom'
export default class NavbarLink extends Component {
    
    render(){
        return(
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
                <Link to='/Publicize'><a className="navbar-brand js-scroll-trigger" ><font color="White"><h6>ประชาสัมพันธ์</h6></font></a></Link> 
            </li>
            <li className="nav-item">
            <Link to='/ActivitiesPublicze'><a className="navbar-brand js-scroll-trigger" ><font color="White"><h6></h6>กิจกรรม</font></a></Link> 
            </li>
            <li className="nav-item">
                <a className="navbar-brand js-scroll-trigger" href="#services"><font color="White"><h6></h6></font></a>
            </li>
            <li className="nav-item">
                <button className="nav-link js-scroll-trigger" href="#loginModal"class="btn btn-outline-warning" data-toggle="modal">  <h6>เข้าสู่ระบบ</h6> </button>
            </li>
            </ul>
        </div>
        )
    }
}