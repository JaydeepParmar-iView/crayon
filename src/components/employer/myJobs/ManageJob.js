import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import {
  changeJobApplicationStatus,
  getTalentJobStatusApplications,
} from "../../../redux/employer/myJobsSlice";
import { useDispatch } from "react-redux";
import {
  setAlert,
  setLoading,
} from "../../../redux/employer/employerJobsConfigSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ALERT_TYPE, ERROR_MSG } from "../../../utils/Constants";
import { KeyboardArrowUp, KeyboardArrowUpOutlined } from "@mui/icons-material";

const StyledBox = (props) => {
  const { children, color, getTalentStatusApplications, jobId, column } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 1,
        height: 37,
        backgroundColor: theme.palette[color].main,
        borderRadius: 25,
        color: theme.palette.white,
        justifyContent: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
        cursor: "pointer",
      }}
      onClick={() =>
        column?.count !== column?.items?.length &&
        getTalentStatusApplications(jobId, column?.id)
      }
    >
      {children}
    </Box>
  );
};
export const data = [
  {
    id: "1",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Due_Date: "25-May-2020",
  },
  {
    id: "2",
    Task: "Fix Styling",
    Due_Date: "26-May-2020",
  },
  {
    id: "3",
    Task: "Handle Door Specs",
    Due_Date: "27-May-2020",
  },
  {
    id: "4",
    Task: "morbi",
    Due_Date: "23-Aug-2020",
  },
  {
    id: "5",
    Task: "proin",
    Due_Date: "05-Jan-2021",
  },
];

export const columnsFromBackend = {
  23223: {
    title: "matched",
    items: data,
    color: "orangeButton",
  },
  24312: {
    title: "applications",
    items: [],
    color: "yellowButton100",
  },
  33123: {
    title: "considering",
    items: [],
    color: "blueButton400",
  },
  34123: {
    title: "shortlist",
    items: [],
    color: "blueButton100",
  },
  35223: {
    title: "interview",
    items: [],
    color: "purpleButton200",
  },
  36312: {
    title: "assessment",
    items: [],
    color: "brownButton",
  },
  37123: {
    title: "hired",
    items: [],
    color: "lightGreenButton100",
  },
  38123: {
    title: "rejected",
    items: [],
    color: "redButton",
  },
};

export default function ManageJob({
  talentJobStatus,
  jobId,
  settalentJobStatus,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleMoveJobApplicationStatus = async (
    jobId,
    destinationColumn,
    draggableColumn
  ) => {
    try {
      const [manage] = await Promise.all([
        dispatch(
          changeJobApplicationStatus({
            job_id: jobId,
            job_status_id: destinationColumn?.id,
            candidateuser_id: draggableColumn?.user_id,
          })
        ),
      ]);
      if (manage?.payload?.data?.at(0) == 1) {
      }
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = talentJobStatus?.find(
        (item) => item?.id == source?.droppableId
      );
      const destinationColumn = talentJobStatus?.find(
        (item) => item?.id == destination?.droppableId
      );
      const draggableColumn = talentJobStatus
        ?.find((item) => item?.id == source?.droppableId)
        ?.items?.find((item) => item?.user_id == draggableId);
      settalentJobStatus(
        talentJobStatus?.map((talent) => {
          if (talent?.id == sourceColumn?.id) {
            return {
              ...talent,
              items: talent?.items?.filter(
                (item) => item?.user_id !== draggableColumn?.user_id
              ),
              count: talent?.count - 1,
            };
          }
          if (talent?.id == destinationColumn?.id) {
            return {
              ...talent,
              items: [...talent?.items, draggableColumn],
              count: talent?.count + 1,
            };
          }
          return talent;
        })
      );
      handleMoveJobApplicationStatus(jobId, destinationColumn, draggableColumn);
    }
  };

  const getTalentStatusApplications = async (jobId, jobStatusId) => {
    try {
      const [manage] = await Promise.all([
        dispatch(
          getTalentJobStatusApplications({
            job_id: jobId,
            job_status_id: jobStatusId,
          })
        ),
      ]);
      settalentJobStatus(
        talentJobStatus?.map((item) =>
          item?.id == jobStatusId
            ? { ...item, items: manage?.payload?.data }
            : item
        )
      );
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

  const renderColor = (column) => {
    switch (column?.status) {
      case "matched":
        return "orangeButton";
      case "considering":
        return "blueButton400";
      case "shortlist":
        return "blueButton100";
      case "interview":
        return "purpleButton200";
      case "assessment":
        return "brownButton";
      case "hired":
        return "lightGreenButton100";
      case "rejected":
        return "redButton";
      case "review":
        return "yellowButton100";
      default:
        return "orangeButton";
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <Box sx={{ display: "flex" }}>
        {Object.entries(talentJobStatus).map(([columnId, column]) => {
          return (
            <Droppable key={`${column?.id}`} droppableId={`${column?.id}`}>
              {(provided) => (
                <Box
                  xs={3}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    flex: "1 1 0px",
                    margin: "8px",
                    minWidth: "300px",
                    padding: "20px",
                  }}
                >
                  <StyledBox
                    color={renderColor(column)}
                    column={column}
                    getTalentStatusApplications={getTalentStatusApplications}
                    jobId={jobId}
                  >
                    {column?.status} ({column?.count})
                    {column?.count == column?.items?.length ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </StyledBox>

                  {column?.items?.map((item, index) => (
                    <DraggableCard
                      key={item?.user_id}
                      item={item}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          );
        })}
      </Box>
    </DragDropContext>
  );
}
