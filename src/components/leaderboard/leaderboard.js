import React from "react";
import "./leaderboard.css";
import {
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="heading">
        <h4>Leaderboard</h4>
        <FormControl variant="outlined" size="small">
          <Select value="english">
            <MenuItem value="english">Enlish</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Table className="table">
        <TableHead className="head">
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Best Score</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body">
          <TableRow>
            <TableCell
              align="center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1 <i className="fas fa-caret-up"></i>
            </TableCell>
            <TableCell className="name">patrick alves devano</TableCell>
            <TableCell align="center">98</TableCell>
            <TableCell align="center">2324</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              2<i className="fas fa-circle" style={{ fontSize: 7 }}></i>
            </TableCell>
            <TableCell className="name">Jeniffer Hudson</TableCell>
            <TableCell align="center">96</TableCell>
            <TableCell align="center">2310</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              3 <i className="fas fa-caret-down"></i>
            </TableCell>
            <TableCell className="name">Stevia Rownders</TableCell>
            <TableCell align="center">97</TableCell>
            <TableCell align="center">2305</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              4<i className="fas fa-circle" style={{ fontSize: 7 }}></i>
            </TableCell>
            <TableCell className="name">Sam Anderson</TableCell>
            <TableCell align="center">89</TableCell>
            <TableCell align="center">2119</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              16 <i className="fas fa-caret-up"></i>
            </TableCell>
            <TableCell className="name">Jorge Rodriguez</TableCell>
            <TableCell align="center">82</TableCell>
            <TableCell align="center">1998</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Leaderboard;
