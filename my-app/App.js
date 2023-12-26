import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import api from './src/services/api';


export default function App() {

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');



  async function buscarCep(){
    //A CRASE AGUDA, sempre que for concatenar e o ${cep} representando o cep
    const response = await api.get(`/${cep}/json/`);

    //const response = await api.get('/01001000/json/');
  //a resposta, é dada por meio de um objeto (volta um [object OBJECT], sendo acessado em .data e especificando depois, seja no .logradouro ou .uf ou .cep)
 // alert(response.data.logradouro);

//USANDO OS HOOKS : OS HOOKS VÃO USAR O VALOR DOS SETS PARA DEIXAREM O VALOR DO PRIMEIRO COMPONENTE.
  setRua(response.data.logradouro);
  setBairro(response.data.bairro);
  setCidade(response.data.localidade);
  setEstado(response.data.estado);
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um CEP para pesquisa</Text>

     <TextInput
     style={styles.input}
      value={cep}
      onChangeText={(texto)=>setCep(texto)}
     />

     <Button
     style={styles.botao}

     title='Buscar'
     onPress={buscarCep}
     /> 

     <Text style={styles.valores}>{cep}</Text>
     <Text style={styles.valores}>{rua}</Text>
     <Text style={styles.valores}>{bairro}</Text>
     <Text style={styles.valores}>{cidade}</Text>
     <Text style={styles.valores}>{estado}</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  titulo:{
    fontSize:24,
    fontFamily:'PAPYRUS',
    color:'brown'
  },
  input:{
    width:'80%',
    height:50,
    borderWidth: 1,
    borderColor:'blue',
    fontSize: 18,
    paddingLeft:10,
    marginBottom:10,
    marginTop:10,
    
  },
  valores:{
    fontSize:20,
    fontFamily:'PAPYRUS',
    color:'red'
    
  },
  botao:{
borderRadius:9,
  }
});

// COLOCAR INFORMAÇÕES ADICIONAIS SOBRE A API: RESULTADOS: LOGRADOURO, LUGAR, LOCALIDADE E ETC...