import './App.css';
import QuiltedImageList from './components/QuiltedImageList';
import UsePagination from './components/UsePagination';

function App() {

  

  return (
    <div className="App" style={{margin: "10px"}}>
      <UsePagination/> 
      <QuiltedImageList/>
    </div>
  );
}

export default App;
