import React ,{useState }from 'react';
//import "./style.css";
import UserList from "./UserList";


const data =[
  {id:1, name:"John", email:"john@gmail.com", age:25, color:"Lightcyan"}, 
  {id:2, name:"William", email:"william@gmail.com", age:34, color:"hondeydew"}, 
  {id:3, name:"Michael", email:"michael@gmail.com", age:45, color:"hmistyrose"}, 
]
   

const App = () => {
  const [users,setUsers] = useState(data); 

  const changeColor = (id,color) => {
    setUsers(
      users.map(user => (user.id === id ? {...user,color:color} : user ))
    );
  }
  return   (
  <div>
  <header>
    <h1> Welcome to our system</h1>
  </header>
  <UserList users={users}   changeColor={changeColor} />

  </div>
  
  );
};

export default App;