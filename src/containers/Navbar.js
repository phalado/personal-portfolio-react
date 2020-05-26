import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { addProject } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  addProject: project => {
    dispatch(addProject(project));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
