import { useState, useEffect } from 'react'
import './styles.css';
import { Card } from '../../components/Card/index'

export function Home() {

  const [peopleName, setPeopleName] = useState();
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});
  
  
  function handleAddPeople() {
    const newPeople = {
      name: peopleName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setPeople(prevState => [...prevState, newPeople])
  }


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/G4bslol')
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();

  }, [])

  return (
    <>

      <div className="container">

        <header>
            <h1> Lista de Presença </h1>
          <div>
            <strong> {user.name} </strong>  
            <img src={user.avatar} alt="Foto de Perfil" />
          </div>  
        </header> 

          <input
          type="text"
          placeholder="Digite o Nome..."
          onChange={evt => setPeopleName(evt.target.value)}
          />

          <button
            
            type="button"
            onClick={handleAddPeople} 
          
          >Adicionar
          </button>
      
        {
          people.map(people => 
            <Card
            
              key={people.time}
              name={people.name}
              time={people.time}
              
            /> 
            )
        }

      </div>
    </>
    )
}
