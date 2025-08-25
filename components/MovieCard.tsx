import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote,
  average,
  release_date,
  vote_average,
  icons,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%] mb-2">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placholder.co/600x400/1a1a1a/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg mb-2 "
          resizeMode="cover"
        />
        <Text className="text-white font-semibold" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image
            source={require("../assets/icons/star.png")}
            className="size-4"
          />
          <Text className="text-xs text-white">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between ">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 upppercase">
            
            Movie
            
            </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
