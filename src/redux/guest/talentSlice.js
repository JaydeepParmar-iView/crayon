import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ALERT_TYPE, ERROR_MSG } from "../../utils/Constants";
import { getApi } from "../../utils/Apis";
import { setLoading } from "../configSlice";
const initialState = {
  talent: [],
};
export const getTalentList = createAsyncThunk(
  "getTalentList",
  async (payload, { dispatch }) => {
    dispatch(setLoading(true));
    const { data } = await getApi("/gettalentslist?lastKey=" + payload);
    dispatch(setLoading(false));
    return data;
  }
);
// export const getFilteredJobs = createAsyncThunk(
//   "getFilteredJobs",
//   async ({ selectedFilters, lastKey }, { dispatch }) => {
//     dispatch(setLoading(true));
//     const { data } = await getApi(
//       "/getjobslist/filter?industry_id=" +
//         selectedFilters +
//         "&lastKey=" +
//         lastKey
//     );
//     dispatch(setLoading(false));
//     return data;
//   }
// );
export const talentSlice = createSlice({
  name: "configtalent",
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
export const {} = talentSlice.actions;
export default talentSlice.reducer;