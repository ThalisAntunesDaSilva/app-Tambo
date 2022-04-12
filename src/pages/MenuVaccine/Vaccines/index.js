import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import logoImg from "../../../assets/logo.png";
import cowImage from "../../../assets/cowImage.jpg";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";
//import { useNavigation } from '@react-navigation/native';

function Vaccines({ navigation }) {
  const [vaccines, setVaccines] = useState([]);
  //const navigation = useNavigation();

  // function navigateToAnimal(animalId) {
  //   navigation.navigate('Animal',  animalId );
  // }

  async function loadVaccines() {
    const response = await api
      .get("saudes")
      .then(console.log("LISTANDO FICHAS DE SAÚDE"))
      .catch((err) => console.log(err));
    setVaccines(response.data);
  }

  async function deleteAnimal(id) {
    await api
      .delete("saudes/saude", {
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

  useEffect(() => {
    loadVaccines();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Lista de fichas</Text>
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
          onPress={() => navigation.navigate("AddAnimal")}
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
        data={vaccines}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.animalBox}>
            <View style={styles.property}>
              <Text style={styles.vacaProperty}>ID:</Text>
              <Text style={styles.vacaProperty}>Nome do animal:</Text>
              <Text style={styles.vacaProperty}>Vacina:</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.vacaValue}>{item.id}</Text>
              <Text style={styles.vacaValue}>{item.animal.nome}</Text>
              <Text style={styles.vacaValue}>{item.vacina}</Text>
            </View>

            <TouchableOpacity
              style={styles.trashButton}
              onPress={() => deleteAnimal(item.id)}
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

export default Vaccines;
