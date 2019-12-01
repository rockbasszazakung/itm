import React, {Component } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container'
// import Moment from 'react-moment';
export default class Publiczeupdate extends Component {
    
    // state = {
    //     public_id:'',
    //     topic:'',
    //     content:'',
    //     responses:{}
    // }
    
    // handleChange = (event) => {
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     this.setState({[nam]: val});
    //     console.log(nam)
    //     console.log(this.state)
    // }
    
    // RefreshPage = () => { 
    //     window.location.href = 'http://localhost:3000/Publicizeuser'; 
    // }
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
    // componentWillMount () {
    //     const { public_id } = this.props.match.params;
    //     axios.get('http://localhost:81/itmapi/api/Public_relations/getPublic_relations='+public_id)
    //         .then(response => {
    //         const result = response.data.response;
    //         // this.setState({ responses: response.data.response });
    //         // console.log(response.activities_name)
    //         // this.RefreshPage();
    //         result.forEach(element => {
    //             if(element.public_id === public_id){
    //                 this.setState({ 
    //                     public_id : element.public_id,
    //                     topic : element.topic,
    //                     content :element.content
    //                 })
    //                 // this.setState({activities_detail :element.activities_detail})
    //             }
    //         });

    //         })
    //         .catch(error => {
    //         // console.log("====>",error.status); 

    //         });

    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:81/itmapi/api/Public_relations/post_update', {
    //         public_id: this.state.public_id,
    //         topic: this.state.topic,
    //         content: this.state.content
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     this.RefreshPage();
    // }

    render(){
        return(
            <div>
                ddddddddddddddddddd
            </div>
            
            // <div>
            //     <Container>
            //     <form onSubmit={this.handleSubmit}>
            //     <div class="form-group">
            //             <label for="activities_name" type="text" class="col-form-label">ชื่อกิจกรรม :</label>
            //             <input type="text" class="form-control" name="topic" id="topic" value={this.state.topic} onChange={this.handleChange}></input>
            //         </div>
            //         <div class="form-group">
            //             <label for="activities_detail" type="text" class="col-form-label">รายละเอียด :</label>
            //             <input type="text" class="form-control" name="content" id="content" value={this.state.content} onChange={this.handleChange}/>
            //         </div>
            //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            //         <button type="submit" class="btn btn-primary"onClick={ this.handleChange }>Send message</button>
            //         </form>
            //     </Container>
            // </div>
        )
    }
}