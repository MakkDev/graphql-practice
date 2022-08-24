import './App.css';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const GET_QUERY = gql`
query Query {
  message
  year
  person {
    name
    age
  }
  people {
    age
    name
  }
  todos {
    task
    id
    person
  }
}
`


function App() {

  const { loading, error, data } = useQuery(GET_QUERY);
  useEffect(() => {
    console.log(data)
  })
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    data.todos.map(todo => {
     return <div key={todo.id} className="App">
        {todo.task}
      </div>     
    })
  );
}

export default App;
