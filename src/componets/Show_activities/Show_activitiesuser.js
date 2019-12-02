import React, {Component } from 'react';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
export default class Show_activitiesuser extends Component {
    
    state={
        responses : []         
    }
    componentDidMount(){
        axios.get('http://localhost:81/itmapi/api/Show_activities/get_select')
            .then(response => {
            this.setState({ responses: response.data.response });
            // this.RefreshPage();
            })
            .catch(error => {
            console.log("====>",error.status);
            });
    }
    handleRemove = (show_activities_id) => {
        // alert(activities_id)
        const url = 'http://localhost:81/itmapi/api/Show_activities/get_delete?show_activities_id=';
        // const id = document.querySelectorAll("li").props['data-id'];
        // e.preventDefault();
        axios.get(url + show_activities_id)
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
                <h2>ผลการเเข่งขัน</h2>
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
                            <th scope="col">ชื่อกิจกรรม</th>
                            <th scope="col">ผลการเเข่งขัน</th>
                            <th scope="col">เเก้ไขกิจกรรม ลบกิจกรรม</th>
                        </tr>
                    </thead>
                        <tbody>
                        { this.state.responses.map((response, i) => (
                            <tr role="row">
                                <td>{i+1}</td>
                                <td>{response.show_activities_name}</td>
                                <td>{response.show_activities_result}</td>
                                <td>
                                    <Link to={'/Updatepublicze/'+response.public_id}>
                                    <button type="button" class="btn btn-outline-primary">เเก้ไข</button> 
                                    </Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.handleRemove(response.show_activities_id)}>ลบ</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </Container>
            </div>
        )
    }
}