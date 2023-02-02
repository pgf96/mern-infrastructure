import './App.css';
import { useState } from 'react';
import OrderHistoryPage from './OrderHistoryPage/OrderHistoryPage';
import NewOrderPage from './NewOrderPage/NewOrderPage';
import Authpage from './AuthPage/AuthPage';
function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      { user ? <NewOrderPage /> : <Authpage />}
    </div>
  );
}

export default App;
