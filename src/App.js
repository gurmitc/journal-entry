import './App.css';
import { Header } from './components/Header';
import { AddEntry } from './components/AddEntry';
import { EntryList } from './components/EntryList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="container">
      <Header />
      <AddEntry />
      <EntryList />
    </div>
    </GlobalProvider>
  );
}

export default App;
