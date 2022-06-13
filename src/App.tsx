import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import StoreProvider from './stores/StoreProvider';
import TitlePage from './components/TitlePage/TitlePage';

function App() {
  return (
    <StoreProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<TitlePage />} />
          <Route
            path='/main'
            element={
              <>
                <Form />
                <Result />
              </>
            }
          />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;