import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import locale from "../../../i18n/locale";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import SmallButton from "../../common/SmallButton";
import profile from "../../../assets/profile.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Paper } from "@mui/material";
import RadialChart from "../../common/RadialChart";
import { CARD_RIGHT_BUTTON_GROUP } from "../../../utils/Constants";
import InputBox from "../../common/InputBox";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: "4px",
  borderRadius: "5px",
  position: "unset",
  "& .MuiAccordionSummary-root": {
    // alignItems: 'start'
    flexDirection: "row-reverse",
  },
  "& .MuiAccordionSummary-content": {
    flexDirection: "column",
    // margin: 0,
    ".summaryBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // marginRight: '8px',
      "& .MuiButtonBase-root": {
        fontSize: 10,
        fontWeight: 700,
        minWidth: 29,
        padding: "2px 8px",
        // borderRadius: 3,
        height: "20px",
        boxShadow: "none",
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
    background: theme.palette.yellowButton100.main,
    width: 35,
    height: 35,
    borderRadius: 25,
    marginLeft: "-5px",
    marginRight: "5px",
    justifyContent: "center",
    alignItems: "center",
    // marginRight: '32px',
    // position: 'absolute',
    // right: '40px',
    // top: '12px',
    "& .MuiSvgIcon-root": {
      fontSize: "1.8rem",
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
        "& .MuiSvgIcon-root": {
          width: "20px",
        },
      },
      ".contentBoxRight": {
        width: "40%",
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
      },
    },
  },
  "& .MuiButtonBase-root": {
    // boxShadow: 'none',
    padding: "0 16px",
  },
}));

const labels = ["Applicants", "Shortlisted", "Interviews"];

export default function ActiveJobCard({ jobContent, onManageTalent }) {
  const {
    id,
    name,
    logo,
    job,
    description,
    status,
    crayonComfort,
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
 
  const [chartData, setChartData] = useState([90, 99, 99]);
  const [isHovered, setIsHovered] = useState(false);
  const [colorKey, setColorKey] = useState("color");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHoverEnter = () => {
    setColorKey("hover");
  };
  const handleHoverLeave = () => {
    setColorKey("color");
  };
  const handleManageTalent = (event, activeJobId) => {
    onManageTalent(activeJobId);
  };
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box className="summaryBox" sx={{ mb: "4px" }}>
          <Box className="summaryBoxContent">
            <Button
              variant="contained"
              color="orangeButton"
              sx={{ mr: 1, borderRadius: "5px", pa: 0 }}
            >
              {jobContent?.job_id}
            </Button>
            {/* <Typography sx={{
                            fontSize: '10px',
                            fontWeight: 700,
                            mr: 1
                        }}>ozow</Typography> */}
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                mr: 1,
              }}
            >
              {jobContent?.title}
            </Typography>
            {/* <Typography sx={{
                            fontSize: '20px',
                            fontWeight: 400,
                            mr: 2,
                        }}>{description}</Typography> */}
            {/* <SmallButton color={status?.color} label={status?.label}></SmallButton> */}
          </Box>

          <Box className="summaryBoxContent">
            <SmallButton
              color="redButton"
              borderRadius="25px"
              label={i18n["activeJobs.copyLink"]}
              mr="8px"
            ></SmallButton>
            <SmallButton
              color="redButton"
              borderRadius="25px"
              label={i18n["activeJobs.viewSpec"]}
              mr="16px"
            ></SmallButton>
            {jobContent?.job_type == "crayon recruit" ? (
              <SmallButton
                color="brownButton"
                label={i18n["activeJobs.recruit"]}
                mr="8px"
              ></SmallButton>
            ) : (
              <SmallButton
                color="orangeButton"
                label={i18n["activeJobs.lite"]}
                mr="8px"
              ></SmallButton>
            )}
            <SmallButton
              color="brownButton"
              label={i18n["activeJobs.interviews"]}
              mr="8px"
            ></SmallButton>
            {crayonComfort && (
              <SmallButton
                color="brownButton"
                label={i18n["activeJobs.crayonComfort"]}
                mr="8px"
              ></SmallButton>
            )}
          </Box>
        </Box>
        <Box className="summaryBox">
          <Box className="summaryBoxContent">
            <SmallButton
              color="blueButton400"
              label={
                jobContent?.town.name + ", " + jobContent?.town.region.name
              }
              mr="8px"
            ></SmallButton>
            <SmallButton
              color="blueButton400"
              label={
                jobContent?.salary?.currency?.symbol +
                jobContent?.salary?.max +
                "pm"
              }
              mr="8px"
            ></SmallButton>
            <SmallButton
              color="blueButton400"
              label={jobContent?.experience.year + "years"}
              mr="8px"
            ></SmallButton>
            <SmallButton
              color="blueButton400"
              label={jobContent?.work_setup}
              mr="8px"
            ></SmallButton>
            {/* <SmallButton color="blueButton400" label={jobType} mr="8px"></SmallButton> */}
            <SmallButton
              color="orangeButton"
              label={jobContent?.created_at?.slice(0, 10)}
              mr="8px"
            ></SmallButton>
            {/* <SmallButton color="orangeButton" label={days} mr="8px"></SmallButton> */}
          </Box>

          <Box className="summaryBoxContent">
            <Box
              component="img"
              className="profileAvatar"
              alt="crayon logo"
              src={profile}
              sx={{
                mr: 1,
              }}
            />
            <Button
              id="broad"
              aria-controls={open ? "broad-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              color="blueButton200"
              sx={{ mr: 1, borderRadius: "5px" }}
            >
              Mike
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
              color="lightGreenButton100"
              sx={{ mr: 1 }}
            >
              {i18n["activeJobs.active"]}
            </Button>
            <IconButton
              aria-label="edit"
              color="grayButton"
              sx={{
                padding: "0 !important",
                minWidth: "20px !important",
                "& .MuiSvgIcon-root": {
                  width: "20px",
                },
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              color="grayButton"
              sx={{
                padding: "0 !important",
                minWidth: "25px !important",
                "& .MuiSvgIcon-root": {
                  width: "20px",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box className="contentBoxLeft">
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              mr: 1,
            }}
          >
            {jobContent?.description}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {/* <SmallButton color="blueButton100" borderRadius="5px" label='graphic design' mr="8px"></SmallButton>
                        <SmallButton color="blueButton100" borderRadius="5px" label='Adobe Illustrator' mr="8px"></SmallButton>
                        <SmallButton color="blueButton100" borderRadius="5px" label='animation' mr="8px"></SmallButton>
                        <SmallButton color="blueButton100" borderRadius="5px" label='motion graphics' mr="8px"></SmallButton>
                        <SmallButton color="blueButton100" borderRadius="5px" label='sketching' mr="8px"></SmallButton> */}
            {jobContent?.job_tags?.map((val) => {
              return (
                <SmallButton
                  color="blueButton100"
                  borderRadius="5px"
                  label={val?.tag?.tag}
                  mr="8px"
                ></SmallButton>
              );
            })}
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
                {i18n["activeJobs.industries"]}:
              </Typography>
              {/* <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='finance' mr="8px"></SmallButton>
                            <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='tech' mr="8px"></SmallButton>
                            <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='real estate' mr="8px"></SmallButton> */}
              {jobContent?.industry_jobs?.map((val) => {
                return (
                  <SmallButton
                    minWidth="10px"
                    height="15px"
                    color="grayButton"
                    borderRadius="5px"
                    label={val?.industry?.name}
                    mr="8px"
                  ></SmallButton>
                );
              })}
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2px" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                }}
              >
                {i18n["activeJobs.tools"]}:
              </Typography>
              {/* <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='Adobe' mr="8px"></SmallButton>
                            <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='Microsoft Word' mr="8px"></SmallButton> */}

              {jobContent?.job_tools?.map((val) => {
                return (
                  <SmallButton
                    minWidth="10px"
                    height="15px"
                    color="grayButton"
                    borderRadius="5px"
                    label={val?.tool?.name}
                    mr="8px"
                  ></SmallButton>
                );
              })}
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2px" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                }}
              >
                {i18n["activeJobs.qualifications"]}:
              </Typography>
              {/* <SmallButton minWidth='10px' height='15px' color="grayButton" borderRadius="5px" label='Bachelor of Arts' mr="8px"></SmallButton> */}
              {jobContent?.job_qualifications?.map((val) => {
                return (
                  <SmallButton
                    minWidth="10px"
                    height="15px"
                    color="grayButton"
                    borderRadius="5px"
                    label={val?.qualification?.name}
                    mr="8px"
                  ></SmallButton>
                );
              })}
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2px" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                }}
              >
                {i18n["activeJobs.institutions"]}:
              </Typography>
              <SmallButton
                minWidth="10px"
                height="15px"
                color="grayButton"
                borderRadius="5px"
                label="Stellenbosch University"
                mr="8px"
              ></SmallButton>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "2px" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  mr: 1,
                }}
              >
                {i18n["activeJobs.associations"]}:
              </Typography>
              <SmallButton
                minWidth="10px"
                height="15px"
                color="grayButton"
                borderRadius="5px"
                label="SAICA"
                mr="8px"
              ></SmallButton>
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                mr: 1,
              }}
            >
              {i18n["activeJobs.jobQuestions"]}
            </Typography>
          
              {jobContent?.job_questions?.length > 0
                ? jobContent?.job_questions?.map((val, idx) => {
                    return (
                        <Box
              sx={{
                display: "flex",
                flexDirection:"column",
                mr: 2,
                mt:1
              }}
            >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 700,
                            mr: 1,
                          }}
                        >
                          {i18n["activeJobs.question1"]}
                          {idx + 1}
                        </Typography>
                        <InputBox sx={{ mr: 2 }} value={val?.question} />
                        </Box>
                    );
                  })
                : "No question Mentioned."}

              {/* <Typography sx={{
                                fontSize: '12px',
                                fontWeight: 700,
                                mr: 1
                            }}>{i18n['activeJobs.question1']}</Typography> */}
              {/* <Box>
                                <IconButton
                                    aria-label="edit"
                                    color='redButton'
                                    sx={{
                                        padding: '0 !important',
                                    }}

                                >
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="edit"
                                    color='lightGreenButton100' >
                                    <AddCircleIcon />
                                </IconButton>
                            </Box> */}
         
            {/* <InputBox sx={{ mr: 2 }} /> */}
            {/* <InputBox sx={{ mt: 1, mr: 2, }} /> */}
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mr: 2 }}>
                            <Typography sx={{
                                fontSize: '12px',
                                fontWeight: 700,
                                mr: 1
                            }}>{i18n['activeJobs.question2']}</Typography>
                            <Box>
                                <IconButton
                                    aria-label="edit"
                                    color='redButton'
                                    sx={{
                                        padding: '0 !important',
                                    }}
                                >
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="edit"
                                    color='lightGreenButton100'

                                >
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <InputBox sx={{ mr: 2 }} />
                        <InputBox sx={{ mt: 1, mr: 2, }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mr: 2 }}>
                            <Typography sx={{
                                fontSize: '12px',
                                fontWeight: 700,
                                mr: 1
                            }}>{i18n['activeJobs.question3']}</Typography>
                            <Box>
                                <IconButton
                                    aria-label="edit"
                                    color='redButton'
                                    sx={{
                                        padding: '0 !important',

                                    }}
                                >
                                    <RemoveCircleIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="edit"
                                    color='lightGreenButton100'

                                >
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <InputBox sx={{ mr: 2 }} />
                        <InputBox sx={{ mt: 1, mr: 2, }} /> */}
          </Box>
        </Box>
        <Box className="contentBoxRight">
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <SmallButton
              color="orangeButton"
              borderRadius="5px"
              label="1 credit used"
              mr="8px"
            ></SmallButton>
            <SmallButton
              color="orangeButton"
              borderRadius="5px"
              label="auto renew date: 27 January 2023"
            ></SmallButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginRight: "-16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <RadialChart
                  labelsData={labels}
                  legendOffsetX={30}
                  verticalMargin={4}
                  legendOffsetY={10}
                  series={chartData}
                  width={350}
                  isHovered={isHovered}
                />
              </Box>
              <Button
                variant="contained"
                color="redButton"
                sx={{ padding: "16px !important" }}
                onClick={(event) => handleManageTalent(event, id)}
              >
                {i18n["activeJobs.manageTalent"]}
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                // marginRight: '4px'
              }}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              {CARD_RIGHT_BUTTON_GROUP.map((btn, index) => (
                <SmallButton
                  color={btn[colorKey]}
                  key={index}
                  label={btn.label}
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                  mb="4px"
                  width={100}
                  p={0}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
}