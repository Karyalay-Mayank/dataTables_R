// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BsFillPencilFill, BsTrashFill } from 'react-icons/bs'
// const DataTable = () => {

//     const [data, setData] = useState([]);
//     const [name, setName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [age, setAge] = useState('');
//     const [communityId, setCommunityId] = useState('');
//     const [id, setId] = useState(null);

//     useEffect(() => {
//         getData();
//     }, []);
//     // console.log('A', data);

//     // const postData = () => {
//     //     let data = { name, mobile, age, communityId };
//     //     fetch('http://localhost:3000/users', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Accept': 'application/json',
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(data)
//     //     }).then((result) => {
//     //         result.json().then((resp) => {
//     //             console.log('Posted', resp);
//     //             getData();

//     //             setId('');
//     //             setName('');
//     //             setMobile('');
//     //             setAge('');
//     //             setCommunityId('');
//     //         })
//     //     })
//     // };

//     const getData = () => {
//         fetch('http://localhost:3000/users').then((result) => {
//             result.json().then((resp) => {
//                 console.log(resp);
//                 setData(resp);
//             })
//         })
//     };

//     const deleteData = (id) => {
//         fetch(`http://localhost:3000/users/${id}`, {
//             method: 'DELETE'
//         }).then((result) => {
//             result.json().then((resp) => {
//                 console.log('Deleted', resp);
//                 getData();
//             })
//         })
//     };

//     const selectUpdate = (id) => {
//         console.log(data[id - 1]);
//         let items = data[id - 1];
//         setId(items.id);
//         setName(items.name);
//         setMobile(items.mobile);
//         setAge(items.age);
//         setCommunityId(items.communityId);
//     };

//     return (
//         <>

//             <div className='mainDiv'>
//                 <Av />
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Department</th>
//                             <th>DOB</th>
//                             <th>Status</th>
//                             <th>Operations</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {
//                             data.map((item, i) =>
//                                 <tr key={i}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.mobile}</td>
//                                     <td>{item.age}</td>
//                                     <td>{item.communityId}</td>
//                                     <td>
//                                         <button onClick={() => deleteData(item.id)}><BsTrashFill /></button>
//                                         <button className='operationBtn' onClick={() => selectUpdate(item.id)}><BsFillPencilFill /></button>
//                                         {/* <Link onClick={() => selectUpdate(item.id)} to='/users/UpdateUser'  ><BsFillPencilFill /></Link> */}
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>

//         </>
//     );
// };

// const Av = (props) => {
//     return (
//         <>
//             <h4>{props.name}</h4>
//             <h4>{props.mobile}</h4>
//             <h4>{props.age}</h4>
//         </>
//     );
// }

// export default DataTable;