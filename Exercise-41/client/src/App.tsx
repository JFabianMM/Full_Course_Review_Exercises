import './App.css';
import LineChart from './components/LineChart/LineChart';
import Frame from './components/Frame';

function App() {
  
  return (
      <div className="chart" style={{width:"450px", height: "230px", margin: 20}}>
        {/* <LineChart/> */}
        <Frame/>
      </div>
  );
}

export default App;





