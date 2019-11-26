import React, {Component } from 'react';
//import {Link} from 'react-router-dom'
export default class Home extends Component {
    render(){
        return(
            <div>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://informatics.wu.ac.th/it/archives/1048/27174038_2022981991051647_8058654638334982242_o" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5>การเเข่งขันกีฬาพื้นบ้าน</h5>
                            <p>ชักเย่อออออออออออออออออออออออออออออออออออออออออออออ</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://informatics.wu.ac.th/wp-content/uploads/2018/04/a8-32.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                            <h5>การเเข่งขันเกม</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://informatics.wu.ac.th/wp-content/uploads/2018/04/a5-42.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>  
                {/* <div className="center">
                    <Link to='/Login' ><button class="w3-button  w3-purple">เข้าสู่ระบบ</button></Link>
                </div> */}
            </div>
        )
    }
}