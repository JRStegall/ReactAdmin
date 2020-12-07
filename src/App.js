import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./Components/Users.js";
import { PostList } from "./Components/Post.js";


const dataProvider = jsonServerProvider(
  'https://jsonplaceholder.typicode.com'
);

const App = () => <Admin dataProvider={dataProvider}>
                        <Resource name="users" list={UserList} />
                        <Resource name="posts" list={PostList} edit={EditGuesser} />
                  </Admin>;

export default App;
