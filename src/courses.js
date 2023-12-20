import c1 from './imgs/2196458.jpg';
function Courses(props) {
    
    return(
        <>
            <div className="container">
                <div className="row">

               <div className="col-md-3">
                    <img src={c1} alt="" className="img-thumbnail mx-auto d-block"/>
                </div>
                <div className="col-md-9">
                <h2>{props.courseTitle}</h2>    
                <h3 className="text-italics"> {props.courseInstructor}</h3>
                <p> {props.description}
                </p>
                <p className="text-muted">{props.price}</p>
                <button className="btn btn-outline-success">Add to cart</button>
                </div> 
                </div>
            </div>
        </>
    );
}
export default Courses;