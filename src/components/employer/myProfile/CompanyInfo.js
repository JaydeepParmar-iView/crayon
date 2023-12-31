import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import locale from "../../../i18n/locale";
import InputBox from "../../common/InputBox";
import { getIndustries } from "../../../redux/employer/empProfileSlice";
import { getCompanies } from "../../../redux/employer/empProfileSlice";
import { setAlert } from "../../../redux/configSlice";
import { ALERT_TYPE, ERROR_MSG } from "../../../utils/Constants";
import { useTheme } from "@emotion/react";
import AutoComplete from "../../common/AutoComplete";
import { setLoading } from "../../../redux/configSlice";
import { addId } from "../../../utils/Common";
import { isEmpty } from "lodash";

const PROFILE = {
  name: "",
  website: "",
  description: "",
  industry_ids: [],
};

export default function Info({ handleCompanyInfoData, profile2 }) {
  const i18n = locale.en;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(profile2);
  const [industries, setIndustries] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    handleCompanyInfoData(profile2);
  }, []);
  useEffect(() => {
    if (!isEmpty(profile2)) {
      setProfileData(profile2);
    }
  }, [profile2]);

  const getIndValue = () => {
    if (profileData.industry_ids?.length == 0) {
      return [];
    }
    return profileData.industry_ids?.map(
      (industry) => industries?.find((ind) => ind.id == industry) || industry
    );
  };
  const getCompValue = () => {
    if (!profileData.name) {
      return;
    }
    return profileData.name;
  };

  const handleInputChange = (event) => {
    const newProfileData = {
      ...profileData,
      [event.target.id]: event.target.value,
    };
    setProfileData(newProfileData);
    handleCompanyInfoData(newProfileData);
  };

  const handleMultipleAutoComplete = (event, newValue, id) => {
    let newProfileData = {};
    newProfileData = {
      ...profileData,
      [id]: newValue.map((val) => val?.inputValue || val?.id || val),
    };
    setProfileData(newProfileData);
    handleCompanyInfoData(newProfileData);
  };
  const handleCompVal = (event, newValue, id) => {
    let newProfileData = {};
    newProfileData = {
      ...profileData,
      [id]: newValue?.company_id || newValue?.inputValue,
    };
    console.log(newProfileData)
    setProfileData(newProfileData);
    handleCompanyInfoData(newProfileData);
  };
  const getAllData = async () => {
    try {
      dispatch(setLoading(true));
      const industry = await dispatch(getIndustries());
      setIndustries(industry.payload.data);
      const company = await dispatch(getCompanies());
      setCompanies(company.payload.data);
      // setIndustries(addId(industry.payload.data, 'industry_id', 'name'))
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(
        setAlert({
          show: true,
          type: ALERT_TYPE.ERROR,
          msg: ERROR_MSG,
        })
      );
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ width: "47%" }}>
          <Typography sx={{ ml: 2, marginBottom: "4px" }}>
            {i18n["empMyProfile.companyName"]}
          </Typography>
          {/* <InputBox placeholder={i18n['empMyProfile.companyNamePlace']} value={profileData.name} id='name' onChange={handleInputChange} /> */}
          <AutoComplete
            id="company_name"
            // value={getCompValue()}
            value={
                companies?.find(
                  (title) => title.company_id == profileData?.company_name
                ) || profileData?.company_name
              }
            onChange={handleCompVal}
            sx={{ mb: 3 }}
            placeholder={i18n["empMyProfile.companyNamePlace"]}
            data={companies}
          ></AutoComplete>
        </Box>
        <Box sx={{ width: "47%" }}>
          <Typography sx={{ ml: 2, marginBottom: "4px" }}>
            {i18n["empMyProfile.companyWebsite"]}
          </Typography>
          <InputBox
            placeholder={i18n["empMyProfile.companyWebsitePlace"]}
            value={profileData.hyperlink}
            id="hyperlink"
            onChange={handleInputChange}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ width: "47%" }}>
          <Typography sx={{ ml: 2, marginBottom: "4px" }}>
            {i18n["empMyProfile.companyIndustry"]}
          </Typography>
          <AutoComplete
            multiple={true}
            id="industry_ids"
            value={getIndValue()}
            onChange={handleMultipleAutoComplete}
            sx={{ mb: 3 }}
            placeholder={i18n["myCV.preferredIndustries"]}
            data={industries}
          ></AutoComplete>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ ml: 2, marginBottom: "4px" }}>
            {i18n["empMyProfile.companyDescription"]}
          </Typography>
          <InputBox
            multiline={true}
            sx={{ height: "135px" }}
            placeholder={i18n["empMyProfile.companyDescriptionPlace"]}
            value={profileData.notes}
            id="notes"
            onChange={handleInputChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
