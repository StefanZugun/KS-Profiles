import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "skills", headerName: "Skills", width: 130 },
    {
      field: "xp",
      headerName: "XP",
      type: "number",
      width: 90,
    },
    { field: "position", headerName: "Position", width: 130 },
    { field: "availability", headerName: "Availability", width: 130 },
    { field: "interests", headerName: "Interests", width: 130 },
    { field: "languages", headerName: "Languages", width: 130 },
  ];

  const rows = props.profile;

  //   const rows = [
  //     {
  //       id: 1,
  //       name: "Snow",
  //       location: "Romania",
  //       skills: "Python",
  //       xp: 10,
  //       position: "Junior Developer",
  //       availability: "now",
  //       interests: "JavaScript",
  //       languages: "Swedish",
  //     },
  //   ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
