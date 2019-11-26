import React, {Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import {Link} from "react-router-dom";
export default class Activities extends Component {
   
       state={
            responses : []         
        }
    
    componentDidMount(){
        axios.get('http://localhost:81/itmapi/api/activities/get_select')
            .then(response => {
            this.setState({ responses: response.data.response });
            // this.RefreshPage();
            })
            .catch(error => {
            console.log("====>",error.status);
            });
    }

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/Activities'; 
    }

    
    handleRemove = (activities_id) => {
        // alert(activities_id)
        const url = 'http://localhost:81/itmapi/api/activities/get_delete?activities_id=';
        // const id = document.querySelectorAll("li").props['data-id'];
        // e.preventDefault();
        axios.get(url + activities_id)
            .then(res => {
                console.log(res.data);
                // this.RefreshPage();
            })
            this.RefreshPage();
            // .catch((err) => {
            //     console.log(err);
            // })
    }
   
    
    render(){
        return(
            <div>
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <div class="Container">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <Link to='/Activitiescreate'><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" >เพิ่มกิจกรรม</button></Link>
                    
                </form>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ลำดับ</th>
                            <th scope="col">หัวข้อกิจกรรม</th>
                            <th scope="col">รายละเอียด</th>
                            <th scope="col">วันเริ่ม</th>
                            <th scope="col">วันสิ้นสุด</th>
                            <th scope="col">เเก้ไขกิจกรรม ลบกิจกรรม</th>
                        </tr>
                    </thead>
                        <tbody>
                        { this.state.responses.map((response, i) => (
                            <tr role="row">
                                <td>{i+1}</td>
                                <td>{response.activities_name}</td>
                                <td>{response.activities_detail}</td>
                                <td><Moment format="DD-MM-YYYY">{response.start_date}</Moment></td>
                                <td><Moment format="DD-MM-YYYY">{response.end_date}</Moment></td>
                                <td><Link to='/Activitiesupdate'><button type="button" class="btn btn-outline-primary">เเก้ไข</button></Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <button type="button" class="btn btn-outline-danger" onClick={() => this.handleRemove(response.activities_id)}>ลบ</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}