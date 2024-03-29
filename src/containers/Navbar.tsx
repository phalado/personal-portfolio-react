import { connect } from 'react-redux';
import NavbarMain from '../components/Navbar/NavbarMain';
import StateInterface from '../interfaces/StateInterface';
import ProjectInterface from '../interfaces/ProjectInterface';

import { addProject } from '../slicers/projectsSlicer';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch: any) => ({
  addProject: (project: ProjectInterface) => dispatch(addProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain);
