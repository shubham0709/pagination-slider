import './App.css';
import Pagination from "./components/Pagination.jsx";

function App() {
  const onPageChange = (val) => { }
  return (
    <div>
      <Pagination
        total={10}
        selected={5}
        onPageChange={onPageChange} />
    </div>
  );
}

export default App;
