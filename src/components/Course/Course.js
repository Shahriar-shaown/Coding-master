import React from 'react';

const Course = ({ course }) => {
    console.log(course)
    return (
        <div>
            <div className="card w-88 bg-slate-300 h-96 shadow-xl">
                <figure><img src={course.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course.name}</h2>
                    <p><small>{course.title}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Course;