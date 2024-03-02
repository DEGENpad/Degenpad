import React, { useState } from 'react';
import {useReactTable,getCoreRowModel,getPaginationRowModel,getSortedRowModel,createColumnHelper,getFilteredRowModel,  flexRender, ColumnDef} from '@tanstack/react-table';
import { User } from '../../type';
import Loading from './../../images/mark.gif'
  
interface TableProps {
    columns:ColumnDef<any,string>[],
    isLoading:boolean
    data:any[]
}
  
  const Table = ({columns,isLoading,data}:TableProps) => {
    const columnHelper = createColumnHelper<User>();
    const memoizedColumns = React.useMemo(() => columns, [columns]);
    // const memoizedData = React.useMemo(() => data, [data]);

    
      const table = useReactTable({
        data,
        columns:memoizedColumns,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
      });

      if (isLoading) {
        return (
          <div
            className={`w-full min-h-[300px] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center`}
          >
            <div className="w-[80px] h-[80px]">
              <img
                src={Loading}
                alt="loading..."
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        );
      }
    
    return (
        <section className="max-w-[100%] overflow-auto scrollbar-thin">
        <table className="min-w-full">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ textAlign: 'center', padding: '12px 30px 12px 30px' }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr key={row.id} className="even:bg-gray-50/50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className=""
                      style={{
                        textAlign: 'center',
                        padding: '15px 30px 15px 30px',
                        borderBottom: '2px solid #EEF1F499',
                        minWidth: '100px',
                        width: 'fit-content',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    )
  }
  
  export default Table


    // const data :User[]=[
    //     {
    //       "firstName": "Tanner",
    //       "lastName": "Linsley",
    //       "age": 33,
    //       "visits": 100,
    //       "progress": 50,
    //       "status": "Married"
    //     },
    //     {
    //       "firstName": "Kevin",
    //       "lastName": "Vandy",
    //       "age": 27,
    //       "visits": 200,
    //       "progress": 100,
    //       "status": "Single"
    //     }
    //   ]
    //   const columns: ColumnDef<User>[] = [] //Pass User type as the generic TData type
//or
// const columnHelper = createColumnHelper<User>() //Pass User type as the generic TData type

    //   const columns= [ 
    //     columnHelper.accessor("firstName", {
    //         // id: "S.No",
    //         // cell: (info) => <span>{info.row.index + 1}</span>,
    //         header: "First Name",
    //       }),
    //     columnHelper.accessor("lastName", {
    //         id: "S.No",
    //         cell: ({row,column}) => <span>{row.original.progress}</span>,
    //         header: "Last Name",
    //       }),
    // ]

//   + {
//     +   accessorKey: 'firstName',
//     +   header: 'First Name',
//     + },
//     + {
//     +   accessorFn: row => row.lastName,
//     +   header: () => <span>Last Name</span>,
//     + },