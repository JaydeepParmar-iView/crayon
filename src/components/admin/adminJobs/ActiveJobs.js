import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import locale from '../../../i18n/locale'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ActiveJobCard from './ActiveJobCard';
import { ADMIN_ACTIVE_JOBS } from '../../../utils/Constants';
import { useDispatch } from 'react-redux';
import { setAlert } from "../../../redux/configSlice";
import { ALERT_TYPE } from "../../../utils/Constants";
import { Grid } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllPendingJobs } from '../../../redux/admin/jobsSlice';
import { getAllJobs } from '../../../redux/guest/jobsSlice';

const StyledSelect = styled(Select)(({ theme }) => ({
    width: '49%',
    // marginRight: '16px',
    borderRadius: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.black
    }
}))

export default function ActiveJobs() {
    const i18n = locale.en;
    const theme = useTheme()
    const navigate = useNavigate()
    const { pathname } = useLocation()
  const [allJobs, setAllJobs] = useState([]);
  const dispatch = useDispatch();
  const [lastKey, setLastKey] = useState("");

    const onHandleManageTalent = (activeJobId) => {
        navigate(`${pathname}/${activeJobId}`)
    }

    const getJobList = async (lastkeyy) => {
            const { payload } = await dispatch(getAllJobs(lastkeyy));
            console.log(payload);
            if (payload?.status == "success") {
              setLastKey(payload.data[payload.data.length - 1]?.job_id);
              setAllJobs((prevState) => [...prevState, ...payload.data]);
            } else { 
              dispatch(
                setAlert({
                  show: true,
                  type: ALERT_TYPE.ERROR,
                  msg: "Something went wrong! please relaod the window",
                })
              );
            }
          }
          useEffect(()=>{
              getJobList(lastKey)
          },[])

    return (
        <Box sx={{ ml: 6 }}>
            <Typography sx={{
                fontSize: '36px',
                fontWeight: 700,
                // ml: 6
            }}>{i18n['activeJobs.title']} ({allJobs[0]?.TotalJobs})</Typography>
            <Box sx={{
                mt: 1,
            }}>
                <StyledSelect
                    sx={{ mr: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'stack' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Quick search</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
                <StyledSelect
                    sx={{ ml: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'filter' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select manager</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
            </Box>
            <Box sx={{
                mt: 1,
            }}>
                <StyledSelect
                    sx={{ mr: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'stack' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select stage</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
                <StyledSelect
                    sx={{ ml: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'filter' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select type</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
            </Box>
            <Button variant="contained" color="redButton" sx={{ width: '30%', mt: 2 }}>{i18n['activeJobs.update']}</Button>
            <Grid
        container
        spacing={2}
        flexDirection={"column"}
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "30px",
        }}
      >
         <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={allJobs.length}
          next={() =>
            getJobList(lastKey)
          }
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
            <Box sx={{
                mt: 2,
            }}>
                {allJobs?.map((job, index) => (
                    <ActiveJobCard key={index} jobContent={job} onManageTalent={onHandleManageTalent} />
                ))}
            </Box>
            </InfiniteScroll>
         </Grid>
        </Box>
    );
}