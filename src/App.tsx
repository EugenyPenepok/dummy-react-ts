import * as React from 'react';
import { hot } from 'react-hot-loader/root';

interface Props {
  name: string;
}

const App = ({ name }: Props) => <h1>Hello {name}</h1>;

export default hot(App);
