import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import cowImage from "../../assets/cowImage.jpg";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

export default function Animals({ navigation }) {
  
  const [vacas, setVacas] = useState([]);
  
  
  async function loadAnimals(){
   const response = await api.get('/vacas')
    setVacas(response.data);
    
  }




  useEffect(() => {loadAnimals(), []});
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => {}}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate("AddAnimal")}
        >
          <Text style={styles.textButton}>Novo +</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <TextInput style={styles.inputSearch}>
          Pesquisa
          <Feather name="search" size={15} color="#000000" onPress={() => {}} />
        </TextInput>
      </View>
      <View style={styles.filterList}>
        <TouchableOpacity style={styles.filterbutton}>
          <Text style={styles.filterTextButton}>Vaca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterbutton}>
          <Text style={styles.filterTextButton}>Touro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterbutton}>
          <Text style={styles.filterTextButton}>Cria</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={vacas}
        style={styles.animalsList}
        keyExtractor={(item,index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (

          
          <View style={styles.animalBox}>
            <Image source={cowImage} style={styles.animalImg}></Image>

            <View style={styles.property}>
              <Text style={styles.vacaProperty}>ID:</Text>
              <Text style={styles.vacaProperty}>Nome:</Text>
              <Text style={styles.vacaProperty}>Tipo:</Text>
              <Text style={styles.vacaProperty}>Média:</Text>
              <Text style={styles.vacaProperty}>Estado:</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.vacaValue}>{item.id}</Text>
              <Text style={styles.vacaValue}>{item.nome}</Text>
              <Text style={styles.vacaValue}>Com cria</Text>
              <Text style={styles.vacaValue}>Vaca</Text>
              <Text style={styles.vacaValue}>222 L/Mês</Text>
            </View>

            <TouchableOpacity style={styles.Button}>
              <Feather
                name="trash"
                style={styles.deleteButton}
                size={25}
                color="#000000"
                onPress={() => deleteAnimal(vaca.id)}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
