import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  DeleteItemIcon,
  StatusIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './users.styles.css';
import { useMediaQuerySize } from '../../hooks/hooks';

function Users() {
  const [users, setUsers] = useState(true);
  const [teams, setTeams] = useState(false);

  const [usersList, setUsersList] = useState([
    { label: 'Yulia Lea' },
    { label: 'Zack Gao' },
  ]);

  const [teamsList, setTeamList] = useState([
    { label: 'Default Team' },
    { label: 'Test Team' },
  ]);
  const date = new Date().toString();

  const [teamsRow, setTeamsRow] = useState([
    {
      id: 1,
      name: 'Team One',
      description: 'Team One Description',
      members: 2,
    },
    {
      id: 2,
      name: 'Team Two',
      description: 'Team Two Description',
      members: 4,
    },
  ]);
  const [teamsColumns, setTeamsColumns] = useState([
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'members',
      headerName: 'Members',
      width: 250,
      editable: true,
    },
  ]);

  const [usersRow, setUsersRow] = useState([
    {
      id: 1,
      fullName: 'Zack Gao',
      status: true,
      email: 'zack@gmail.com',
      team: 'team',
      creationDate: date,
      access: 'Allowed',
    },
    {
      id: 2,
      fullName: 'Yulia',
      status: false,
      email: 'yulia@gmail.com',
      team: 'team',
      creationDate: date,
      access: 'Denied',
    },
  ]);

  const [usersColumns, setUsersColumns] = useState([
    { field: 'fullName', headerName: 'Full Name', width: 250 },
    { field: 'status', headerName: 'Status', width: 250 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    { field: 'team', headerName: 'Team', width: 250 },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
    {
      field: 'access',
      headerName: 'Access',
      width: 250,
      editable: true,
    },
  ]);

  const handleUsersChange = () => {
    setUsers(true);
    setTeams(false);
  };

  const handleTeamsChange = () => {
    setTeams(true);
    setUsers(false);
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
      <div className='label-wrapper-users'>
        <Label
          className='label-users'
          onClick={handleUsersChange}
          label='Users'
        />
        <Label
          className='label-users'
          onClick={handleTeamsChange}
          label='Teams'
        />
      </div>
      {/* 4th */}
      {users && (
        <>
          <div className='parent-permissions'>
            <div className='div1-buttons-permissions'>
              <div className='button-list-webHook'>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Add' />
                </div>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Remove' />
                </div>
              </div>
            </div>
            <div className='div2-searchInput-permissions'>
              <SearchInput
                options={usersList}
                label='Filter By Users'
                className='searchInput-permissions'
                sx={{ width: screenSizes }}
              />
            </div>
          </div>
          <Table rows={usersRow} columns={usersColumns} pageSize={7} />
        </>
      )}

      {teams && (
        <>
          <div className='parent-permissions'>
            <div className='div1-buttons-permissions'>
              <div className='button-list-webHook'>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Add' />
                </div>
                <div className='button-wrapper-permissions'>
                  <Button className='button-permissions' name='Remove' />
                </div>
              </div>
            </div>
            <div className='div2-searchInput-permissions'>
              <SearchInput
                options={teamsList}
                label='Filter By Teams'
                className='searchInput-permissions'
                sx={{ width: screenSizes }}
              />
            </div>
          </div>
          <Table rows={teamsRow} columns={teamsColumns} pageSize={7} />
        </>
      )}
    </>
  );
}

export default Users;
