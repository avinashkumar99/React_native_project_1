import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary h-full relative w-full">
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        className=" w-full h-full"
      >
        <ScrollView
          className="flex-1 px-5 "
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            minHeight: "100%",
            paddingBottom: 10,
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            className="h-10 w-12 mt-20 mb-5 mx-auto"
          />
          {moviesLoading ? (
            <ActivityIndicator
              size={"large"}
              color={"0000ff"}
              className="m-10 self-center"
            />
          ) : moviesError ? (
            <Text>Error : {moviesError?.message}</Text>
          ) : (
            <View className="flex-1 mt-5">
              <SearchBar
                placeholder={"Search for movies or TV shows"}
                onPress={() => router.push("/search")}
              />
              <Text className="text-white text=2xl font-bold mt-5">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard
                    id={item.id}
                    poster_path={item.poster_path}
                    title={item.title}
                    vote={item.vote}
                    average={item.average}
                    release_date={item.release_date}
                    vote_average={item.vote_average}
                  />
                )}
                keyExtractor={(item, index) => {
                  return item.id.toString();
                }}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
