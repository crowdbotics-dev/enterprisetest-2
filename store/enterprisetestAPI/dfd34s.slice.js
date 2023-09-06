import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dfd34_list = createAsyncThunk(
  "dfd34s/api_v1_dfd34_list",
  async payload => {
    const response = await apiService.api_v1_dfd34_list(payload)
    return response.data
  }
)
export const api_v1_dfd34_create = createAsyncThunk(
  "dfd34s/api_v1_dfd34_create",
  async payload => {
    const response = await apiService.api_v1_dfd34_create(payload)
    return response.data
  }
)
export const api_v1_dfd34_retrieve = createAsyncThunk(
  "dfd34s/api_v1_dfd34_retrieve",
  async payload => {
    const response = await apiService.api_v1_dfd34_retrieve(payload)
    return response.data
  }
)
export const api_v1_dfd34_update = createAsyncThunk(
  "dfd34s/api_v1_dfd34_update",
  async payload => {
    const response = await apiService.api_v1_dfd34_update(payload)
    return response.data
  }
)
export const api_v1_dfd34_partial_update = createAsyncThunk(
  "dfd34s/api_v1_dfd34_partial_update",
  async payload => {
    const response = await apiService.api_v1_dfd34_partial_update(payload)
    return response.data
  }
)
export const api_v1_dfd34_destroy = createAsyncThunk(
  "dfd34s/api_v1_dfd34_destroy",
  async payload => {
    const response = await apiService.api_v1_dfd34_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dfd34sSlice = createSlice({
  name: "dfd34s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_dfd34_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dfd34_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dfd34_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_dfd34_list,
  api_v1_dfd34_create,
  api_v1_dfd34_retrieve,
  api_v1_dfd34_update,
  api_v1_dfd34_partial_update,
  api_v1_dfd34_destroy,
  slice: dfd34sSlice
}
