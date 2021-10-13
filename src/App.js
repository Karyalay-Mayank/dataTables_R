import React, { useState, useEffect } from 'react';
import { BsFillPencilFill, BsTrashFill } from 'react-icons/bs';
import Pagination from './Paginate';

const App = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [communityId, setCommunityId] = useState('');
  const [id, setId] = useState(null);

  // Hide and Show Update and Add buttons.
  const [status, setStatus] = useState(false);

  // Pagination Destructuring.
  const [currentPage, setcurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  // Searching Destructuting.
  const [query, setQuery] = useState('');


  // useEfect for Retreiving data.
  useEffect(() => {
    getData();
  }, []);

  // Get Request
  const getData = () => {
    fetch('http://localhost:3000/users').then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp);
      })
    })
  };


  // Get Current Data.
  const indexofLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexofLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexofLastData);

  // Pagination: Change Page.
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber)
  }

  // Post Request.
  const postData = () => {
    let data = { name, mobile, age, communityId };
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.log('Posted', resp);
        getData();

        setId('');
        setName('');
        setMobile('');
        setAge('');
        setCommunityId('');
      })
    })
  };

  // Delete Request.
  const deleteData = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log('Deleted', resp);
        getData();
      })
    })
  };

  // Select desired row.
  const selectUpdate = (id) => {
    setStatus(true);
    console.log(data[id - 1]);
    let items = data[id - 1];
    setId(items.id);
    setName(items.name);
    setMobile(items.mobile);
    setAge(items.age);
    setCommunityId(items.communityId);
  };

  // Update Request.
  const updateData = () => {
    let data = { name, mobile, age, communityId, id }
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
        setName('');
        setMobile('');
        setAge('');
        setCommunityId('');
        setStatus(false);
      })
    })
  }

  // Return JSX
  return (
    <>
      <div className='container'>
        <div className='mainDiv'>
          <div style={{ display: 'flex' }}>
            <input type='search'
              placeholder='Enter Keywords'
              style={{ width: '25%' }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Age</th>
                <th>Community ID</th>
                <th>Operations</th>
              </tr>
            </thead>

            <tbody>
              {
                currentData.filter((value) => {
                  if (query === '') {
                    return value;
                  }
                  else if (
                    value.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return value;
                  }
                })
                  .map((item, i) =>
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.mobile}</td>
                      <td>{item.age}</td>
                      <td>{item.communityId}</td>
                      <td>
                        <button className='operationBtn1' onClick={() => deleteData(item.id)}><BsTrashFill /></button>
                        <button className='operationBtn2' onClick={() => selectUpdate(item.id)}><BsFillPencilFill /></button>
                      </td>
                    </tr>
                  )
              }
            </tbody>
          </table>
          <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} />
        </div>

        {/* Form */}
        <div className="fieldContainer">
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='text'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type='text'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type='text'
            value={communityId}
            onChange={(e) => setCommunityId(e.target.value)}
          />

          <br />

          {
            status ? null :
              <button
                type='button'
                className='btnAdd'
                onClick={postData}>Add User
              </button>
          }

          {
            status ?
              <button
                onClick={updateData}>Update Data
              </button>
              : null
          }
        </div>
      </div>
    </>
  );
};

export default App;











































































































// import React from 'react';
// import DataTable from './DataTable';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import PostData from './users/PostData';
// import UpdateData from './users/UpdateData';


// const App = () => {

//   return (
//     <>
//       <Router>
//         <header>
//           <span>Data Table</span>
//           <Link to='/'>Home</Link>
//           <Link to='/users/AddUser'>Add User</Link>
//         </header>
//         <Switch>

//           <Route path="/" exact={true}>
//             <DataTable />
//           </Route>

//           <Route path='/users/AddUser' component={PostData} />
//           <Route path='/users/UpdateUser/:ids' component={UpdateData} />
//         </Switch>
//       </Router>
//     </>
//   );
// };

// export default App;