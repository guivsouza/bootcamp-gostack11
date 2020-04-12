import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

export default function App(){
  const [projects, setProjects] = useState([])

  //useState array 2 posições
  //1. Variavel com valor inicial
  //2. Função para atualizar valor

  ///*
  useEffect(()=>{
      api.get('projects').then(response =>{
          //console.log(response.data)
          setProjects(response.data)
      })
  }, [])  
  //*/
  
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
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      
      <SafeAreaView style={styles.container}>        
        <FlatList           
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>        
      </SafeAreaView>

      {/*<View style={styles.container}>
        {projects.map( project => (
          <Text style={styles.title} key={project.id}>{project.title}</Text>
          )
        )}
        </View>*/}
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#7159c1',
    //justifyContent:'center',
    //alignItems:'center'
  },
  title:{
    color:'#fff',
    fontSize:32,
    fontWeight:'bold'
  },
  button:{
    backgroundColor:'#fff',
    margin:20,
    height:50,
    borderRadius:4,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    color:'#7159c1',
    fontSize:18,
    fontWeight:'bold'
  } 
})