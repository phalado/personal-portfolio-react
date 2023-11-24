import { connect } from 'react-redux';
import ProjectMain from './ProjectMain';
import StateInterface from '../../interfaces/StateInterface';

import { changeIndex } from '../../slicers/projNumberSlicer';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
  projNumber: state.projNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeIndex: (index: number) => dispatch(changeIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMain);
