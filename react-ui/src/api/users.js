import { axiosUsers } from "api";


class UsersSurveyApi {

  static GetUsersSurvey = (data) => {
    return axiosUsers.post(`fetch-data/`, data);
  };

}

export default UsersSurveyApi;
