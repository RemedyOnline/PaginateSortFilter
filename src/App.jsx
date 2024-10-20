import { Button } from 'antd';
import Todos from './components/Todos';
import './App.css'
import Gallery from './components/Gallery';


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Pagination... <br />
        Sorting... <br />
        Filtering...
      </h1>
      <Button type="primary">Button</Button>
      <Todos />
      <br />
      <Gallery />
    </>
  )
}

export default App
