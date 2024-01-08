import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React from "react";
import { IRequisitionDetails } from "@src/interface/forms";
import { urgencyOptions,genderOptions } from "./constants";


const DataCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Box mt="1rem" bg="white" width="100%" p="16px 24px" borderRadius="10px">
      <Text fontSize="1rem" as="h6" fontWeight="600" mb="12px">
        {title}
      </Text>
      <Grid gap="16px" templateColumns="1fr 1fr">
        {children}
      </Grid>
    </Box>
  );
};

const KeyValue: React.FC<{
  title: string;
  value?: string;
}> = ({ title, value }) => {
  return (
    <Box w="100%">
      <Text fontSize=".875rem" color="gray" mb="8px">
        {title}
      </Text>
      <Text fontSize=".875rem" mb="8px">
        {value || "-"}
      </Text>
    </Box>
  );
};
const getUrgencyLabel =(value:string): string  => {
  const option = urgencyOptions.find((option) => option.value === value);
  return option ? option.label : "-";
};
const getGender =(value:string): string  => {
  const option = genderOptions.find((option) => option.value === value);
  return option ? option.label : "-";
};
interface PreviewCardProps {
  formValues: IRequisitionDetails;
}

const PreviewCard: React.FC<PreviewCardProps> = ({formValues}) => {
  return (
    <Box p="1rem">
      <Box borderRadius="10px" bgColor="gray.100" height="fit-content">
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontStyle="italic" m="0.4rem 2rem">
            Draft
          </Text>
          <Box
            bgColor="#EE5353"
            color="white"
            p="0.4rem 2rem"
            borderTopRightRadius="10px"
          >
            <Text fontStyle="italic">Preview</Text>
          </Box>
        </Flex>
        <Box w="100%" p="16px 24px">
          <Box
            width="100%"
            bgColor="#432B7D"
            color="white"
            p="1rem"
            borderRadius="10px"
          >
            <Flex
              fontFamily="Poppins"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="0.9rem" fontWeight="500">{formValues.requisitionTitle}</Text>
              <Flex justifyContent="space-around" alignItems="center">
                <Text fontSize="0.8rem" mr="0.4rem" fontWeight="200" as="p">
                  OPENINGS {formValues.noOfOpenings}
                </Text>
                <Text fontSize="1rem" fontWeight="bold" as="span"></Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box maxH="50rem" overflowY="auto" px="24px" pb="24px">
          <DataCard title="Requisition Details">
            <KeyValue title="Urgency" value={getUrgencyLabel(formValues.urgency)} />
            <KeyValue title="Gender" value={getGender(formValues.gender)} />
          </DataCard>
          <DataCard title="Job Detail">
            <KeyValue title="Job Title" value="" />
            <KeyValue title="Job Details" value="" />
            <KeyValue title="Job Location" value="" />
          </DataCard>
          <DataCard title="Interview Settings">
            <KeyValue title="Interview Duration" value="" />
            <KeyValue title="Interview Language" value="" />
            <KeyValue title="Interview Mode" value="" />
          </DataCard>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewCard;
