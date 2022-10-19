import "./App.css";
import DataTable from "./components/Table";

const DUMMY_PROFILES = [
  {
    id: 1,
    name: "Stefan Zugun",
    location: "Romania",
    skills: ["JavaScript", "React"],
    xp: 10,
    position: "Senior Developer",
    interests: ["Full Stack"],
    availability: "now",
    languages: ["romanian", "english"],
  },
  {
    id: 2,
    name: "Andre Drouge",
    location: "Sweden",
    skills: ["JavaScript", "React", "CSS"],
    xp: 1,
    position: "Junior Developer",
    interests: ["Dota"],
    availability: "July",
    languages: ["swedish", "english"],
  },
  {
    id: 3,
    name: "Cristian Alupoaie",
    location: "Romania",
    skills: ["Python"],
    xp: 5,
    position: "Mid-level Developer",
    interests: ["Fishing"],
    availability: "December",
    languages: ["romanian"],
  },
];

function App() {
  return (
    <>
      <DataTable profile={DUMMY_PROFILES} />
    </>
  );
}

export default App;
