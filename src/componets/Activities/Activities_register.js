import React, {Component } from 'react';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
export default class Activities_register extends Component {
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
    render(){
        return(
            <div>
                <Container>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                        <label for="activities_name" type="text" class="col-form-label">ชื่อกิจกรรม :</label>
                        <input type="text" class="form-control" name="activities_name" id="activities_name" value={this.state.activities_name} onChange={this.handleChange}></input>
                    </div>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary"onClick={ this.handleChange }>Send message</button>
                    </form>
                </Container>
            </div>
        )
    }    
}