import { createSlice } from '@reduxjs/toolkit';
import ProjectInterface from '../interfaces/ProjectInterface';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [] as ProjectInterface[],
  reducers: {
    addProject: (
      state: ProjectInterface[] = [],
      action: { payload: ProjectInterface }
    ) => [...state, action.payload]
  }
})

export const { addProject } = projectsSlice.actions
export default projectsSlice
