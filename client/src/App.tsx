import { useState, useEffect } from 'react'
import axios from 'axios';
import CommitList from './components/CommitList'
import Pagination from './components/Pagination'
import Error from './components/Error'
import { Commit } from './commit.interface';
import "./App.css"



import './App.css'
const App = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommits() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<Commit[]>(`http://localhost:5000/commit-history`);
        const commitsWithInfo = response.data.map(commit => ({
          ...commit,
          author: commit.commit.author.name,
          date: commit.commit.author.date,
        }));
        setCommits(commitsWithInfo);
      } catch (error) {
        setError('Error fetching commit history from the server.');
      }

      setLoading(false);
    }

    fetchCommits();
  }, [page]);

  return (
    <div className="App">
      <h1>Commit History</h1>
      {error && <Error message={error} />}
      <CommitList commits={commits} />
      <Pagination page={page} onPageChange={setPage} loading={loading} />
    </div>
  );
}

export default App;