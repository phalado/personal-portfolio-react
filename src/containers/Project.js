import { connect } from 'react-redux';
import Project from '../components/Project';
import { changeProjectIndex, addProject } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects,
  index: state.index,
});

const mapDispatchToProps = dispatch => ({
  changeIndex: index => {
    dispatch(changeProjectIndex(index));
  },
  addProject: proj => {
    dispatch(addProject(proj));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
