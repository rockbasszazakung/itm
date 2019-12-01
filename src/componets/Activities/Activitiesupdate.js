import React, {Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
// import Moment from 'react-moment';
export default class Activitiesupdate extends Component {
    
      state = {
        activities_id:'',
        activities_detail:'',
        activities_name:'',
        start_date:'',
        end_date:'',
        responses:{}
    }
    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam)
        console.log(this.state)
    }
    
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/Activities'; 
    }
    // componentWillMount = () =>{
    //     this.setState({activities_id: this.props.match.params.activities_id})
    //     console.log(this.state.activities_id)
    // }

    // componentWillMount = () => {
    //     this.setState({activities_id: this.props.activities_id})
    //     console.log(this.state.activities_id);
    // }
    // handleUpdate = (activities_id) => {
    //     // alert(activities_id)
    //     const url = 'http://localhost:81/itmapi/api/activities/getActivity';
    //     // const id = document.querySelectorAll("li").props['data-id'];
    //     // e.preventDefault();
    //     axios.post(url + activities_id)
    //         .then(res => {
    //             console.log(res.data);
    //             // this.RefreshPage();
    //         })
    //         // .catch((err) => {
    //         //     console.log(err);
    //         // })
    // }
    componentWillMount () {
        const { activities_id } = this.props.match.params;
        axios.get('http://localhost:81/itmapi/api/activities/getActivity?activities_id='+activities_id)
            .then(response => {
            const result = response.data.response;
            // this.setState({ responses: response.data.response });
            // console.log(response.activities_name)
            // this.RefreshPage();
            result.forEach(element => {
                if(element.activities_id === activities_id){
                    this.setState({ 
                        activities_id : element.activities_id,
                        activities_name : element.activities_name,
                        activities_detail :element.activities_detail,
                        start_date : element.start_date,
                        end_date: element.end_date
                    })
                    // this.setState({activities_detail :element.activities_detail})
                }
            });

            })
            .catch(error => {
            // console.log("====>",error.status); 

            });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:81/itmapi/api/activities/post_update/', {
            activities_id: this.state.activities_id,
            activities_detail: this.state.activities_detail,
            activities_name: this.state.activities_name,
            start_date : this.state.start_date,
            end_date : this.state.end_date
        })
        .then(res => {
            console.log(res.data);
        })
        this.RefreshPage();
    }

    render(){
        console.log(this.state)
        return(
            
            
            <div>
                <Container>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                        <label for="activities_name" type="text" class="col-form-label">ชื่อกิจกรรม :</label>
                        <input type="text" class="form-control" name="activities_name" id="activities_name" value={this.state.activities_name} onChange={this.handleChange}></input>
                    </div>
                    <div class="form-group">
                        <label for="activities_detail" type="text" class="col-form-label">รายละเอียด :</label>
                        <input type="text" class="form-control" name="activities_detail" id="activities_detail" value={this.state.activities_detail} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="start_date" type="text" class="col-form-label">วันเริ่ม :</label>
                        <input type="text" class="form-control" name="start_date" id="start_date" value={this.state.start_date} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="start_date" type="text" class="col-form-label">วันสิ้นสุด :</label>
                        <input type="text" class="form-control" name="end_date" id="end_date" value={this.state.end_date} onChange={this.handleChange}/>
                    </div>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary"onClick={ this.handleChange }>Send message</button>
                    </form>
                </Container>
            </div>
        )
    }
}