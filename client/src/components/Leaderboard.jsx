import React from 'react'
import { useTable } from 'react-table'

 function Leaderboard() {
   const data = React.useMemo(
     () => [
       {
         col1: '1',
         col2: 'World',
         col3: '1300',
         col4: '219',
       },
       {
         col1: '2',
         col2: 'rocks',
         col3: '1300',
         col4: '212',
       },
       {
         col1: '3',
         col2: 'you want',
         col3: '1300',
         col4: '216',
       },
     ],
     []
   )

   const columns = React.useMemo(
     () => [
       {
         Header: 'Rank',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Name',
         accessor: 'col2',
       },
       {
        Header: 'LP',
        accessor: 'col3',
      },
      {
        Header: 'Games',
        accessor: 'col4',
      },
     ],
     []
   )

   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })

   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default Leaderboard;