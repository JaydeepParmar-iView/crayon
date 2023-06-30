import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import locale from '../../../i18n/locale'
import { POST_JOB_STEPS } from '../../../utils/Constants';
import Paper from '@mui/material/Paper';
import TextEditor from './TextEditor';
import InputBox from '../../common/InputBox'
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { isEmpty } from 'lodash';

const StyledButton = styled(Button)(({ theme }) => ({
    marginRight: '24px',
    fontSize: '14px',
    width: '150px',
    border: `2px solid ${theme.palette.redButton100.main}`,
    '& .MuiSvgIcon-root': {
        fontSize: '16px'
    }
}))

const DETAIL = {
    company_id: 10,
    role_summary: "",
    role_responsibilty: "",
    role_requirements: ""
}

export default function TheDetails({ jobId, onSubmit, detail }) {
    const i18n = locale.en;

    const [detailData, setDetailData] = useState({ ...DETAIL, job_id: jobId})

    useEffect(() => {
        if (!isEmpty(detail)) {
            setDetailData({ ...detail, job_id: jobId })
            onSubmit('detail', { ...detail, job_id: jobId})
        }
    }, [detail])

    const handleInputChange = (inputText, type) => {
        const newDetailData = {
            ...detailData,
            [type]: inputText
        }
        setDetailData(newDetailData)
        onSubmit('detail', newDetailData)
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <StyledButton variant="outlined" color="redButton100">{i18n['postAJob.uploadSpec']}</StyledButton>
                <StyledButton sx={{ opacity: 0.5 }} variant="contained" color="redButton100">{i18n['postAJob.scrapeSpec']}</StyledButton>
            </Box>

            <Typography sx={{
                fontSize: '20px',
                fontWeight: 700,
                ml: 1,
                mb: 1
            }}>{POST_JOB_STEPS[1]}</Typography>

            <Box>
                <TextEditor value={detailData.role_summary} title={i18n['postAJob.howTheyWillRole']} type='role_summary' onInputCHange={handleInputChange} />
            </Box>
            <Box sx={{ mt: 3 }}>
                <TextEditor value={detailData.role_responsibilty} title={i18n['postAJob.whatTheyWillDo']} type='role_responsibilty' onInputCHange={handleInputChange} />
            </Box>
            <Box sx={{ mt: 3 }}>
                <TextEditor value={detailData.role_requirements} title={i18n['postAJob.whatTheyWillNeed']} type='role_requirements' onInputCHange={handleInputChange} />
            </Box>
        </Box>

    )
}