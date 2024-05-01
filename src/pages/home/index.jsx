import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import SearchJobs from "../../components/searchJobs";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

function Home() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Search Jobs" />
        <Tab label="Applied Jobs" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <SearchJobs/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {/* Content for Applied Jobs tab */}
        <h2>Applied Jobs</h2>
        {/* Add your applied job content here */}
      </TabPanel>
    </Box>
  );
}

export default Home;
