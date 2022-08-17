import { useState, useEffect } from 'react'
import { Card, CardProps } from '../../components/Card/index'
import { Link } from "react-router-dom";
import { Header } from '../../components/Header'
import {Container} from './styles'

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}
export function Home() {

  const [peopleName, setPeopleName] = useState('');
  const [people, setPeople] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddPeople() {
    const newPeople = {
      name: peopleName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setPeople([...people, newPeople])
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/G4bslol')
      const data = await response.json() as ProfileResponse;
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();

  }, [])

  return (
    <>
      <Container>
        <Header />

        <header>
          <h1> Lista de Presença </h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto de Perfil" />
          </div>
        </header>

        <input
          type="text"
          placeholder="Digite o Nome..."
          onChange={(e) => setPeopleName(e.target.value)}
        />

        <div />

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

      </Container>
    </>
  )
}