import { connect } from 'react-redux';
import Main from '../components/Main';
import StateInterface from '../interfaces/StateInterface';
import ProjectInterface from '../interfaces/ProjectInterface';

import { addProject } from '../slicers/projectsSlicer';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch: any) => ({
  addProject: (project: ProjectInterface) => {
    console.log(project)
    return dispatch(addProject(project))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
