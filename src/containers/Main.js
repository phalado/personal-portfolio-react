import { connect } from 'react-redux';
import Main from '../components/Main';
import { addProject } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  addProject: project => {
    dispatch(addProject(project));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
