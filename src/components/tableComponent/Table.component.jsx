import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function Table(props) {
  return (
    <div
      style={
        props.style
          ? props.style
          : {
              height: 600,
              width: '99.5%',
              marginLeft: 5,
            }
      }
      className={props.className}
    >
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={props.pageSize}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: props.columnField,
                  operatorValue: props.operatorValue,
                  value: props.value,
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}

export default Table;
