import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ course }) => {
    const { id, name } = course;
    return (
        <div style={{marginTop:'40px'}}>
            <div style={{ margin: '30px',  padding:'10px', borderRadius:'5px', backgroundColor:'brown', textAlign:'center', color: 'white' }}>
                <Link to={`/courseDetails/${id}`}>{name}</Link>
            </div>
        </div>
    );
};

export default SideBar;