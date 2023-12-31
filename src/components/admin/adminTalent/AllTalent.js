import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import locale from '../../../i18n/locale'
import Accordion from '@mui/material/Accordion';
import TextField from '@mui/material/TextField'
import AllTalentCard from '../adminTalent/AllTalentCard';
import { ADMIN_TALENT_JOBS } from '../../../utils/Constants';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../assets/search.svg'

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginTop: '4px',
    borderRadius: '5px',
    position: 'unset',
    '& .MuiAccordionSummary-root': {
        // alignItems: 'start'
    },
    '& .MuiAccordionSummary-content': {
        flexDirection: 'column',
        // margin: 0,
        '.summaryBox': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginRight: '8px',
            '& .MuiButtonBase-root': {
                fontSize: 10,
                fontWeight: 700,
                minWidth: 29,
                padding: '2px 8px',
                // borderRadius: 3,
                height: '20px',
                boxShadow: 'none'
            }
        },
        '.summaryBoxContent': {
            display: 'flex',
            alignItems: 'center'
        },
        '.profileAvatar': {
            height: 20,
            width: 20,
            borderRadius: 6
        },

        '& .MuiTypography-root': {
            // fontWeight: 700,
            // fontSize: '20px',
        },
        '& .MuiButtonBase-root': {
            // padding: '2px 8px',
            // fontSize: 10,
            // fontWeight: 700,
            // minWidth: 30,
            // boxShadow: 'none',
            // borderRadius: 2
        }
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.black,
        // marginRight: '32px',
        // position: 'absolute',
        // right: '40px',
        // top: '12px',
        '& .MuiSvgIcon-root': {
            fontSize: '1.8rem'
        },

    },
    '& .MuiCollapse-root': {
        '& .MuiAccordionDetails-root': {
            // padding: 0,
            '& .MuiButtonBase-root': {
                // fontSize: 10,
                // fontWeight: 700,
                // minWidth: 30,
                // padding: '1px 4px',
                // borderRadius: 3
            },
            '.contentBox': {
                // display: 'flex',
                // justifyContent: 'space-between',
            },
        }
    },
    '& .MuiButtonBase-root': {
        // boxShadow: 'none',
        padding: '0 16px'
    }
}));

const StyledTextField = styled(OutlinedInput)(({ theme }) => ({
    width: '100%',
    margin: '8px 0',
    background: theme.palette.white,
    borderRadius: '20px',
    paddingRight: '6px',
    // paddingLeft: '16px',
    // '& .MuiInputLabel-outlined': {
    //     marginLeft: '4px',
    //     color: theme.palette.placeholder
    // },
    '& .MuiOutlinedInput-notchedOutline': {
        // background: theme.palette.white,
        borderColor: theme.palette.grayBorder,
        borderRadius: '20px',
    }
}))

export default function AllTalent() {
    const i18n = locale.en;
    const theme = useTheme()

    return (
        <Box sx={{ ml: 6 }}>
            <Typography sx={{
                fontSize: '36px',
                fontWeight: 700,
                // ml: 6
            }}>{i18n['allTalent.title']}</Typography>
            {/* <StyledTextField placeholder='quick search' id="search" size="small" /> */}
            <StyledTextField
                id="outlined-adornment-search"
                type='text'
                size='small'
                placeholder='quick search'
                endAdornment={
                    <InputAdornment position="end">
                        <Box
                            component="img"
                            className="profileAvatar"
                            alt="crayon logo"
                            src={search}
                            sx={{
                                width: '30px'
                            }}
                        />
                    </InputAdornment>
                }
            />
            {ADMIN_TALENT_JOBS.map((job, index) => (
                <AllTalentCard jobContent={job} key={job.id} />
            ))}

        </Box>
    );
}