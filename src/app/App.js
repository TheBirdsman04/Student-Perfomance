import logo from '../logo.svg';
import '../App.css';
import {store} from './store'
import { Provider } from 'react-redux'
import Counter from '../Features/Counter';
import Todo from '../Features/Todo/Todo';

function App() {
  return (
    <Provider   store={store} >
{/* <Counter/> */}
<Todo/>
    </Provider>
  );
}

export default App;
