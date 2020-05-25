import { connect } from 'react-redux';
import Project from '../components/Project';
import { changeProjectIndex } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects,
  index: state.index,
});

const mapDispatchToProps = dispatch => ({
  changeIndex: index => {
    dispatch(changeProjectIndex(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
