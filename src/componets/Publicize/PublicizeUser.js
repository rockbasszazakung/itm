import React, {Component } from 'react';

export default class PublicizeUser extends Component {
    
    render(){
        return(
            <div>
            <br /> 
            <br /> 
            <br /> 
            <br /> 
                <table class="table table-striped">
                    <thead>
                    <h5>เพิ่มประชาสัมพันธ์</h5>
                        <tr>
                            <th scope="col">หัวข้อ</th>
                            <th scope="col">รายละเอียด</th>
                            <th scope="col">เเก้ไข</th>
                            <th scope="col">ลบ</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        )
    }
}