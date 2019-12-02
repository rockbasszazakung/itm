import React, {Component } from 'react';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
export default class Show_activities extends Component {
    
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
                            {/* <th scope="col">เเก้ไขกิจกรรม ลบกิจกรรม</th> */}
                        </tr>
                    </thead>
                        <tbody>
                        { this.state.responses.map((response, i) => (
                            <tr role="row">
                                <td>{i+1}</td>
                                <td>{response.show_activities_name}</td>
                                <td>{response.show_activities_result}</td>
                                
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </Container>
            </div>
        )
    }
}