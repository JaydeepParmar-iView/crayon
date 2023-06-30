import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import locale from "../../../i18n/locale";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import SmallButton from "../../common/SmallButton";
import profile from "../../../assets/profile.svg";
import history from "../../../assets/history.svg";
import chat from "../../../assets/chat.svg";
import match from "../../../assets/match.svg";
import eye from "../../../assets/eye.svg";
import send from "../../../assets/send.svg";
import linkedin from "../../../assets/linkedin.svg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Paper } from "@mui/material";
import RadialChart from "../../common/RadialChart";
import { CARD_RIGHT_BUTTON_GROUP } from "../../../utils/Constants";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ManIcon from "@mui/icons-material/Man";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SingleRadialChart from "../../common/SingleRadialChart";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const label = "grit score";
const labelExp = "experience";
const labelHon = "honours";
const labelSal = "salary";
const labelNoti = "notice";

const StyledHR = styled(Box)(({ theme }) => ({
  borderRight: "1px solid rgba(0, 0, 0, 0.3)",
  width: "0px",
  height: "10px",
  marginRight: "8px",
}));
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: "4px",
  borderRadius: "10px",
  position: "unset",
  "& .MuiAccordionSummary-root": {
    // alignItems: 'start'
    flexDirection: "row-reverse",
    // marginBottom: '4px'
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "0 0 8px 0",
  },
  "& .MuiAccordionSummary-content": {
    flexDirection: "column",
    margin: 0,
    ".summaryBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // marginRight: '8px',
      "& .MuiButtonBase-root": {
        letterSpacing: "-0.02em",
        // fontSize: 10,
        // fontWeight: 700,
        // minWidth: 28,
        // padding: '2px 8px',
        // borderRadius: 3,
        // height: '20px',
        // boxShadow: 'none'
      },
    },
    ".summaryBoxContent": {
      display: "flex",
      alignItems: "center",
    },
    ".profileAvatar": {
      height: 20,
      width: 20,
      borderRadius: 6,
    },

    "& .MuiTypography-root": {
      // fontWeight: 700,
      // fontSize: '20px',
    },
    "& .MuiButtonBase-root": {
      // padding: '2px 8px',
      // fontSize: 10,
      // fontWeight: 700,
      // minWidth: 30,
      // boxShadow: 'none',
      // borderRadius: 2
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.white,
    background: theme.palette.redButton.main,
    width: 23.42,
    height: 23.71,
    borderRadius: 25,
    marginLeft: "-5px",
    marginRight: "20px",
    justifyContent: "center",
    alignItems: "center",

    // marginRight: '32px',
    // position: 'absolute',
    // right: '40px',
    // top: '12px',
    "& .MuiSvgIcon-root": {
      fontSize: "1.4rem",
    },
  },
  "& .MuiCollapse-root": {
    "& .MuiAccordionDetails-root": {
      display: "flex",
      paddingTop: 0,
      // padding: 0,
      "& .MuiButtonBase-root": {
        // padding: '0 8px',
        // fontSize: 10,
        // fontWeight: 700,
        // minWidth: 30,
        // padding: '1px 4px',
        // borderRadius: 3
      },
      ".contentBoxLeft": {
        width: "60%",
        // display: 'flex',
        // justifyContent: 'space-between',
        "& .MuiButtonBase-root": {
          padding: "0 8px",
          // fontSize: 10,
          // fontWeight: 700,
          // minWidth: 10,
          // padding: '1px 4px',
          // borderRadius: 3
        },
        // '& .MuiSvgIcon-root': {
        //     width: '20px'
        // }
      },
      ".contentBoxRight": {
        width: "37%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiButtonBase-root": {
          padding: "0 8px",
          // fontSize: 10,
          // fontWeight: 700,
          // minWidth: 10,
          // padding: '1px 4px',
          // borderRadius: 3
        },
        ".title": {
          fontSize: "12px",
          fontWeight: 700,
        },
        ".subTitle": {
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
  },
  "& .MuiButtonBase-root": {
    // boxShadow: 'none',
    // padding: '0 16px'
  },
}));

const BlueSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.blueButton400.main,
    "&:hover": {
      backgroundColor: alpha(
        theme.palette.blueButton400.main,
        theme.palette.action.hoverOpacity
      ),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.blueButton400.main,
  },
  "& .MuiSwitch-track": {
    marginTop: "-9px",
  },
}));
const StyledTextField = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  margin: "8px 0",
  paddingRight: "8px",
  // paddingLeft: '16px',
  // '& .MuiInputLabel-outlined': {
  // marginLeft: '4px',
  // color: theme.palette.placeholder
  // opacity: 0.75
  // },
  "& .MuiOutlinedInput-notchedOutline": {
    // background: theme.palette.white,
    borderColor: theme.palette.grayBorder,
    borderRadius: "10px",
  },
}));
function valuetext(value) {
  return `${value}°C`;
}
const labels = ["Salary", "Experience", "Q Level"];

export default function AllTalentCard({ jobContent }) {
  const {
    id,
    job,
    description,
    count,
    status,
    chips,
    address,
    salary,
    experience,
    workType,
    jobType,
    date,
    days,
  } = jobContent;
  const i18n = locale.en;
  const theme = useTheme();

  const [gritScoreData, setGritScoreData] = useState([88]);
  const [expScoreData, setExpScoreData] = useState([8]);
  const [honScoreData, setHonScoreData] = useState([4]);
  const [salScoreData, setSalScoreData] = useState(["R45,000"]);
  const [notiScoreData, setNotiScoreData] = useState(["30 days"]);
  const [isHovered, setIsHovered] = useState(false);
  const [colorKey, setColorKey] = useState("color");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHoverEnter = () => {
    setColorKey("hover");
  };
  const handleHoverLeave = () => {
    setColorKey("color");
  };
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box className="summaryBox" sx={{ mb: "-8px" }}>
          <Box className="summaryBoxContent">
            <SmallButton
              color="orangeButton"
              borderRadius="5px"
              label={id}
              mr={1}
              fontSize={10}
              fontWeight={700}
              alignItems="end"
            ></SmallButton>
            <Box
              component="img"
              className="profileAvatar"
              alt="crayon logo"
              src={profile}
              sx={{
                mr: 1,
              }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                mr: 1,
              }}
            >
              {job}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {description}
            </Typography>
            <IconButton sx={{ paddingRight: "0 !important" }}>
              <ManIcon color="blueButton400"></ManIcon>
            </IconButton>
            <SmallButton
              color="black100"
              borderRadius="5px"
              label="43 yrs"
              opacity="0.75"
              fontSize={10}
              height={18}
              padding="0 4px"
              alignItems="end"
            ></SmallButton>
          </Box>

          <Box className="summaryBoxContent">
            <SmallButton
              color="black100"
              borderRadius="5px"
              label={date}
              mr="8px"
              height={18}
              opacity="0.5"
            ></SmallButton>
            <SmallButton
              color="black100"
              borderRadius="5px"
              label={days}
              mr="8px"
              height={18}
              opacity="0.5"
            ></SmallButton>
            {chips.map((chip, index) => (
              <SmallButton
                color={chip.color}
                key={index}
                label={chip.label}
                mr="8px"
              ></SmallButton>
            ))}
            <IconButton
              aria-label="edit"
              color="blueButton400"
              sx={{
                padding: "0 !important",
                minWidth: "18px !important",
                "& .MuiSvgIcon-root": {
                  width: "18px",
                },
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box className="summaryBox">
          <Box className="summaryBoxContent">
            <IconButton
              color="redButton"
              aria-label="search job"
              component="button"
              sx={{
                padding: "0 !important",
                minWidth: "10px !important",
                marginRight: "8px",
                ".MuiSvgIcon-root": {
                  width: "15px",
                  height: "15px",
                },
              }}
            >
              <PlaceIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mr: 1,
              }}
            >
              {address}
            </Typography>
            <StyledHR></StyledHR>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mr: 1,
              }}
            >
              {salary}
            </Typography>
            <StyledHR></StyledHR>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mr: 1,
              }}
            >
              {experience}
            </Typography>
            <StyledHR></StyledHR>
            <SmallButton
              color="blueButton700"
              label={jobType}
              mr="4px"
              fontSize="12px"
            ></SmallButton>
            <SmallButton
              color="blueButton700"
              label={workType}
              mr="8px"
              fontSize="12px"
            ></SmallButton>
            {/* <SmallButton color="blueButton400" label={address} mr="8px"></SmallButton>
                        <SmallButton color="blueButton400" label={salary} mr="8px"></SmallButton>
                        <SmallButton color="blueButton400" label={experience} mr="8px"></SmallButton>
                        <SmallButton color="redButton" label={workType} mr="8px"></SmallButton>
                        <SmallButton color="redButton" label={jobType} mr="8px"></SmallButton> */}
          </Box>

          <Box className="summaryBoxContent">
            <SmallButton
              color="redButton"
              startIcon={
                <Box component="img" className="eye" alt="eye logo" src={eye} />
              }
              startIconMargin="4px"
              height={24}
              fontWeight={700}
              label={i18n["allTalent.cv"]}
              mr="8px"
              borderRadius="25px"
            ></SmallButton>
            <SmallButton
              color="redButton"
              startIcon={
                <Box component="img" className="eye" alt="eye logo" src={eye} />
              }
              startIconMargin="4px"
              height={24}
              fontWeight={700}
              label={i18n["allTalent.resume"]}
              mr="8px"
              borderRadius="25px"
            ></SmallButton>
            <SmallButton
              color="redButton"
              startIcon={
                <Box component="img" className="eye" alt="eye logo" src={eye} />
              }
              startIconMargin="4px"
              height={24}
              fontWeight={700}
              label={i18n["allTalent.portfolio"]}
              borderRadius="25px"
            ></SmallButton>
            <IconButton>
              <PlayCircleFilledIcon color="redButton" />
            </IconButton>
            <SmallButton
              color="lightGreenButton300"
              endIcon={<KeyboardArrowDownIcon />}
              height={24}
              fontWeight={700}
              label={i18n["allTalent.active"]}
              borderRadius="25px"
              mr="8px"
            ></SmallButton>

            <IconButton
              aria-label="edit"
              color="grayButton"
              sx={{
                padding: "0 !important",
                minWidth: "18px !important",
                "& .MuiSvgIcon-root": {
                  width: "18px",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="edit"
              color="grayButton"
              sx={{
                mr: "4px",
                padding: "0 !important",
                minWidth: "18px !important",
                "& .MuiSvgIcon-root": {
                  width: "18px",
                },
              }}
            >
              <EmailIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mr: 1,
                opacity: 0.75,
                letterSpacing: "0.75px",
              }}
            >
              mickey.mouse@gmail.com
            </Typography>
            <StyledHR></StyledHR>
            <IconButton
              aria-label="edit"
              color="grayButton"
              sx={{
                mr: "4px",
                padding: "0 !important",
                minWidth: "18px !important",
                "& .MuiSvgIcon-root": {
                  width: "18px",
                },
              }}
            >
              <CallIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mr: 1,
                opacity: 0.75,
                letterSpacing: "0.75px",
              }}
            >
              +27 821234567
            </Typography>
            <StyledHR></StyledHR>
            <Box
              component="img"
              className="profileAvatar"
              alt="crayon logo"
              src={linkedin}
              sx={{
                mr: 1,
                width: "20px",
                height: "20px",
              }}
            />
            <StyledHR></StyledHR>
            <SmallButton
              color="grayButton300"
              textColor={theme.palette.black100.main}
              fontWeight={400}
              letterSpacing="-0.02em"
              borderRadius="5px"
              label="referred by: n/a"
              height={18}
              padding="0 4px"
              mr={1}
            ></SmallButton>
            <StyledHR></StyledHR>
            <SmallButton
              color="grayButton300"
              textColor={theme.palette.black100.main}
              fontWeight={400}
              letterSpacing="-0.02em"
              borderRadius="5px"
              label="referrals: 0"
              height={18}
              padding="0 4px"
            ></SmallButton>
          </Box>

          {/* <Box> */}
          <SmallButton
            color="orangeButton"
            borderRadius="5px"
            label="database(s)"
          ></SmallButton>
          {/* </Box> */}
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box className="contentBoxLeft">
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                mr: 1,
              }}
            >
              I am a kind, compassionate and hard-working person who finds
              meaning in helping others, is passionate about education (hence my
              3 degrees!) and cares about the planet. I love writing, building
              communities and have a knack for...
            </Typography>
            <Box sx={{ mt: 1, mb: 2 }}>
              <SmallButton
                color="orangeButton"
                letterSpacing="-0.02em"
                borderRadius="5px"
                label="graphic design"
                mr="8px"
              ></SmallButton>
              <SmallButton
                color="orangeButton"
                letterSpacing="-0.02em"
                borderRadius="5px"
                label="Adobe Illustrator"
                mr="8px"
              ></SmallButton>
              <SmallButton
                color="orangeButton"
                letterSpacing="-0.02em"
                borderRadius="5px"
                label="animation"
                mr="8px"
              ></SmallButton>
              <SmallButton
                color="orangeButton"
                letterSpacing="-0.02em"
                borderRadius="5px"
                label="motion graphics"
                mr="8px"
              ></SmallButton>
              <SmallButton
                color="orangeButton"
                letterSpacing="-0.02em"
                borderRadius="5px"
                label="sketching"
                mr="8px"
              ></SmallButton>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.tags"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="#socialmedia"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="#content"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="#design"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.industries"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton600"
                  borderRadius="5px"
                  label="finance"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton600"
                  borderRadius="5px"
                  label="tech"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton600"
                  borderRadius="5px"
                  label="real estate"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.tools"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Adobe"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Microsoft Word"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.qualifications"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Bachelor of Arts"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.institutions"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Stellenbosch University"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.associations"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="SAICA"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.languages"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="English"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Afrikaans"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Spanish"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.nationality"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="South African"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="British"
                  mr="4px"
                ></SmallButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.school"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="Rhenish Girls High School"
                  mr="4px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="2001"
                  mr="4px"
                ></SmallButton>
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  mr: 1,
                }}
              >
                {i18n["allTalent.personality"]}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginLeft: "-16px" }}>
                  <SingleRadialChart
                    hollow="55%"
                    labelsData={label}
                    series={gritScoreData}
                    width={86}
                    nameSize="9px"
                    valueSize="14px"
                    nameOffsetY="11"
                    valueOffsetY="-17"
                    color={theme.palette.lightGreenButton300.main}
                    index={1}
                    isHovered={isHovered}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      mb: 1,
                    }}
                  >
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      height={25}
                      color="purpleButton"
                      borderRadius="5px"
                      label={i18n["allTalent.challenger"]}
                      mr="4px"
                    ></SmallButton>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      height={25}
                      color="brownButton"
                      borderRadius="5px"
                      label={i18n["allTalent.collaborator"]}
                      mr="4px"
                    ></SmallButton>
                  </Box>
                  <Box>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      textColor={theme.palette.black100.main}
                      height={25}
                      color="grayButton200"
                      borderRadius="5px"
                      label={i18n["allTalent.detailed"]}
                      mr="4px"
                    ></SmallButton>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      textColor={theme.palette.black100.main}
                      height={25}
                      color="grayButton200"
                      borderRadius="5px"
                      label={i18n["allTalent.adaptable"]}
                      mr="4px"
                    ></SmallButton>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      textColor={theme.palette.black100.main}
                      height={25}
                      color="grayButton200"
                      borderRadius="5px"
                      label={i18n["allTalent.organised"]}
                      mr="4px"
                    ></SmallButton>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      textColor={theme.palette.black100.main}
                      height={25}
                      color="grayButton200"
                      borderRadius="5px"
                      label={i18n["allTalent.proactive"]}
                      mr="4px"
                    ></SmallButton>
                    <SmallButton
                      fontWeight={500}
                      minWidth="10px"
                      textColor={theme.palette.black100.main}
                      height={25}
                      color="grayButton200"
                      borderRadius="5px"
                      label={i18n["allTalent.thrivesOnStress"]}
                      mr="4px"
                    ></SmallButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  mr: 1,
                  mb: 1,
                }}
              >
                {i18n["allTalent.workHistory"]}
              </Typography>
              <Box sx={{ display: "flex", width: "90%" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: "4px",
                    marginBottom: "4px",
                    minWidth: "fit-content",
                  }}
                >
                  Feb 2020 - Dec 2022
                </Typography>
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.grayButton200.main}`,
                    width: "inherit",
                    marginBottom: "9px",
                  }}
                ></Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: 1,
                  }}
                >
                  Flight Centre,{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  Lead Designer
                </Typography>
                {/* <SmallButton minWidth='10px' height='20px' color="blueButton400" borderRadius="5px" label='Feb 2020 - Dec 2022' mr="8px"></SmallButton> */}
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                  fontStyle: "italic",
                  mb: 1,
                }}
              >
                I spearheaded 2 campaigns and raised over R60k for this
                organisation on a volunteer basis.
              </Typography>

              <Box sx={{ display: "flex", width: "90%" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: "4px",
                    marginBottom: "4px",
                    minWidth: "fit-content",
                  }}
                >
                  Sep 2017 - Jan 2020
                </Typography>
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.grayButton200.main}`,
                    width: "inherit",
                    marginBottom: "9px",
                  }}
                ></Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: 1,
                  }}
                >
                  Reuter Thompson,{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  Admin Assistant
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                  fontStyle: "italic",
                  mb: 1,
                }}
              >
                Employee of the year 2018.
              </Typography>
              <Box sx={{ display: "flex", width: "90%" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: "4px",
                    marginBottom: "4px",
                    minWidth: "fit-content",
                  }}
                >
                  Aug 2016 - Aug 2017
                </Typography>
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.grayButton200.main}`,
                    width: "inherit",
                    marginBottom: "9px",
                  }}
                ></Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mr: 1,
                  }}
                >
                  Jason’s Bakery,{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  Waitress
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                  fontStyle: "italic",
                  mb: 2,
                }}
              >
                Best croissant maker.
              </Typography>
            </Box>
            <Box sx={{ mt: 1, width: "60%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {i18n["allTalent.alerts"]}
                </Typography>
                <BlueSwitch defaultChecked />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "-10px" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.type"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton700"
                  borderRadius="5px"
                  label="full-time"
                  mr="8px"
                ></SmallButton>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "6px" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.region"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="United Kingdom"
                  mr="8px"
                ></SmallButton>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "6px" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.currency"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="ZAR"
                  mr="8px"
                ></SmallButton>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "6px" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.industry"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton600"
                  borderRadius="5px"
                  label="tech"
                  mr="8px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="blueButton600"
                  borderRadius="5px"
                  label="finance"
                  mr="8px"
                ></SmallButton>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "6px" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.salary"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label=">40,000, <60,000"
                  mr="8px"
                ></SmallButton>
                {/* <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    color="blueButton500"
                                    sx={{
                                        width: '60%',
                                        p: 0
                                    }}
                                /> */}
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "6px" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    mr: 1,
                  }}
                >
                  {i18n["allTalent.experience"]}:
                </Typography>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="3"
                  mr="8px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="4"
                  mr="8px"
                ></SmallButton>
                <SmallButton
                  minWidth="10px"
                  height={18}
                  color="grayButton"
                  borderRadius="5px"
                  label="5"
                  mr="8px"
                ></SmallButton>
                {/* <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    color="blueButton500"
                                    sx={{
                                        width: '60%',
                                        p: 0
                                    }}
                                /> */}
              </Box>
            </Box>
          </Box>
          <Box className="contentBoxRight">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} > */}
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "-45px" }}>
                    <SingleRadialChart
                      hollow="65%"
                      labelsData={labelExp}
                      series={expScoreData}
                      width={170}
                      nameSize="14px"
                      valueSize="20px"
                      nameOffsetY="16"
                      valueOffsetY="-20"
                      color={theme.palette.redButton.main}
                      index={1}
                      isHovered={isHovered}
                    />
                  </Box>
                  <Box sx={{}}>
                    <SingleRadialChart
                      hollow="65%"
                      labelsData={labelHon}
                      series={honScoreData}
                      width={170}
                      nameSize="14px"
                      valueSize="20px"
                      nameOffsetY="16"
                      valueOffsetY="-20"
                      color={theme.palette.redButton.main}
                      index={1}
                      isHovered={isHovered}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginTop: "-15px" }}>
                  <Box sx={{ marginRight: "-45px" }}>
                    <SingleRadialChart
                      hollow="65%"
                      labelsData={labelSal}
                      series={salScoreData}
                      width={170}
                      nameSize="14px"
                      valueSize="18px"
                      nameOffsetY="16"
                      valueOffsetY="-20"
                      color={theme.palette.redButton.main}
                      index={1}
                      isHovered={isHovered}
                    />
                  </Box>

                  <Box>
                    <SingleRadialChart
                      hollow="65%"
                      labelsData={labelNoti}
                      series={notiScoreData}
                      width={170}
                      nameSize="14px"
                      valueSize="18px"
                      nameOffsetY="16"
                      valueOffsetY="-20"
                      color={theme.palette.redButton.main}
                      index={1}
                      isHovered={isHovered}
                    />
                  </Box>
                </Box>
              </Box>
              {/* <Box sx={{ mb: 1 }}>
                                <Button variant='contained' color='redButton' sx={{ padding: '16px 32px !important', mr: 1 }} >{i18n['allTalent.history']}</Button>
                                <Button variant='contained' color='redButton' sx={{ padding: '16px 32px !important', mr: 1 }} >{i18n['allTalent.chat']}</Button>
                                <Button variant='contained' color='redButton' sx={{ padding: '16px 32px !important' }} >{i18n['allTalent.match']}</Button>
                            </Box> */}
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Button
                  id="broad"
                  aria-controls={open ? "broad-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  color="base"
                  sx={{
                    mr: 1,
                    padding: "16px 24px !important",
                    color: theme.palette.redButton.main,
                    border: `solid ${theme.palette.redButton.main} 2px`,
                  }}
                >
                  {i18n["allTalent.addToPool"]}
                </Button>
                <Button
                  id="broad"
                  aria-controls={open ? "broad-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  color="redButton"
                  sx={{ mr: 1, padding: "16px 24px !important" }}
                >
                  {i18n["allTalent.addToJob"]}
                </Button>
              </Box>
              {/* </Box> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "0 24px",
                  mt: 2,
                }}
              >
                <Box
                  component="img"
                  className="profileAvatar"
                  alt="crayon logo"
                  src={history}
                  sx={{
                    mr: 1,
                    width: 43,
                    height: 43,
                  }}
                />
                <Box
                  component="img"
                  className="profileAvatar"
                  alt="crayon logo"
                  src={chat}
                  sx={{
                    mr: 1,
                    width: 43,
                    height: 43,
                  }}
                />
                <Box
                  component="img"
                  className="profileAvatar"
                  alt="crayon logo"
                  src={match}
                  sx={{
                    mr: 1,
                    width: 43,
                    height: 43,
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  mr: 1,
                }}
              >
                {i18n["allTalent.comments"]} (2)
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Box
                  component="img"
                  className="profileAvatar"
                  alt="crayon logo"
                  src={profile}
                  sx={{
                    mr: 1,
                    width: 20,
                    height: 20,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      mr: 1,
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mr: 1,
                    }}
                  >
                    Currently on R25,000pm, looking to change industries in the
                    fintech space.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      mr: 1,
                      color: theme.palette.grayButton.main,
                      textAlign: "end",
                    }}
                  >
                    28 Nov 2022:
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Box
                  component="img"
                  className="profileAvatar"
                  alt="crayon logo"
                  src={profile}
                  sx={{
                    mr: 1,
                    width: 20,
                    height: 20,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      mr: 1,
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mr: 1,
                    }}
                  >
                    Currently on R25,000pm, looking to change industries in the
                    fintech space.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      mr: 1,
                      color: theme.palette.grayButton.main,
                      textAlign: "end",
                    }}
                  >
                    28 Nov 2022:
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 4 }}>
                {/* <StyledTextField placeholder="type your comment here..." id="comment" size="small" /> */}
                <StyledTextField
                  id="outlined-adornment-password"
                  type="text"
                  size="small"
                  placeholder="type your comment here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <Box
                        component="img"
                        className="profileAvatar"
                        alt="crayon logo"
                        src={send}
                        sx={{
                          width: "30px",
                          // mr: 1
                        }}
                      />
                      {/* <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                                color='redButton'
                                            >
                                                <PlaceIcon />
                                            </IconButton> */}
                    </InputAdornment>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
}
