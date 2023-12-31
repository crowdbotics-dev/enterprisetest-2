import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bhfh_list = createAsyncThunk(
  "bhfhs/api_v1_bhfh_list",
  async payload => {
    const response = await apiService.api_v1_bhfh_list(payload)
    return response.data
  }
)
export const api_v1_bhfh_create = createAsyncThunk(
  "bhfhs/api_v1_bhfh_create",
  async payload => {
    const response = await apiService.api_v1_bhfh_create(payload)
    return response.data
  }
)
export const api_v1_bhfh_retrieve = createAsyncThunk(
  "bhfhs/api_v1_bhfh_retrieve",
  async payload => {
    const response = await apiService.api_v1_bhfh_retrieve(payload)
    return response.data
  }
)
export const api_v1_bhfh_update = createAsyncThunk(
  "bhfhs/api_v1_bhfh_update",
  async payload => {
    const response = await apiService.api_v1_bhfh_update(payload)
    return response.data
  }
)
export const api_v1_bhfh_partial_update = createAsyncThunk(
  "bhfhs/api_v1_bhfh_partial_update",
  async payload => {
    const response = await apiService.api_v1_bhfh_partial_update(payload)
    return response.data
  }
)
export const api_v1_bhfh_destroy = createAsyncThunk(
  "bhfhs/api_v1_bhfh_destroy",
  async payload => {
    const response = await apiService.api_v1_bhfh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bhfhsSlice = createSlice({
  name: "bhfhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bhfh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bhfh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bhfh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bhfh_list,
  api_v1_bhfh_create,
  api_v1_bhfh_retrieve,
  api_v1_bhfh_update,
  api_v1_bhfh_partial_update,
  api_v1_bhfh_destroy,
  slice: bhfhsSlice
}
