import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((value) => {
      return value.id !== id;
    });
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refresh-div">
              <h2>You deleted all the courses!</h2>
              <button className="card-delete-btn" onClick={() => {
                fetchCourses();
              }}>Refresh</button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
