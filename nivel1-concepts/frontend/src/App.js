import React, { useState, useEffect } from 'react'
import api from './services/api'

import Header from './components/Header'

import './App.css'
import backImage from './assets/react.png'

function App(){
    const [projects, setProjects] = useState([])

    //useState array 2 posições
    //1. Variavel com valor inicial
    //2. Função para atualizar valor

    
    useEffect(()=>{
        api.get('projects').then(response =>{
            setProjects(response.data)
        })
    }, [])
    
    
    async function  handleAddProject(){
        //projects.push(`Novo projeto ${Date.now()}`)
        //setProjects([...projects, `Novo projeto ${Date.now()}`])

        const response = await api.post('projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: "Souza"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return (
    <>
    <Header title="Homepage">
        
        {
        //<img src={backImage}/>
        }

        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        
        <ul>
          {projects.map( project => <li key={project.id}>{project.title}</li>)}
        </ul>
        
    </Header>    
    {/*
    <Header title="Homepage">
        <ul>
            <li>Homepage</li>
            <li>Login</li>
        </ul>
    </Header>
    <Header title="Projects">
        <ul>
            <li>Homepage</li>
            <li>Login</li>
            <li>Users</li>
        </ul>
    </Header>
    */}
    </>
    )
}

export default App