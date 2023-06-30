import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box, IconButton } from "@mui/material";
import profile from "../../../assets/profile2.svg";
import drag_dots from "../../../assets/drag_dots.svg";
import eye from "../../../assets/eye.svg";
import play from "../../../assets/play.svg";
import thumbs_down from "../../../assets/thumbs_down.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import RadialChart from "../../common/RadialChart";
import ManIcon from "@mui/icons-material/Man";
import locale from "../../../i18n/locale";
import { CARD_RIGHT_BUTTON_GROUP } from "../../../utils/Constants";
import SmallButton from "../../common/SmallButton";
import SingleRadialChart from "../../common/SingleRadialChart";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  marginTop: "8px",
  marginBottom: "8px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.chart.green200,
  },
}));

const StyledHR = styled(Box)(({ theme }) => ({
  borderRight: "1px solid rgba(0, 0, 0, 0.3)",
  width: "0px",
  height: "10px",
  // marginRight: '8px'
}));
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: 8,
  background: `${theme.palette.white} !important`,
  borderRadius: "10px",
  height: "auto !important",
  position: "unset",
  "& .MuiAccordionSummary-root": {
    alignItems: "start",
    padding: 0,
  },
  "& .MuiAccordionSummary-content": {
    // flexDirection: 'column',
    // margin: '2px 0 8px 0',
    margin: 0,
    ".summaryBox1": {
      margin: "8px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      // alignItems: 'start',
      // marginRight: '20px'
    },
    ".summaryBox2": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    ".dragDots": {
      height: 24,
      width: 24,
      maxHeight: { xs: 24 },
      maxWidth: { xs: 24 },
      // borderRadius: 6
    },
    ".profileAvatar": {
      height: 30,
      width: 30,
      maxHeight: { xs: 30 },
      maxWidth: { xs: 30 },
      borderRadius: 6,
    },
    ".dotIcon": {
      position: "absolute",
      right: "30px",
      top: "-2px",
      width: "12px",
    },
    ".thumbs": {
      position: "absolute",
      right: "1px",
      top: "9px",
      width: "16px",
    },
    ".arrowFont": {
      fontSize: "1.1rem",
    },
    "& .MuiTypography-root": {
      // fontWeight: 700,
      // fontSize: '14px',
    },
    "& .MuiButtonBase-root": {
      // padding: '0 6px',
      // fontSize: 10,
      // fontWeight: 700,
      // minWidth: 30,
      // boxShadow: 'none',
      // borderRadius: 2,
      // height: '20px'
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.redButton.main,
    position: "absolute",
    right: "2px",
    bottom: "2px",
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },
  },
  "& .MuiCollapse-root": {
    "& .MuiAccordionDetails-root": {
      display: "flex",
      padding: 0,
      marginTop: "-10px",
      "& .MuiButtonBase-root": {
        // padding: '0 6px',
        // fontSize: 10,
        // fontWeight: 700,
        // minWidth: 30,
        // boxShadow: 'none',
        // padding: '1px 4px',
        // borderRadius: 3,
        // height: '20px'
      },
      ".contentBox1": {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 8px",
      },
      ".contentBox2": {
        display: "flex",
        justifyContent: "space-between",
        // padding: '0 8px'
      },
      ".contentBox3": {
        display: "flex",
        justifyContent: "space-around",
        padding: "0 8px",
        marginTop: "-12px",
      },
      ".contentBox4": {
        display: "flex",
        justifyContent: "center",
        padding: "0 8px",
        margin: "8px 0",
      },
    },
  },
  "& .MuiButtonBase-root": {
    // boxShadow: 'none',
    // padding: '0 8px',
  },
}));

const labels = ["Applicants", "Shortlisted", "Interviews"];

const label = "match";

export default function DraggableCard({ item, index }) {
  const theme = useTheme();
  const i18n = locale.en;
  const [chartData, setChartData] = useState([88]);
  const [colorKey, setColorKey] = useState("color");

  const handleHoverEnter = () => {
    setColorKey("hover");
  };
  const handleHoverLeave = () => {
    setColorKey("color");
  };

  return (
    <Draggable
      key={item?.user_id}
      draggableId={item?.user_id?.toString()}
      index={index}
    >
      {(provided) => (
        <StyledAccordion
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          disableGutters
        >
          {console.log(item)}

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                className="dragDots"
                alt="drag dots"
                src={drag_dots}
                sx={
                  {
                    // mr: 1
                  }
                }
              />
            </Box>
            <Box
              sx={{
                borderRight: `solid 0.5px ${theme.palette.grayBorder}`,
                opacity: "0.3",
              }}
            ></Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ margin: "0 -8px 0 -8px" }}>
                <SingleRadialChart
                  hollow="52%"
                  nameSize="9px"
                  valueSize="14px"
                  nameOffsetY="11"
                  valueOffsetY="-17"
                  labelsData={label}
                  series={chartData}
                  width={86}
                  color={theme.palette.chart.green200}
                  index={1}
                  isHovered={false}
                />
              </Box>
              <Box className="summaryBox1">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    component="img"
                    className="profileAvatar"
                    alt="crayon logo"
                    src={
                      item?.profile_url !== "No URL"
                        ? item?.profile_url
                        : profile
                    }
                    sx={
                      {
                        // mr: 1
                      }
                    }
                  />
                  <Box sx={{ marginLeft: "4px" }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        mr: 1,
                        fontSize: "14px",
                      }}
                    >
                      {item?.first_name + " " + item?.last_name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "-4px",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          mr: 1,
                          fontSize: "12px",
                          color: theme.palette.blueButton400.main,
                          width: "115px",
                        }}
                      >
                        {item?.job_title ? item?.job_title : "-"}
                      </Typography>
                      <StyledHR></StyledHR>
                      <IconButton sx={{ padding: "0 !important" }}>
                        <ManIcon color="blueButton400"></ManIcon>
                      </IconButton>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          mr: 1,
                          fontSize: "12px",
                        }}
                      >
                        32
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ ml: "4px" }}>
                  <IconButton
                    sx={{
                      width: "22px",
                      mr: 1,
                      height: "22px",
                      color: theme.palette.redButton100.main,
                    }}
                  >
                    <PlayCircleFilledIcon />
                  </IconButton>
                  <SmallButton
                    color="redButton"
                    startIcon={
                      <Box
                        component="img"
                        className="eye"
                        alt="eye logo"
                        src={eye}
                      />
                    }
                    startIconMargin="4px"
                    height={24}
                    fontWeight={700}
                    label={i18n["draggableCard.cv"]}
                    mr="4px"
                    borderRadius="25px"
                  ></SmallButton>
                  <SmallButton
                    color="redButton"
                    startIcon={
                      <Box
                        component="img"
                        className="eye"
                        alt="eye logo"
                        src={eye}
                      />
                    }
                    startIconMargin="4px"
                    height={24}
                    fontWeight={700}
                    label={i18n["draggableCard.qAnda"]}
                    mr="4px"
                    borderRadius="25px"
                  ></SmallButton>
                </Box>
              </Box>
              <IconButton color="greenButton200" className="dotIcon">
                <FiberManualRecordIcon sx={{ width: "18px", height: "18px" }} />
              </IconButton>
              <Box
                component="img"
                className="thumbs"
                alt="thumbs"
                src={thumbs_down}
                sx={{
                  mr: 1,
                }}
              />
            </Box>

            {/* <IconButton color='yellowButton100' sx={{ justifyContent: 'end', marginRight: '-7px' }}>
                            <FiberManualRecordIcon sx={{ width: '18px', height: '18px' }} />
                        </IconButton>
                        <Box className='summaryBox1'>
                            <Box
                                component="img"
                                className="profileAvatar"
                                alt="crayon logo"
                                src={profile}
                                sx={{
                                    mr: 1
                                }}
                            />
                            <Typography sx={{
                                fontWeight: 700,
                                mr: 1
                            }}>Mickey Mouse, </Typography>

                            <Typography sx={{
                                fontWeight: 400,
                            }}>Data Scientist, {item.id}</Typography>
                        </Box>
                        <Box className='summaryBox2'>

                            <SmallButton color="orangeButton" borderRadius="5px" label='75%' minWidth='23px'></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.cv']} minWidth='23px'></SmallButton>
                            <SmallButton color="blueButton400" borderRadius="5px" label='8' minWidth='23px'></SmallButton>
                            <SmallButton color="blueButton400" borderRadius="5px" label='R45,000' minWidth='23px'></SmallButton>
                            <SmallButton color="blueButton400" borderRadius="5px" label='QL 4' minWidth='23px'></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.qAnda']} minWidth='23px'></SmallButton>
                            <ArrowBackIosIcon color="redButton" className='arrowFont' sx={{ ml: '4px' }} />
                            <ArrowForwardIosIcon color="lightGreenButton100" className='arrowFont' />
                            <CloseIcon color="redButton" />
                        </Box> */}
          </AccordionSummary>

          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                className="dragDots"
                alt="drag dots"
                src={drag_dots}
                sx={
                  {
                    // mr: 1
                  }
                }
              />
            </Box>
            <Box
              sx={{
                borderRight: `solid 0.5px ${theme.palette.grayBorder}`,
                opacity: "0.3",
              }}
            ></Box>

            <Box
              sx={{
                m: "10px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    mr: 1,
                    width: "43px",
                    height: "43px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    background: theme.palette.redButton100.main,
                  }}
                >
                  <Box
                    component="img"
                    className="dragDots"
                    alt="drag dots"
                    src={play}
                    sx={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mr: 1,
                    width: "43px",
                    height: "43px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    background: theme.palette.redButton100.main,
                  }}
                >
                  <Box
                    component="img"
                    className="dragDots"
                    alt="drag dots"
                    src={play}
                    sx={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </Box>
                <SmallButton
                  color="redButton"
                  startIcon={
                    <Box
                      component="img"
                      className="eye"
                      alt="eye logo"
                      src={eye}
                    />
                  }
                  startIconMargin="4px"
                  height={24}
                  fontWeight={700}
                  label={i18n["draggableCard.cv"]}
                  mr="4px"
                  borderRadius="25px"
                ></SmallButton>
                <SmallButton
                  color="redButton"
                  startIcon={
                    <Box
                      component="img"
                      className="eye"
                      alt="eye logo"
                      src={eye}
                    />
                  }
                  startIconMargin="4px"
                  height={24}
                  fontWeight={700}
                  label={i18n["draggableCard.qAnda"]}
                  mr="4px"
                  borderRadius="25px"
                ></SmallButton>
              </Box>
              <Box
                sx={{
                  mt: 1,
                }}
              >
                <SmallButton
                  color="purpleButton"
                  height={25}
                  letterSpacing="0"
                  p="8px"
                  label={i18n["draggableCard.challenger"]}
                  mr="8px"
                />
                <SmallButton
                  color="brownButton"
                  height={25}
                  letterSpacing="0"
                  p="8px"
                  label={i18n["draggableCard.collaborator"]}
                  mr="8px"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ margin: "0 -17px 0 -17px" }}>
                  <SingleRadialChart
                    hollow="60%"
                    nameSize="9px"
                    valueSize="14px"
                    nameOffsetY="11"
                    valueOffsetY="-17"
                    labelsData={label}
                    series={chartData}
                    width={105}
                    color={theme.palette.chart.green200}
                    index={1}
                    isHovered={false}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 1,
                    width: "100%",
                  }}
                >
                  <BorderLinearProgress variant="determinate" value={50} />
                  <BorderLinearProgress variant="determinate" value={50} />
                  <BorderLinearProgress variant="determinate" value={50} />
                  <BorderLinearProgress variant="determinate" value={50} />
                </Box>
              </Box>
            </Box>

            {/* <Box className='contentBox1'>
                            <SmallButton color="blueButton400" borderRadius="25px" label={i18n['draggableCard.videoApp']} minWidth='23px' endIcon={<PlayCircleFilledIcon sx={{ fontSize: '12px' }} />} ></SmallButton>
                            <SmallButton color="blueButton400" borderRadius="5px" label='30 days' minWidth='23px'></SmallButton>
                            <SmallButton color="blueButton400" borderRadius="5px" label='Cape Town, South Africa' minWidth='23px'></SmallButton>
                        </Box>
                        <Box className='contentBox1' sx={{ mt: 1 }}>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.crayonButton']} minWidth='23px' endIcon={<PlayCircleFilledIcon sx={{ fontSize: '12px' }} />} ></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.fullCV']} minWidth='23px'></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.portfolio']} minWidth='23px'></SmallButton>
                            <SmallButton color="brownButton" borderRadius="25px" label={i18n['draggableCard.crayonInterview']} minWidth='23px'></SmallButton>
                        </Box>

                        <Box className='contentBox2'>
                            <Box sx={{
                                marginLeft: '-10px',
                                marginTop: '-8px',
                            }}>
                                <RadialChart legendFontSize={10} legendOffsetX={2} legendOffsetY={-9} verticalMargin={-1} labelsData={labels} series={chartData} width={210} index={index} isHovered={false} />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '16px'
                            }} onMouseEnter={handleHoverEnter}
                                onMouseLeave={handleHoverLeave}>
                                {CARD_RIGHT_BUTTON_GROUP.map((btn, index) => (
                                    <SmallButton color={btn[colorKey]} key={index} label={btn.label} mb='4px' width={100} p={0} borderTopRightRadius={0}
                                        borderBottomRightRadius={0} />
                                ))}
                            </Box>
                        </Box>
                        <Box className='contentBox3'>
                            <SmallButton color="orangeButton" borderRadius="5px" label='mickey.mouse@gmail.com' minWidth='23px'></SmallButton>
                            <SmallButton color="orangeButton" borderRadius="5px" label='0831234567' minWidth='23px'></SmallButton>
                        </Box>
                        <Box className='contentBox4'>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.history']} minWidth='23px' mr={1}></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.requestInterview']} minWidth='23px' mr={1}></SmallButton>
                            <SmallButton color="redButton" borderRadius="25px" label={i18n['draggableCard.chat']} minWidth='23px'></SmallButton>
                        </Box> */}
          </AccordionDetails>
        </StyledAccordion>
      )}
    </Draggable>
  );
}
