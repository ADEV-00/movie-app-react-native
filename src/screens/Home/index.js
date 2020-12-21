import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import MovieCard from "../../components/MovieCard";
import { getMovies } from "../../api/api";
import { FlatList } from "react-native-gesture-handler";
import PromoCard from "../../components/PromoCard";

const { width, height } = Dimensions.get("window");

const snap = width - 164;

const HomeScreen = () => {
  const [movies, setMovies] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };

    fetchData(movies);
  }, [movies]);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#f5f5f5",
            minHeight: height,
            width: width,
          }}
        >
          <ImageBackground
            source={require("../../assets/img/bg.png")}
            style={styles.bgImage}
          />
          <View style={styles.header}>
            <Text style={styles.title}>Playing</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, color: "#FECA32" }}>See All </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ minHeight: height / 2.5 }}
            data={movies}
            keyExtractor={(item) => item.key}
            horizontal
            snapToInterval={snap}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <MovieCard title={item.title} poster={item.poster} />;
            }}
          />
          <View style={{ paddingHorizontal: 16, marginBottom: 40 }}>
            <PromoCard />
          </View>
          <View style={{ paddingHorizontal: 16, marginBottom: 40 }}>
            <PromoCard />
          </View>
          <View style={{ paddingHorizontal: 16, marginBottom: 40 }}>
            <PromoCard />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: width,
    height: height / 1.5,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    right: 0,
  },
  header: {
    width: width,
    marginTop: 100,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: "#1A2E42",
  },
});

export default HomeScreen;
