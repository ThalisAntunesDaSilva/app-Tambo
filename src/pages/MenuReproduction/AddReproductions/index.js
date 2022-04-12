import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import logoImg from "../../../assets/logo.png";
import api from "../../../services/api";
import { Feather } from "@expo/vector-icons";
import DateField from "react-native-datefield";

import styles from "./styles";

export default function AddReproductions({ navigation }) {
  const [idVaca, setIdVaca] = useState("");
  const [dataDeInicio, setDataDeInicio] = useState("");
  const [dataDeFim, setDataDeFim] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const IdVacaHandler = (id) => {
    setIdVaca(id);
    console.log(id);
  };

  const DataDeInicioHandler = (data) => {
    setDataDeInicio(data);
    console.log(data);
  };

  const DataDeFimHandler = (data) => {
    setDataDeFim(data);
    console.log(data);
  };

  const postReproduction = async (event) => {
    await api
      .post(`/reproducoes/reproducao`, {
        dataDeInicio: dataDeInicio,
        dataDeFim: dataDeFim,
        mae: {
          id: idVaca,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Reproductions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Adicione uma reprodução</Text>
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
            <Text style={styles.text}>Data de início de cobrimento</Text>
            <DateField
            value={dataDeInicio}
              labelDate="Dia"
              labelMonth="Mês"
              labelYear="Ano"
              styleInput={{
                width: 90,
                marginLeft: 2,
                marginRight: 2,
                borderRadius: 10,
                height: 40,
                shadowColor: "rgba(0,0,0, .4)", // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                backgroundColor: "#fff",
                elevation: 2,
              }}
              onSubmit={(value) => DataDeInicioHandler(value)}
            />
            <Text style={styles.text}>Data de fim de cobrimento</Text>
            <DateField
              labelDate="Dia"
              labelMonth="Mês"
              labelYear="Ano"
              value={dataDeFim}
              styleInput={{
                width: 90,
                marginLeft: 2,
                marginRight: 2,
                borderRadius: 10,
                height: 40,
                shadowColor: "rgba(0,0,0, .4)", // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                backgroundColor: "#fff",
                elevation: 2,
              }}
              onSubmit={(value) => {DataDeFimHandler(value)}}
            />
            <Text style={styles.text}>ID Vaca</Text>
            <TextInput
              style={styles.input}
              value={idVaca}
              onChangeText={IdVacaHandler}
            />

            <TouchableOpacity
              onPress={() => postReproduction()}
              style={styles.button}
            >
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View />
    </View>
  );
}
