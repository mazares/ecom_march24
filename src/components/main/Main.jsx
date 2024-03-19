import "./Main.css";

import CardCourse from "../card/CardCourse";

const courses = [
  {
    id: 1,
    title: "Notiuni de baza in artroscopia genunchiului",
    description:
      "Cursul este destinat medicilor rezidenti si specialistilor ortopezi care doresc sa invete sau sa isi imbunatateasca tehnicile de artroscopie a genunchiului.",
    places: 20,
    availablePlaces: 10,
    location:
      "Centrul digital de training în tratamentul minim-invaziv și intervențional",
    format: "Fizic",
    hour: "16:30",
    language: "RO",
    date: "05.05.2024",
    finalSubscriptionDate: "01.05.2024",
  },
  {
    id: 2,
    title: "Notiuni de baza in artroscopia umarului",
    description:
      "Cursul este destinat medicilor rezidenti si specialistilor ortopezi care doresc sa invete sau sa isi imbunatateasca tehnicile de artroscopie a genunchiului.",
    places: 25,
    availablePlaces: 25,
    location:
      "Centrul digital de training în tratamentul minim-invaziv și intervențional",
    format: "Fizic",
    hour: "16:30",
    language: "RO",
    date: "05.05.2024",
    finalSubscriptionDate: "01.05.2024",
  },
  {
    id: 3,
    title: "New Course Title",
    description: "This is a new course description.",
    places: 30,
    availablePlaces: 3,
    location: "New Course Location",
    format: "Online",
    hour: "10:00",
    language: "EN",
    date: "06.06.2025",
    finalSubscriptionDate: "01.06.2025",
  },
];

export default function Main(params) {
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
