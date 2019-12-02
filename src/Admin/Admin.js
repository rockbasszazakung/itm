import React, {Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
export default class Admin extends Component {
    render(){
        return(
            <div>
                <Container>
                <div class="row">
                  <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    <h2>จัดการกิจกรรม</h2>
                    {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                    <Link to={'/Activities'}><p><a class="btn btn-secondary" href="#" role="button">View details »</a></p></Link>
                  </div>
                  <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    <h2>จัดการประชาสัมพันธ์</h2>
                    <Link to={'/Publicizeuser'}><p><a class="btn btn-secondary" href="#" role="button">View details »</a></p></Link>
                  </div>
                  <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    <h2>จัดการผลการเเข่งขัน</h2>
                    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                  </div>
                </div>
    </Container>
            </div>
            
        )
    }
}


