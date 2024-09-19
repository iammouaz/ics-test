/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';

import React from "react";
import { useUsersSurveyData } from "views/admin/usersSurvey/hooks/useUsersSurveyData";
import DataTable from "../dataTables/components/DynamicTable";
import { query } from "./queries/getFilms";

export default function UsersSurvey() {

  const { surveyData, loading, error, columnsNames,getRemainingData } = useUsersSurveyData()

  // Here I will add the graph query for ref
  const {data: filmsData} = useQuery(query);

  // you can see the films on the console
  console.log(filmsData)

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <DataTable
          columns={columnsNames}
          data={surveyData}
          getRemainingData={getRemainingData}
        />
      </SimpleGrid>
    </Box>
  );
}
