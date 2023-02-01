import {Routes, Route} from 'react-router-dom';

import './styles.css';
import Form from './pages/form.js';
import Result from './pages/result.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<Routes>
				<Route path="/" element={<Form />} />
				<Route path="/result" element={<Result />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
