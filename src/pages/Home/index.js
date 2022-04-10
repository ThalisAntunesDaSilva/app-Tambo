import React from "react";



import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import logoImg from "../../assets/logo.png";
import header from "../../assets/header.jpg";
import profile from "../../assets/profile.jpg";
import cowOption from "../../assets/cowOption.png";
import reproductionOption from "../../assets/reproductionOption.png";
import graphicOption from "../../assets/graphicOption.png";
import milkOption from "../../assets/milkOption.png";
import vaccineOption from "../../assets/vaccineOption.png";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native-stack';

export default function Home({navigation}) {
    return (
      
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#0066CC" />

      <View style={styles.header}>
        <View style={styles.profilebox}>
          <Image style={styles.profile} source={profile}></Image>
        </View>

        <Text style={styles.textWelcome}>Bem-vindo, produtor(a)</Text>
      </View>
      <ScrollView>
        <View style={styles.options}>
          <TouchableOpacity style={styles.buttonOption} onPress={() => navigation.navigate('Animals')}>
            <Image style={styles.iconOption} source={cowOption}></Image>
            <Text style={styles.textOption}>Animais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOption} onPress={() => navigation.navigate('Reproductions')}>
            <Image style={styles.iconOption} source={reproductionOption}></Image>
            <Text style={styles.textOption}>Reprodução</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.options}>
          <TouchableOpacity style={styles.buttonOption}>
            <Image style={styles.iconOption} source={milkOption}></Image>
            <Text style={styles.textOption}>Produção</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOption} onPress={() => navigation.navigate('Vaccines')}>
            <Image style={styles.iconOption} source={vaccineOption}></Image>
            <Text style={styles.textOption}>Ficha de saúde</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
