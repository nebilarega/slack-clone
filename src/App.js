import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Chat from './Components/Chat'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* React-Router -> Chat Screen */}
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
