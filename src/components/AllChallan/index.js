import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { collection, doc, updateDoc } from 'firebase/firestore';
import {db} from "../../firebase"
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

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

const AllChallan = () => {

  const challan = useSelector((state) => state.challan.challan);
  // [...challan].sort((a,b)=>a.challan_id>b.challan_id?1:-1)


  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  console.log(challan,"----");

  const updateChallan = async(id, curStatus)=>{
    console.log(id,curStatus);
    const challanDoc = doc(db,"challan", id);
    const newFields = {status: curStatus? false:true} //not able to fetch the data after updating it.
    console.log(newFields);
    await updateDoc(challanDoc, newFields)
  }
  // const [data, setdata] = useState(challan);
  // const [order, setorder] = useState("asc");
  // const sorting = (col) =>{
  //   if(order === "asc"){
  //     const sortedData = [...challan].sort((a,b)=>
  //       a[col]>b[col]?1:-1
  //     )
  //     setdata(sortedData);
  //     setorder("dec");
  //   }
  //   if (order === "dec") {
  //     const sortedData = [...challan].sort((a, b) => 
  //       a[col] < b[col] ? 1 : -1
  //     )
  //     setdata(sortedData);
  //     setorder("asc");
  //   }
  // }
  console.log(challan);

  return (
    <div>
    <TableContainer component={Paper}>
      <Table id = "challan-table" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Challan ID</StyledTableCell>
            <StyledTableCell align="center">Offence</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...challan].sort((a,b)=>a.date<b.date?1:-1).map((row) => (
            <StyledTableRow key={row.challan_id}>
              <StyledTableCell component="th" scope="row">
                {row.challan_id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.offence}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.date.toDate().toLocaleDateString()}</StyledTableCell>
              <StyledTableCell align="right">{row.status?<Checkbox defaultChecked onChange={()=>{updateChallan(row.id, row.status)}}/>:<Checkbox onChange={()=>{updateChallan(row.id, row.status)}} />}</StyledTableCell>
              <StyledTableCell align="right"><button>Send Email</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* <ReactHtmlTableToExcel className = "export-btn" table = "challan-table" filename = "Challan-cheet" sheet = "Sheet" buttonText = "Export Challan Sheet"/> */}
    </div>
  );
}

export default AllChallan





// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function Checkboxes() {
//   return (
//     <div>
//       <Checkbox {...label} defaultChecked />
//       <Checkbox {...label} />
//       <Checkbox {...label} disabled />
//       <Checkbox {...label} disabled checked />
//     </div>
//   );
// }
