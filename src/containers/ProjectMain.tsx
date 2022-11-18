import { connect } from 'react-redux';
import ProjectMain from '../components/Project/ProjectMain';
import { changeProjectIndex } from '../actions';
import StateInterface from '../interfaces/StateInterface';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
  projNumber: state.projNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeIndex: (index: number) => dispatch(changeProjectIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMain);
