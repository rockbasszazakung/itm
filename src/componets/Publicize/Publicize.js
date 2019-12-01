import React, {Component } from 'react';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
// import {Link} from "react-router-dom";
export default class Publicize extends Component {
    
    state={
        responses : []         
    }

componentDidMount(){
    axios.get('http://localhost:81/itmapi/api/public_relations/get_select')
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

NextPage=(activities_id)=> { 
    window.location.href ='http://localhost:3000/Activitiesupdate/'+activities_id; 
}


handleUpdate = (activities_id) => {

        this.NextPage(activities_id);
        // .catch((err) => {
        //     console.log(err);
        // })
}

handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(nam)
    console.log(this.state)
}

handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:81/itmapi/api/activities/search', {
        keyword: this.state.keyword,
    })
    .then(res => {
        console.log(res.data);
    })
    this.RefreshPage();
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
            <Container>

            {/* <form class="form-inline my-2 my-lg-0 float-right">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="keyword" value={this.state.keyword} onChange={this.handleChange}>Search</button>&nbsp;&nbsp;&nbsp;
                <Link to='/Activitiescreate'><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" >เพิ่มกิจกรรม</button></Link>
                
            </form>
            <br />
            <br /> */}
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">ลำดับ</th>
                        <th scope="col">หัวข้อประชาสัมพัน</th>
                        <th scope="col">รายละเอียด</th>
                        {/* <th scope="col">เเก้ไขกิจกรรม ลบกิจกรรม</th> */}
                    </tr>
                </thead>
                    <tbody>
                    { this.state.responses.map((response, i) => (
                        <tr role="row">
                            <td>{i+1}</td>
                            <td>{response.topic}</td>
                            <td>{response.content}</td>
                            
                        </tr>
                    ))}
                    </tbody>
                </table>
                </Container>
        </div>
    )
}
}