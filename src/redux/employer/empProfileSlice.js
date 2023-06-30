import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ALERT_TYPE, ERROR_MSG } from '../../utils/Constants'
import { postApi, getApi } from "../../utils/Apis"
import { setLoading } from '../configSlice'

const initialState = {
}

export const getCountry = createAsyncThunk('getCountry', async (payload, { dispatch }) => {
    const { data } = await getApi('/regions', true)
    return data
})

export const getEmpProfile = createAsyncThunk('getEmpProfile', async (payload, { dispatch }) => {
    const { data } = await getApi('/admin/employer/profile', true)
    return data
})

export const getTown = createAsyncThunk('getTown', async (payload, { dispatch }) => {
    const { data } = await getApi('/towns', true)
    return data
})

export const getIndustries = createAsyncThunk('getIndustries', async (payload, { dispatch }) => {
    const { data } = await getApi('/industries')
    return data
})

export const getCompanies = createAsyncThunk('getCompanies', async (payload, { dispatch }) => {
    const { data } = await getApi('/admin/employer/allCompanies',true)
    return data
})

export const createInfo = createAsyncThunk('createInfo', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/admin/employer/profile/basics', payload, true)
    dispatch(setLoading(false))
    return data
})

export const createCompInfo = createAsyncThunk('createCompInfo', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/admin/employer/profile/details', payload, true)
    dispatch(setLoading(false))
    return data
})

export const resetPassword = createAsyncThunk('resetPassword', async (payload, { dispatch }) => {
    dispatch(setLoading(true))
    const { data } = await postApi('/reset/password', payload, true)
    dispatch(setLoading(false))
    return data
})


export const empProfileSlice = createSlice({
    name: 'myProfile',
    initialState,
    reducers: {
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(signup.pending, (state, action) => {
    //             // state.status = 'loading'
    //         })
    //         .addCase(signup.fulfilled, (state, action) => {
    //             // state.status = 'succeeded'
    //         })
    //         .addCase(signup.rejected, (state, action) => {
    //             // state.status = 'failed'
    //         })
    // }
})

// Action creators are generated for each case reducer function
export const { } = empProfileSlice.actions

export default empProfileSlice.reducer