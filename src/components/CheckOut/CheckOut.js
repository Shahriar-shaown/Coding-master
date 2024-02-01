import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const [course,setCourse]=useState(null)
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
        <div>
            {course ? (
                <h2 style={{margin:'50px', fontWeight:'bolder'}}>Course Name: {course.name}</h2>
            )
            :
            (<p>Loading...</p>)
        }
        </div>
    );
};

export default CheckOut;