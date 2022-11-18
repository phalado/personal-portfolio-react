import { connect } from 'react-redux';
import HomeSelect from '../components/Home/HomeSelect';
import StateInterface from '../interfaces/StateInterface';

import { filterLanguage, changeProjectIndex } from '../actions';

const mapStateToProps = (state: StateInterface) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch: any) => ({
  filterLang: (lang: string) => dispatch(filterLanguage(lang)),
  changeIndex: (value: number) => dispatch(changeProjectIndex(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSelect);
