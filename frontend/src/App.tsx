import { Provider } from 'react-redux';
import store from './store';   // importa o store que você criou em store/index.ts
import StudentsPage from './pages/StudentsPage';

function App() {
  return (
    <Provider store={store}>
      <StudentsPage />
    </Provider>
  );
}

export default App;