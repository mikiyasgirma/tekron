import { Box, Typography } from '@material-ui/core';
import React from 'react';
// import PropTypes from 'prop-types';

export default  function TabPanel(props) {
    const { children, value, index, message, ...other  } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>

        {value === index && (
          <Box p={4}>
            <div>{message}</div>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  
  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.any.isRequired,
  //   value: PropTypes.any.isRequired,
  // };