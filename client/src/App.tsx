import { useState, useEffect } from 'react'
import axios from 'axios';
import CommitList from './components/CommitList'
import Pagination from './components/Pagination'
import Error from './components/Error'
import { Commit } from './commit.interface';
import SearchBar from './components/SearchBar';
import "./App.css"


const App = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [filteredCommits, setFilteredCommits] = useState<Commit[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommits() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<Commit[]>(`http://localhost:5000/commit-history`);
        setCommits(response.data);
        setFilteredCommits(response.data);
      } catch (error) {
        setError('Error fetching commit history from the server.');
      }

      setLoading(false);
    }

    fetchCommits();
  }, []);


  const handleSearch = (searchText: string) => {
    const filtered = commits.filter(commit =>
      commit.commit.message.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCommits(filtered);
  };

  return (
    <div className="App">
      <h1>Commit History</h1>
      {error && <Error message={error} />}
      <CommitList commits={filteredCommits} />
      <SearchBar onSearch={handleSearch} />
      <Pagination page={page} onPageChange={setPage} loading={loading} />
    </div>
  );
};

export default App;