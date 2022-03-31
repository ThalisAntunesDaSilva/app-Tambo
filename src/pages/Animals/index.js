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
  const [vacas, setVacas] = useState([]);
  const [touros, setTouros] = useState([]);
  const [crias, setCrias] = useState([]);
  const [data, setData] = useState([]);

  async function loadAnimals() {
    const response = await api.get("/vacas");
    setVacas(response.data);
    setData(vacas);
  }

  async function loadVacas() {
    const response = await api.get("/vacas");
    setVacas(response.data);
    setData(vacas);
  }

  async function loadTouros() {
    const response = await api.get("/touros");
    setTouros(response.data);
    setData(touros);
  }

  async function loadCrias() {
    const response = await api.get("/crias");
    setCrias(response.data);
    setData(crias);
  }

  async function deleteAnimal(id) {
    api
      .request({
        method: "DELETE",
        url: `/vacas/vaca`,
        headers: { "Content-Type": "application/json" },
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log(id)
        loadAnimals();
      });
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
      <View style={styles.textInformation}>
        <Text>Clique na opção de animal que queira ver</Text>
      </View>
      <View style={styles.filterList}>
        <TouchableOpacity
          style={styles.filterbutton}
          onPress={() => loadVacas()}
        >
          <Text style={styles.filterTextButton}>Vaca</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterbutton}
          onPress={() => loadTouros()}
        >
          <Text style={styles.filterTextButton}>Touro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterbutton}
          onPress={() => loadCrias()}
        >
          <Text style={styles.filterTextButton}>Cria</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
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
         
            <TouchableOpacity style={styles.trashButton}
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
