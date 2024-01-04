'use client'; //habilitar as funções do REACT


import { useEffect, useState } from "react";
import axios from "axios";


//declaração do componente
export default function Home() {

  const [projetos, setProjetos] = useState([]);
  //função do REACT executada sempre que a página abre
  useEffect(() => {

    //fazendo uma requisição GET para consulta de projetos na API
    axios.get('http://localhost:8081/api/projeto')
      .then((response) => { //capturar o retorno de sucesso da API
        //armazenar o valor obtido da API na variável do useState
        setProjetos(response.data);
      })

      .catch((e) => { //capturar o retorno de erro da API
        console.log(e);
      });
  });


  //Exibir o código HTML do componente
  return (
    <div>
      <h1>Sistema de Controle de Projetos</h1>
      <p>Listagem de projetos cadastrados:</p>

      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do projeto</th>
          <th>Escopo</th>
          <th>Data de Entrega</th>
          <th>Operações</th>
        </tr>
      </thead>
      <tbody>
        {
          //percorrendo a lista de projetos
          projetos.map((item: any) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.escopo}</td>
              <td>{item.dataEntrega}</td>
              <td></td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}>
            Quantidade de projetos: {projetos.length}
          </td>
        </tr>
      </tfoot>
    </table>

    </div>
  )
}
