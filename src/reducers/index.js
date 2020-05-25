import { combineReducers } from 'redux';
import projects from './projects';
import language from './language';
import projNumber from './projNumber';

const rootReducer = combineReducers({
  projects,
  language,
  projNumber,
});

export default rootReducer;
