import React, {Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
export default class Publiczecreate extends Component {
    
      state = {
        public_id:'',
        topic:'',
        content:''
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

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:81/itmapi/api/Public_relations/post_create', {
            topic: this.state.topic,
            content: this.state.content
        })
        .then(res => {
            console.log(res.data);
        })
        this.RefreshPage();
    }

    render(){
        return(
            // <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            // <div class="modal-dialog" role="document">
            //     <div class="modal-content">
            //     <div class="modal-header">
            //         <h5 class="modal-title" id="exampleModalLabel">เพิ่มกิจกรรม</h5>
            //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //         <span aria-hidden="true">&times;</span>
            //         </button>
            //     </div>
            //     <div class="modal-body">
            //         <form onSubmit={this.handleSubmit}>
            //         <div class="form-group">
            //             <label for="activities_name" type="text" class="col-form-label">ชื่อกิจกรรม :</label>
            //             <input type="text" class="form-control" name="activities_name" id="activities_name" value={this.state.activities_name} onChange={this.handleChange}/>
            //         </div>
            //         <div class="form-group">
            //             <label for="activities_detail" type="text" class="col-form-label">รายละเอียด :</label>
            //             <input type="text" class="form-control" name="activities_detail" id="activities_detail" value={this.state.activities_detail} onChange={this.handleChange}/>
            //         </div>
            //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            //         <button type="submit" class="btn btn-primary">Send message</button>
            //         </form>
            //     </div>
            //     </div>
            // </div>
            // </div>
            <div>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="activities_name" type="text" class="col-form-label">หัวข้อประชาสัมพันธ์ :</label>
                            <input type="text" class="form-control" name="topic" id="topic" value={this.state.topic} onChange={this.handleChange}/>
                        </div>
                        <div class="form-group">
                            <label for="activities_detail" type="text" class="col-form-label">รายละเอียดข่าว :</label>
                            <input type="text" class="form-control" name="content" id="content" value={this.state.content} onChange={this.handleChange}/>
                        </div>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary"onClick={ this.handleChange }>Send message</button>
                    </form>
                </Container>
            </div>
        )
    }
}