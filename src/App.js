import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import config from './config/config';
import UserCard from './components/UserCard';
import Loader from './components/Loader';
import './App.css';
import Pagination from './components/Pagination';
import ExportCsv from './components/ExportCsv';

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, [currentPage]);

  const loadNext = () => {
    setCurrentPage(currentPage + 1);
  }

  const loadPrevious = () => {
    setCurrentPage(currentPage - 1);
  }

  const loadUsers = () => {

    setIsLoading(true);
    axios.get(`${config.apiUrl}/?page=${currentPage}&results=${config.perPage}&inc=${config.incFields}`).then(res => {
      setIsLoading(false);
      setUsers(res.data.results);
    }).catch(err => {
      console.log(err.response);
    });
  }
  return (
    <div className="container">
      <ExportCsv users={users} pageNo={currentPage}/>
      {isLoading ? <Loader/> :
        <Fragment>
          <div className="row">
              {users.map((user, i) => {
                return(
                  <UserCard user={user} key={`user-card-${i}`}/>
                )
              })}

          </div>
          <Pagination loadNext={loadNext} loadPrevious={loadPrevious} currentPage={currentPage}/>
        </Fragment>
      }

  </div>
  );
}

export default App;
