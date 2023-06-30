import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ALERT_TYPE, ERROR_MSG } from "../../utils/Constants";
import { getApi, postApi } from "../../utils/Apis";
import { setLoading } from "../configSlice";

const initialState = {
  jobs: [],
};
export const getAllPendingJobs = createAsyncThunk(
  "getAllPendingJobs",
  async (payload, { dispatch }) => {
    dispatch(setLoading(true));
    const { data } = await getApi(
        "/admin/pendingjob?lastkey=" + payload, true
    );
    dispatch(setLoading(false));
    return data;
  }
);

export const approveJob = createAsyncThunk('approveJob', async (payload, { dispatch }) => {
  dispatch(setLoading(true))
  const { data } = await postApi('/admin/approvejob', payload, true)
  dispatch(setLoading(false))
  return data
})

export const jobsSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    // setLoading: (state, action) => {
    //     state.loading = action.payload
    // },
    // setAlert: (state, action) => {
    //     state.alert.show = action.payload.show;
    //     state.alert.type = action.payload.type;
    //     state.alert.msg = action.payload.msg;
    // }
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
});
// Action creators are generated for each case reducer function
export const {} = jobsSlice.actions;
export default jobsSlice.reducer;