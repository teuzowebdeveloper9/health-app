import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { ModalSearchStylesheet } from "./ModalSearchStylesheet";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/loginContext";
import { SearchHistory } from "@/types/SearchHistoryType";
import { ScrollView } from "react-native";

type MyComponentProps = {
  isVisible: boolean;
  onClose: () => void;
};

export function ModalSearchComponent({ isVisible, onClose }: MyComponentProps) {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<SearchHistory[]>([]);

  useEffect(() => {
    if (!isVisible) return; // Só executa a lógica se o modal estiver visível

    const fetchSearches = async () => {
      const response = await axios.get(`http://localhost:8080/search-history/${user.id}`);
      setData(response.data);
    };

    fetchSearches();
  }, [isVisible, user.id]); // ⏰ Observa isVisible + user.id

  if (!isVisible) {
    return null; // Mas aqui ainda oculta o JSX
  }

  return (
    <View style={ModalSearchStylesheet.FullscreenOverlay}>
      <BlurView intensity={50} style={ModalSearchStylesheet.Blur}>
        <View style={ModalSearchStylesheet.ModalBox}>
          <View style={ModalSearchStylesheet.Header}>
            <Text style={ModalSearchStylesheet.Title}>your recent searches</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" color={"#4FC3F7"} size={24} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={ModalSearchStylesheet.Search}>{item.text}</Text>
            )}
          />
        </View>
      </BlurView>
    </View>
  );
}