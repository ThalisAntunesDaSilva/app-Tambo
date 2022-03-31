import React, {useState} from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
} from "react-native";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";

import styles from "./styles";

export default function AddAnimal() {

const [name, setName ] = useState("");
const [isLoading, setIsLoading] = useState(false);

const onChangeNameHandler = (name) => {
  setName(name);
  console.log(name);
};



const postAnimal = async (event) => {
  console.log(name);
 await api.post(`/vacas/vaca`, {
   
      nome: name
    ,
  }).then(response => {
    console.log(response.data)
  })
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Adicione um animal</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>Nome do animal</Text>
        
        <TextInput style={styles.input}
        value={name}
        onChangeText={onChangeNameHandler}
        ></TextInput>

        
        <Text style={styles.text}>Idade</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.text}>Tipo</Text>
        <View style={styles.picker}>
          <Picker>
            <Picker.Item label="Vaca" value="vaca" />
            <Picker.Item label="Touro" value="touro" />
            <Picker.Item label="Bezerro" value="Bezerro" />

          </Picker>
        </View>

        <Text style={styles.text}>Estado atual</Text>
        <View style={styles.picker}>
          <Picker style={() => {}}></Picker>
        </View>
        <TouchableOpacity onPress={() => postAnimal()} style={styles.button}>
      <Text style={styles.textButton}>Ok</Text>
    </TouchableOpacity>
      </View>
  
      <View />

   
    </View>
  );
}
