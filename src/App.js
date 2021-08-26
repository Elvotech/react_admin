import * as React from 'react';
import {Admin, Resource} from 'react-admin';
import {UserList} from './users';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import {PostList, postEdit, postCreate} from './posts';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard = {Dashboard} authProvider = {authProvider} dataProvider = {dataProvider}>
    <Resource name = "posts" list = {PostList} edit = {postEdit} create = {postCreate} icon = {PostIcon} />
    <Resource name = "users" list = {UserList} icon = {UserIcon} />
  </Admin>
);
export default App;