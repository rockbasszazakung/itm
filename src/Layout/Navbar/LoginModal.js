import React, {Component } from 'react';
import service_uri from '../../componets/variable/service_uri';
import axios from 'axios';
// import {Link} from 'react-router-dom'

export default class LoginModal extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/Admin'; 
    }

    handleSubmit = () => {
        
        axios.post(service_uri+'Auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            let data = res.data
            if(data.status){
                localStorage.setItem('token', data.token);
                this.RefreshPage();
            }
        })
    }
    
    render(){
        
        return(
                <div id="loginModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3>เข้าสู่ระบบ</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                    <div class="form-group">
                                        <label for="uname1">ชื่อผู้ใช้</label>
                                        <input type="text" class="form-control form-control-lg" name="username" id="username" value={this.state.username} onChange={this.handleChange} required=""/>
                                        <div class="invalid-feedback">Oops, you missed this one.</div>
                                    </div>
                                    <div class="form-group">
                                        <label>รหัสผ่าน</label>
                                        <input type="password" class="form-control form-control-lg" name="password" id="password" value={this.state.password} onChange={this.handleChange} required="" autocomplete="new-password"/>
                                        <div class="invalid-feedback">Enter your password too!</div>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="rememberMe" />
                                        <label class="custom-control-label" for="rememberMe">จดจำรหัสผ่าน</label>
                                    </div>
                                    <div class="form-group py-4">
                                        <button class="btn btn-outline-dark" data-dismiss="modal" aria-hidden="true">ออก</button>
                                        <button type="button" class="btn btn-outline-success float-right" id="btnLogin" onClick={ this.handleSubmit } >เข้าสู่ระบบ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }