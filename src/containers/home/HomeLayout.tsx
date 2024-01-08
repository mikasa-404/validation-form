import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
  Button,
} from "@chakra-ui/react";
import React from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { useState } from "react";
import { useData } from "./DataProvider";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const context = useData();
  if(!context) return null;
  const { state, setState } = context;
  console.log(state)
  const [formValues, setFormValues] = useState({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (newIndex: number) => {
    setTabIndex(newIndex);
  };  
  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs isLazy onChange={(index)=>setTabIndex(index)} index={tabIndex}>
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm setFormValues={setFormValues} 
                handleTabChange={handleTabChange}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTabChange={handleTabChange}/>
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm />
              </TabPanel>
            </TabPanels>
            <DisplayCard formValues={formValues}/>
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
