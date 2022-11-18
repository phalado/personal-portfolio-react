import { connect } from 'react-redux';
import Main from '../components/Main';
import { addProject } from '../actions';
import StateInterface from '../interfaces/StateInterface';
import ProjectInterface from '../interfaces/ProjectInterface';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch: any) => ({
  addProject: (project: ProjectInterface) => dispatch(addProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
