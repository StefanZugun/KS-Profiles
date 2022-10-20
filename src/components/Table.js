import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

export default function DataTable(props) {
  // const [idList, setIdList] = useState([]);
  let idList = [];
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

  const buttonHandler = () => {
    for (const index of idList) {
      console.log(rows[index - 1]);
    }
  };

  const selectionHandler = (id) => {
    idList = id;
    console.log(idList);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Button variant="contained" sx={{ m: 1 }} onClick={buttonHandler}>
        Create the Team!
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection={true}
        onSelectionModelChange={selectionHandler}
      />
    </div>
  );
}
