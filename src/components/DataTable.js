import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from "@mui/material";

const DataTable = ({ data, columns, actions }) => {

    useEffect(() => {
      console.log("actions",actions);
      console.log("columns",columns);
      console.log("data",data);
    
     
    })
    
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    const handlePageChangePage = (event, newPage) => {
        setPage(newPage)
    }
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0
    const visibleRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const fillterColumnsHeader=columns.filter(col => col.field!=='id')
    const fillterColumns=columns.filter(col => col.field!=='id')
    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Sıra No</TableCell>
                            {fillterColumnsHeader.map((column) => (                               
                               <TableCell key={column.field}>{column.headerName}</TableCell>
                            ))}
                            {actions && <TableCell align='left'>İşlemler</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row, index) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{page*rowsPerPage+index+1}</TableCell>
                                {fillterColumns.map((col) => (
                                    <TableCell key={col.field} align={col.align || 'left'}>
                                        {col.valueGetter ? col.valueGetter(row) : row[col.field]}
                                    </TableCell>
                                ))}
                                {actions && (
                                    <TableCell align='left'>{actions(row)}</TableCell>
                                )}
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={5} />
                            </TableRow>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component={"div"}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Sayfa Başına satır: "

            />
        </Paper>
    )
}

export default DataTable