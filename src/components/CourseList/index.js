import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title){
    return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
    const qty = 5;
    const [ title, setTitle] = useState('');
    const dispatch = useDispatch();

    const courses = useSelector(
        state => state.data.slice(0, qty),
        [qty]
    );

    function addCourse() {
        dispatch(addCourseAction(title));
    }

    return (
        <>
        <h1>Slice of 5</h1>
        <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
        </ul>
        <input type='input' onChange={(event) => setTitle(event.target.value)}></input>
        <button type='button' onClick={addCourse}>Add course</button>    
        </>
    )
}
