import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styles from './Tab.module.css'
import Typography from '@mui/material/Typography';
import TabInfor from './TabInfor'
import TabHistory from './TabHistory'

import BasicGrid from '../grid/Grid'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabMui(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <div className={styles.fullTab}>
      <Box sx={{ width: '100%' }} >
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                
            >
                <Tab label="Thông tin hợp đồng" {...a11yProps(0)} />
                <Tab label="Lịch sử YCBT" {...a11yProps(1)} />
            </Tabs>
        </Box>
        
        <TabPanel value={value} index={0} >
          <BasicGrid/>
            {/* <TabInfor/>  */}
            {/* Tab Thông tin hợp Đồng */}
        </TabPanel>
        <TabPanel value={value} index={1}>
            <TabHistory/>
            {/* Tab Lịch sử YCBT */}
        </TabPanel>

      </Box>
      </div>
    );
}
