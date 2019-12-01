import React, {Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Container from 'react-bootstrap/Container'
export default class ActivitiesPublicze extends Component {
    state={
        responses : []            
    }

componentDidMount(){
    axios.get('http://localhost:81/itmapi/api/activities/get_select')
        .then(response => {
        this.setState({ responses: response.data.response });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
}
    render(){
        console.log(this.state.responses)

        return(
            <div>
                <Container>
                <div>
                    <div>
                        <div > 
                        <table class="table table-striped">
                            <thead>
                                <tr><th scope="col">ลำดับ</th>
                                    <th scope="col">หัวข้อกิจกรรม</th>
                                    <th scope="col">รายละเอียด</th>
                                    <th scope="col">วันเริ่ม</th>
                                    <th scope="col">วันสิ้นสุด</th>
                                    <th scope="col">สมัครกิจกรรม</th>
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
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}