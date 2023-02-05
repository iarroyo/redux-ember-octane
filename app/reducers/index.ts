//eslint-disable-next-line
//@ts-ignore
import { combineReducers } from 'tracked-redux';
import organizations, { OrganizationsReducer } from './organizations';
import users, { UsersReducer } from './users';

export default combineReducers({
  organizations,
  users,
});

export type ReduxState = OrganizationsReducer & UsersReducer;
