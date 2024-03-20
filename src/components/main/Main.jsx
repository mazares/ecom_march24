import "./Main.css";

import { useState, useEffect } from "react";

import CardCourse from "../card/CardCourse";

export default function Main(params) {
  const [courses, setCourses] = useState([]);

  const url = "http://localhost:3000/cursuri/";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data);
    }

    fetchData();
  }, []);

  return (
    <main className="main">
      <div className="courses">
        {courses.map((course) => (
          <CardCourse key={course.id} {...course} />
        ))}
      </div>
    </main>
  );
}
