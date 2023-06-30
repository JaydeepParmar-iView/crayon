import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getApi, postApi } from "../../utils/Apis"
import { setLoading } from '../configSlice'

const initialState = {
    titles: [],
    industries: [],
    skills: [],
    experiences: [],
    noticePeriod: [],
    qualifications: [],
    currency: [],
    salary: [],
    school: [],
    institution: [],
    qualification: []
}

export const getJob = createAsyncThunk('getJob', async (payload, { dispatch }) => {
    const endPoint = '/job/get?job_id=' + payload
    const { data } = await getApi(endPoint, true)
    return data
})

export const getTitles = createAsyncThunk('getTitles', async (payload, { dispatch }) => {
    const { data } = await getApi('/job/titles', true)
    return data
})

export const getHighQualifications = createAsyncThunk('getHighQualifications', async (payload, { dispatch }) => {
    const { data } = await getApi('/highestQual', true)
    return data
})

export const getSkills = createAsyncThunk('getSkills', async (payload, { dispatch }) => {
    const { data } = await getApi('/skills', true)
    return data
})

export const getWorkExperience = createAsyncThunk('getWorkExperience', async (payload, { dispatch }) => {
    const { data } = await getApi('/experiences', true)
    return data
})

export const getQualification = createAsyncThunk('getQualification', async (payload, { dispatch }) => {
    const { data } = await getApi('/qualifications', true)
    return data
})

export const getRequiredQualification = createAsyncThunk('getRequiredQualification', async (payload, { dispatch }) => {
    const { data } = await getApi('/highestQual', true)
    return data
})

export const getCurrency = createAsyncThunk('getCurrency', async (payload, { dispatch }) => {
    const { data } = await getApi('/currencies', true)
    console.log(data)
    return data
})

export const getRoleTypes = createAsyncThunk('getRoleTypes', async (payload, { dispatch }) => {
    const { data } = await getApi('/job/roletypes', true)
    return data
})

export const getWorkSetup = createAsyncThunk('getWorkSetup', async (payload, { dispatch }) => {
    const { data } = await getApi('/job/worktypes', true)
    return data
})

export const getCountry = createAsyncThunk('getCountry', async (payload, { dispatch }) => {
    const { data } = await getApi('/regions', true)
    return data
})

export const getTown = createAsyncThunk('getTown', async (payload, { dispatch }) => {
    const { data } = await getApi('/towns', true)
    return data
})

export const getSalary = createAsyncThunk('getSalary', async (payload, { dispatch }) => {
    const endPoint = '/salaries?currency_id=' + payload
    const { data } = await getApi(endPoint, true)
    return data
})

export const getPersonalities = createAsyncThunk('getPersonalities', async (payload, { dispatch }) => {
    const { data } = await getApi('/personalities', true)
    return data
})

export const getTraits= createAsyncThunk('getTraits', async (payload, { dispatch }) => {
    const { data } = await getApi('/job/trait', true)
    return data
})

export const getTools = createAsyncThunk('getTools', async (payload, { dispatch }) => {
    const { data } = await getApi('/tools', true)
    return data
})

export const addBasicData = createAsyncThunk('addBasicData', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/job/create/basics', payload, true)
    dispatch(setLoading(false))
    return data
})

export const addDetailData = createAsyncThunk('addWorkData', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/job/create/details', payload, true)
    dispatch(setLoading(false))
    return data
})

export const addCultureData = createAsyncThunk('addStudyData', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/job/create/culture', payload, true)
    dispatch(setLoading(false))
    return data
})

export const postJobSlice = createSlice({
    name: 'postJob',
    initialState,
    reducers: {
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(getTitles.fulfilled, (state, action) => {
    //             state.titles = action.payload.data.map(title => {
    //                 title.id = title.job_title_id;
    //                 title.name = title.title;
    //                 return title
    //             })
    //         })
    // }
})

// Action creators are generated for each case reducer function
export const { } = postJobSlice.actions

export default postJobSlice.reducer