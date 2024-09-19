import { useState, useEffect } from "react";
import UsersSurveyApi from "api/users";

export const useUsersSurveyData = () => {
  const [surveyData, setSurveyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const project_id = "aBjuSQpEPKeu45Mn7hQVgX";
        const token = "bb62e0ec2c8eaaaa2e760fd2c2723f0d5e7d7eb3";

        const data = await UsersSurveyApi.GetUsersSurvey({ project_id, token });
        setSurveyData(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, []);

  
  const columnsNames = [
    "_id", 
    "formhub/uuid",
    "start",
    "end",
    "deviceid",
    "today",
    "name_employee",
    "consent",
    "enumerator_comments",
    "__version__",
    "meta/instanceID",
    "_xform_id_string",
    "_uuid",
    "_attachments",
    "_status",
    "_geolocation",
    'details'
  ];
    const getRemainingData = (row) => {
    const filteredData = Object.keys(row).reduce((acc, key) => {
      if (!columnsNames.includes(key)) {
        acc[key] = row[key];
      }
      return acc;
    }, {});

    return filteredData;
  };


  return { surveyData, loading, error, columnsNames, getRemainingData };
};
