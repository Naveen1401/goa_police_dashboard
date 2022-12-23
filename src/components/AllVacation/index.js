import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const AllVacations= () => {

  const vacations = useSelector((state) => state.vacation.vacation);

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Vacation ID</StyledTableCell>
            <StyledTableCell align="right">Phone No.</StyledTableCell>
            <StyledTableCell align="right">Departure Date</StyledTableCell>
            <StyledTableCell align="right">Return Date</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vacations.map((row) => (
            <StyledTableRow key={row.vacationID}>
              <StyledTableCell component="th" scope="row">
                {row.vacationID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone_number}</StyledTableCell>
              <StyledTableCell align="right">{row.departure_date.toDate().toLocaleDateString()}</StyledTableCell>
              <StyledTableCell align="right">{row.return_date.toDate().toLocaleDateString()}</StyledTableCell>
              <StyledTableCell align="right">[{row.address.latitude},{row.address.longitude}]</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default AllVacations

