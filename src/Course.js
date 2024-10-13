function Course({course, removeOneCourse}) {
    return ( 
    <div className="card">
        <div className="card-title-price">
            <h2 className="card-title">{course.title}</h2>
            <h4 className="card-price">{course.price} ₺</h4>
        </div>
        <p>{course.content}</p>
        <button className="card-delete-btn" onClick={() => {
            removeOneCourse(course.id);
        }}>Delete</button>
    </div> 
    );
}

export default Course;