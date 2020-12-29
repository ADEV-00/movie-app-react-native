import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getVideoPath } from "../../api/api";

const { width, height } = Dimensions.get("screen");

const MovieScreen = ({ route }) => {
  const navigation = useNavigation();
  const { movieTitle, rating, poster, overview, id, genres } = route.params;
  const [path, setPath] = useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const videoID = await id;
      const path = await getVideoPath(videoID);
      setPath(path);
    };
    fetchData(path);
  }, [path]);

  return (
    <>
      <ScrollView style={{ minHeight: height }}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.btnBack}
          >
            <FontAwesome5 name="angle-left" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            minHeight: height,
            backgroundColor: "blue",
          }}
        >
          <View style={styles.bgWrapper}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={{ uri: poster }}
            />
          </View>
          <View style={styles.space}></View>
          <View style={styles.detailWrapper}>
            <View style={styles.detailHeader}>
              <View style={styles.titleWrapper}>
                <View>
                  <Text style={styles.rating}>
                    <AntDesign name="star" size={15} color="#FECA32" />
                    {rating}
                  </Text>
                </View>
                <View>
                  <Text style={styles.movieTitle}>{movieTitle}</Text>
                </View>
              </View>
              {path ? (
                <View
                  style={{
                    transform: [{ translateY: -60 }, { translateX: -25 }],
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`vnd.youtube://watch?v=${path}`);
                    }}
                    style={styles.btnPlay}
                  >
                    <Text style={{ color: "white" }}>
                      {" "}
                      <FontAwesome5 name="play" size={20} color="white" />{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <View
                style={{ flexDirection: "row", flexWrap: "wrap", width: "70%" }}
              >
                {genres.map((item, key) => (
                  <Text key={key} style={styles.genre}>
                    {item}
                  </Text>
                ))}
              </View>

              <Text style={{ opacity: 0.8 }}>2h 32m</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.overview}>{overview}</Text>
            </View>
            <View>
              <Image source={{ uri: poster }} style={styles.image} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
    borderRadius: 20,
    marginBottom: 20,
  },
  btnBack: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(202, 202, 202, 0.37)",
    borderRadius: 50,
  },
  nav: {
    position: "absolute",
    top: 30,
    left: 10,
    right: 0,
    zIndex: 100,
  },
  genre: {
    opacity: 0.8,
    borderColor: "#FECA32",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 3,
  },
  bgWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height / 1.6,
  },
  space: {
    width: width,
    height: height / 1.9,
  },
  detailWrapper: {
    backgroundColor: "white",
    borderRadius: 40,
    width: width,
    minHeight: "100%",
    position: "relative",
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  btnPlay: {
    width: 62,
    height: 63,
    borderRadius: 10,
    backgroundColor: "#FECA32",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  rating: {
    color: "#FECA32",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    width: "82%",
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#1A2E42",
    maxWidth: "100%",
  },
  overview: {
    marginBottom: 10,
  },
});

export default MovieScreen;
