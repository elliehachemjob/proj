import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  EditItemIcon,
  DeleteItemIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './permissions.styles.css';
import { useMediaQuerySize } from '../../hooks/hooks';

function Permissions() {
  const [roles, setRoles] = useState(true);
  const [users, setUsers] = useState(false);

  const [rolesList, setRoleList] = useState([
    { label: 'Admin Role' },
    { label: 'Test' },
  ]);

  const date = new Date().toString();

  const [rolesRow, setRolesRow] = useState([
    {
      id: 1,
      name: 'Admin Role',
      description: 'Administrator Role',
      creationDate: date,
    },
    {
      id: 2,
      name: 'Test',
      description: 'Test Role',
      creationDate: date,
    },
  ]);
  const [rolesColumns, setRolesColumns] = useState([
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
  ]);
  const [userRow, setUserRow] = useState([
    {
      id: 1,
      fullName: 'Michael',
      email: 'Michael@gmail.com',
      creationDate: date,
    },
    {
      id: 2,
      fullName: 'Paulo',
      email: 'Paulo@gmail.com',
      creationDate: date,
    },
  ]);

  const [usersColumns, setUsersColumns] = useState([
    { field: 'fullName', headerName: 'Full Name', width: 250 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
  ]);

  const handleRoleChange = () => {
    setRoles(true);
    setUsers(false);
  };

  const handleUsersChange = () => {
    setUsers(true);
    setRoles(false);
  };

  let mediumScreen = useMediaQuerySize('(max-width:755px)');
  let smallScreen = useMediaQuerySize('(max-width:500px)');

  const screenSizes = () => {
    if (smallScreen) {
      return 80;
    }
    if (mediumScreen) {
      return 150;
    } else {
      return 300;
    }
  };

  return (
    <>
      {/* 1st */}
      <div className='label-wrapper-permissions'>
        <Label
          onClick={handleRoleChange}
          label='Roles'
          className='label-permissions'
        />
        <Label
          onClick={handleUsersChange}
          label='Users'
          className='label-permissions'
        />
      </div>
      {/* 3rd */}
      {/* 4th */}
      {roles && (
        <>
          <div className='parent-permissions'>
            <div className='div1-buttons-permissions'>
              <div className='button-list-webHook'>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Add' />
                </div>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Edit' />
                </div>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Remove' />
                </div>
              </div>
            </div>
            <div className='div2-searchInput-permissions'>
              <SearchInput
                options={rolesList}
                label='Filter By Roles'
                className='searchInput-permissions'
                sx={{ width: screenSizes }}
              />
            </div>
          </div>
          <Table
            rows={userRow}
            columns={usersColumns}
            pageSize={7}
            className='table-permissions'
          />
        </>
      )}
      {users && (
        <>
          <div className='parent-searchInput-permissions'>
            <div className='div1-searchInput-permissions'>
              <SearchInput
                options={rolesList}
                label='Filter By Users'
                className='searchInput-permissions'
              />
            </div>
          </div>

          <Table
            rows={rolesRow}
            columns={rolesColumns}
            pageSize={7}
            className='table-permissions'
          />
        </>
      )}
    </>
  );
}

export default Permissions;
