import { HashRouter as Router, Route, Routes}from 'react-router-dom';
import Layout from './Layout';
import Tasks from '../Page/Tasks';
import CreateTask from '../Page/CreateTask';
import History from '../Page/History';

const App = () => {
  return (<>
    <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' index element={<Tasks title="All Tasks" />}/>
      <Route path='/createTask' element={<CreateTask title="Create Tasks" />}/>
      <Route path='/history' element={<History title="History of Tasks" />}/>
      <Route path='/editTask/:id' element={<CreateTask title="Edit Tasks" />}/>
      </Route>
    </Routes>
    </Router>
    </>
  )
}

export default App