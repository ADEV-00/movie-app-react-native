import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slideshow from "react-native-slideshow";

const PromoCard = () => {
  const dataSource = [
    {
      title: "",
      caption: "",
      url:
        "https://www.blitz-cinestar-bh.ba/img/loyalty_gusar_BIH_maliweb.jpg?preset=qty90",
    },
    {
      title: "",
      caption: "",
      url:
        "https://slike.blitz-cinestar.hr/Oglasi/BIH/naslovna_mali/naslovna_mali_novi_rodendan_2020_HR.jpg",
    },
    {
      title: "",
      caption: "",
      url:
        "https://slike.blitz-cinestar.hr/Oglasi/BIH/naslovna_mali/naslovna_mali_sigurno_poucno_skole.jpg",
    },
  ];
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Promo</Text>
      <Slideshow dataSource={dataSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    color: "#1A2E42",
    fontSize: 25,
    marginBottom: 20,
  },
});

export default PromoCard;
