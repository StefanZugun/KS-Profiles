import "./App.css";
import DataTable from "./components/Table";

const DUMMY_PROFILES = [
  {
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
      <DataTable />
    </>
  );
}

export default App;
