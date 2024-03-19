import "./CardCourse.css";

export default function CardCourse({
  id,
  title,
  description,
  places,
  availablePlaces,
  format,
  location,
  language,
  date,
  hour,
  finalSubscriptionDate,
}) {
  return (
    <div
      style={{
        boxShadow: `0px 0px 30px hsl(${
          (availablePlaces / places) * 100
        }, 100%, 50%)`,
      }}
      className="card-course"
    >
      <div className="card-header">
        <h2>{title}</h2>
        <p
          style={{
            color: `0px 0px 30px hsl(${
              (availablePlaces / places) * 100
            }, 100%, 50%)`,
          }}
        >
          {availablePlaces} locuri disponibile
        </p>
        <p>Data eveniment: {date}</p>
        <p>Ora: {hour}</p>
      </div>
      <div className="card-body-top">
        <p>Data limita inscrieri: {finalSubscriptionDate}</p>
        <p>Format: {format}</p>
        <p>Locatie: {location}</p>
        <p> Limba: {language}</p>
      </div>
      <div className="card-body-mid">
        <p>{description}</p>
      </div>
      <div className="card-body-bottom">
        <p>Numar total de locuri: {places}</p>
      </div>
      <div className="card-cta">
        <button>Înscrie-te</button>
      </div>
    </div>
  );
}
