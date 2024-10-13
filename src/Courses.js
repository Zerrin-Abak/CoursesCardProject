import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses }) {
  const [index, setIndex] = useState(0);
  const { title, content, price } = courses[index];

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex === -1) {
        newIndex = 4;
        return newIndex;
      } else {
        return newIndex;
      }
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex === 5) {
        newIndex = 0;
        return newIndex;
      } else {
        return newIndex;
      }
    });
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    if (randomNumber === 5) {
      randomNumber = 0;
      setIndex(randomNumber);
    } else {
      setIndex(randomNumber);
    } 
  };

  return (
    <div className="course-main-div">
      <div className="course-title-and-btn">
        <h2>My Courses</h2>
        <button className="card-assign-btn" onClick={getRandomCourse}>
          Assign a random course
        </button>
      </div>
      <div className="card-div">
        <button className="card-btn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="card-title-price">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-price">{price} ₺</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="card-btn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {
            courses.map((value, index) => {
                return <Course key = {index} course = {value} removeOneCourse={removeCourse}/>
            })
        } */}
      </div>
    </div>
  );
}

export default Courses;
