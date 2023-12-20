import Navigation from "./navigation";
import Courses from "./courses";
import Courseform from "./courseform";
import Courselibrary from './data/course details';

function createCourses(co) {
    return <Courses
    courseTitle = {co.CourseTitle}
    courseInstructor = {co.CourseInstrutor}
    description = {co.CourseDescription}
    price = {co.Price} />
}

function App(){
    return(
        <>
            <Navigation/>
            <h1>Online Course Platform</h1>
            {Courselibrary.map(createCourses)}
            <Courseform/>
        </>
    );
}

export default App;