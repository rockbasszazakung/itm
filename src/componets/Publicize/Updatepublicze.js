import React, {Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
export default class Updatepublicze extends Component {
    state = {
        public_id:'',
        topic:'',
        content:'',
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
        window.location.href = 'http://localhost:3000/Publicizeuser'; 
    }
    componentWillMount () {
        const { public_id } = this.props.match.params;
        axios.get('http://localhost:81/itmapi/api/Public_relations/getPublic_relations?public_id='+public_id)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.public_id === public_id){
                    this.setState({ 
                        public_id : element.public_id,
                        topic : element.topic,
                        content :element.content
                    })
                }
            });
        })
            .catch(error => {
                    });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:81/itmapi/api/Public_relations/post_update', {
            public_id: this.state.public_id,
            topic: this.state.topic,
            content :this.state.content
        })
        .then(res => {
            console.log(res.data);
        })
        this.RefreshPage();
    }
    render(){
        return(
            <div>
                <Container>
             <form onSubmit={this.handleSubmit}>
                 <div class="form-group">
                         <label for="activities_name" type="text" class="col-form-label">ชื่อกิจกรรม :</label>
                         <input type="text" class="form-control" name="topic" id="topic" value={this.state.topic} onChange={this.handleChange}></input>
                     </div>
                     <div class="form-group">
                         <label for="activities_detail" type="text" class="col-form-label">รายละเอียด :</label>
                         <input type="text" class="form-control" name="content" id="content" value={this.state.content} onChange={this.handleChange}/>
                     </div>
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     <button type="submit" class="btn btn-primary"onClick={ this.handleChange }>Send message</button>
                     </form>
                 </Container>
            </div>
        )}
}