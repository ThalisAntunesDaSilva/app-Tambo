import React, { useState, useEffect, useRef } from "react";
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
  const [animals, setAnimals] = useState([]);

  async function loadAnimals() {
    const response = await api
      .get("animais")
      .then(console.log("LISTANDO ANIMAIS"))
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

  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <View style={styles.container}>
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
        data={animals}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.animalBox}>
            <Image source={cowImage} style={styles.animalImg}></Image>

            <View style={styles.property}>
              <Text style={styles.vacaProperty}>ID:</Text>
              <Text style={styles.vacaProperty}>Nome:</Text>
              <Text style={styles.vacaProperty}>Data de nascimento:</Text>
              <Text style={styles.vacaProperty}>Peso:</Text>
              <Text style={styles.vacaProperty}>Lote:</Text>
              <Text style={styles.vacaProperty}>Raça:</Text>
              <Text style={styles.vacaProperty}>Produção:</Text>
              <Text style={styles.vacaProperty}>Tipo:</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.vacaValue}>{item.id}</Text>
              <Text style={styles.vacaValue}>{item.nome}</Text>
              <Text style={styles.vacaValue}>14/12/1998</Text>
              <Text style={styles.vacaValue}>{item.peso} Kg</Text>
              <Text style={styles.vacaValue}>{item.lote}</Text>
              <Text style={styles.vacaValue}>{item.raca}</Text>
              <Text style={styles.vacaValue}>{item.producao} L</Text>
              <Text style={styles.vacaValue}>{item.tipo}</Text>
      
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
