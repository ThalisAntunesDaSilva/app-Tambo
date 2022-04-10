import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import logoImg from "../../../assets/logo.png";
import api from "../../../services/api";
import { Feather } from "@expo/vector-icons";


import styles from "./styles";

export default function AddAnimal({navigation}) {
  const [name, setName] = useState("");
  // const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [lote, setLote] = useState("");
  const [raca, setRaca] = useState("");
  const [producao, setProducao] = useState("");
  const [tipo, setTipo] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (name) => {
    setName(name);
    console.log(name)
  };
  const onChangePesoHandler = (peso) => {
    setPeso(peso);
    console.log(peso)
  };
  const onChangeLoteHandler = (lote) => {
    setLote(lote);
    console.log(lote)
  };
  const onChangeRacaHandler = (raca) => {
    setRaca(raca);
    console.log(raca)
  };
  const onChangeProducaoHandler = (producao) => {
    setProducao(producao);
    console.log(producao)
  };
  const onChangeTipoHandler = (tipo) => {
    setTipo(tipo);
    console.log(tipo)
  };

  const postAnimal = async (event) => {
    console.log(name);
    await api
      .post(`/animais/animal`, {
        nome: name,
        peso: peso,
        lote: lote,
        raca: raca,
        producao: producao,
        tipo: tipo,
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Animals")
      }).catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Adicione um animal</Text>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Animals")}
        />
      </View>
     
      <FlatList
        data={[1]}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (

      <View style={styles.body}>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={onChangeNameHandler}
        />

        <Text style={styles.text}>Data de nascimento</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Peso</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={onChangePesoHandler}
        />

        <Text style={styles.text}>Lote</Text>
        <TextInput
          style={styles.input}
          value={lote}
          onChangeText={onChangeLoteHandler}
        />

        <Text style={styles.text}>Raça</Text>
        <TextInput
          style={styles.input}
          value={raca}
          onChangeText={onChangeRacaHandler}
        />

        <Text style={styles.text}>Produção</Text>
        <TextInput
          style={styles.input}
          value={producao}
          onChangeText={onChangeProducaoHandler}
        />

        <Text style={styles.text}>Tipo</Text>
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={onChangeTipoHandler}
        />

        {/* <View style={styles.picker}>
          <Picker>
            <Picker.Item label="Vaca" value="vaca" />
            <Picker.Item label="Touro" value="touro" />
            <Picker.Item label="Bezerro" value="Bezerro" />

          </Picker>
        </View> */}

        <TouchableOpacity onPress={() => postAnimal()} style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
)}/>
      <View />
      
    </View>
  );
}
