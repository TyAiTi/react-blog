import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

// import TabHistory from './TabHistory'
// import styles from './Tab.module.css'
import TabHistory from '../TabHistory/TabHistory';
// import BasicGrid from '../grid/Grid'
import TabInfor from '../TabInfor/TabInfor';
const useStyles = makeStyles( (theme)=>({ 
  root:{
    backgroundColor: '#FFFFFF'
  }
}))

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
    const classes = useStyles()
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <div className={classes.root}>
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
          <TabInfor/>
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
