import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const search = () => {
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
      <Image
        source={require("../../assets/images/bg.png")}
        className="flex-1 absolute w-full z-0"
        resizeMode="contain"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 ">
              <Image
                source={require("../../assets/images/logo.png")}
                className="h-10 w-12 "
              />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search for movies or TV shows"
                onPress={() => router.push("/search")}
              />
            </View>
          </>
        }
      />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
