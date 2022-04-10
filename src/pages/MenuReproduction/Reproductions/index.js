import React, { useState, useEffect } from "react";
import {BiDna} from 'react-icons/bi'
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  
} from "react-native";
import logoImg from "../../../assets/logo.png";
import cowImage from "../../../assets/cowImage.jpg";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";
//import { useNavigation } from '@react-navigation/native';

export default function Reproductions({ navigation }) {
  const [animals, setAnimals] = useState([]);
  //const navigation = useNavigation();
 
 // function navigateToAnimal(animalId) {
 //   navigation.navigate('Animal',  animalId );
 // }

  async function loadReproductions() {
    const response = await api
      .get("reproducoes")
      .then(console.log("LISTANDO REPRODUÇÕES"))
      .catch((err) => console.log(err));
    setAnimals(response.data);
  }

  async function deleteAnimal(id) {
    await api
      .delete("animais/animal", {
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log("APAGANDO");
        console.log(response);
        loadAnimals();
      })
      .catch((err) => console.log(err));
  }

//  useEffect(() => {
//    loadReproductions();
//  }, []);

  return (
    <View style={styles.container}>
         <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Lista de reproduções</Text>
      </View>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Home")}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate("AddReproductions")}
        >
          <Text style={styles.textButton}>Novo +</Text>
        </TouchableOpacity>
      </View>
      {/*  <View style={styles.searchBox}>
        <TextInput style={styles.inputSearch}>
         
          <Feather name="search" size={15} color="#000000" onPress={() => {}} />
        </TextInput>
  </View> */}

      <FlatList
        data={[]}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.animalBox}>
           <BiDna />

            <View style={styles.property}>
              <Text style={styles.vacaProperty}></Text>
              <Text style={styles.vacaProperty}>Nome mãe:</Text>
              <Text style={styles.vacaProperty}>Nome pai/reprodutor:</Text>
              <Text style={styles.vacaProperty}>Data inicio:</Text>
              <Text style={styles.vacaProperty}>Data fim:</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.vacaValue}>{item.mae}</Text>
              <Text style={styles.vacaValue}>{item.pai}</Text>
              <Text style={styles.vacaValue}>14/12/1998</Text>
              <Text style={styles.vacaValue}>13/12/2001</Text>
            </View>

            <TouchableOpacity
              style={styles.trashButton}
              onPress={() => {}}
              hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            >
              <Feather
                name="trash"
                style={styles.deleteButton}
                size={25}
                color="#000000"
              />
            </TouchableOpacity>
        
          </View>
        )} 
      />
    </View>
  );
}
