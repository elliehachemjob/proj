import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './scrollableTab.styles.css';

function ScrollableTab(props) {
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ maxWidth: 1400, bgcolor: 'background.paper' }}>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        {props.tabList.map((item) => {
          return (
            <Tab
              className='tabs-scrollableTab'
              key={item.id}
              label={item.label}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}

export default ScrollableTab;
