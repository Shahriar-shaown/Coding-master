import React from 'react';
import './Courses.css'
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SIdebar/SideBar';
import { FaArrowRight } from 'react-icons/fa';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    if (!courses) {
        return <p>Loading...</p>;
    }
    return (
        <div className='courses-container'>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ fontWeight: 'bolder', marginBottom: '40px' }}>All courses here what you are looking for :</h3>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <h1 style={{ fontWeight: 'bolder' }}>Find out more details here  </h1>
                        <FaArrowRight />
                    </div>
                </div>
                <div className='course gap-3'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
            <div>
                {
                    courses.map(course => <SideBar key={course.id} course={course}></SideBar>)
                }
            </div>
        </div>
    );
};

export default Courses;