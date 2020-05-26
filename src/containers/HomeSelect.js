import { connect } from 'react-redux';
import HomeSelect from '../components/HomeSelect';
import { filterLanguage, changeProjectIndex } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  filterLang: lang => {
    dispatch(filterLanguage(lang));
  },
  changeIndex: value => {
    dispatch(changeProjectIndex(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSelect);
