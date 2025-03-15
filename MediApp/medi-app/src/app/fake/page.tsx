"use client";
import React, { useState } from "react";
import axios from "axios";

// Defina a interface para os dados da API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function FakeApi() {
  // Defina o tipo do estado como User[] ou null
  const [fakeApiData, setFakeApiData] = useState<User[] | null>(null);

  const requestFakeApi = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setFakeApiData(response.data); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Dados Fake Api</h1>
      <button
        className="bg-green-500 p-2 inline-block text-white text-sm"
        onClick={requestFakeApi}
      >
        Buscar dados Fake Api
      </button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Username</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {fakeApiData && 
            fakeApiData.map((data) => (
              <tr key={data.id}>
                <td className="border border-slate-300">{data.name}</td>
                <td className="border border-slate-300 text-center">
                  {data.username}
                </td>
                <td className="border border-slate-300 text-center">
                  {data.email}
                </td>
                <td className="border border-slate-300 text-center">
                  {data.phone}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
