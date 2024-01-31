import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'
const CourseDetails = () => {
    const [course, setCourse] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/courses.json`);
                const data = await response.json();
                const selectedCourse = data.find((c) => c.id.toString() === id);
                setCourse(selectedCourse);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div style={{padding:'20px'}}>
            {course ? (
                <div>
                    <h2 className='courseName'>{course.name}</h2>
                    <p className='courseName'>{course.title}</p>
                    <p>{course.details}</p>
                    <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <img style={{borderRadius:'10px', margin:'20px'}} src={course.img} alt={course.name} />
                        <Link style={{backgroundColor:'brown', marginLeft:'50px', color:'white',borderRadius:'10px', padding:'12px',height:'40px', textAlign:'center'}} to='/checkout'>GET PREMIUM ACCESS</Link>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CourseDetails;
