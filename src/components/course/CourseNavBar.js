import React from 'react'
import {Link,Route} from 'react-router-dom'
import CoursesList from './CoursesList'
import CreateCourse from './CreateCourse'


const CourseNavBar=(props)=>{
    return (
        <div>
            <Link to="/courses"  >Create course</Link>
            <Route patch="/courses" component={CoursesList} exact={true}/>
            <Route patch="/courses" component={CreateCourse} />
            
            
        </div>
    )
}
export default CourseNavBar