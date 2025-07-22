import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/loginContext";
import { SearchHistory } from "@/types/SearchHistoryType";
import { ExcludeModalStylesheet } from "./excludeModalStylesheet";

type MyComponentProps = {
  isVisible: boolean;
  onClose: () => void;
};

const [isNull, setIsNull] = useState(false)

export function ExcludeModalComponent({ isVisible, onClose }: MyComponentProps) {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<SearchHistory[]>([]);

  const excludeSearch = async (id : string) => {
    await axios.delete(`http://localhost:8080/search-history/${id}`);
    onClose();
  }

  useEffect(() => {
    if (!isVisible) return;

    const fetchSearches = async () => {
      const response = await axios.get(`http://localhost:8080/search-history/${user.id}`);
      setData(response.data);
    };

    fetchSearches();
  }, [isVisible, user.id]); 

  if (!isVisible) {
    return null; 
  }

  return (
    <View style={ExcludeModalStylesheet.FullscreenOverlay}>
      <BlurView intensity={50} style={ExcludeModalStylesheet.Blur}>
        <View style={ExcludeModalStylesheet.ModalBox}>
          <View style={ExcludeModalStylesheet.Header}>
            <Text style={ExcludeModalStylesheet.Title}>your recent searches  </Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" color={"red"} size={24} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={ExcludeModalStylesheet.Search}>{item.text} <Feather onPress={() => excludeSearch(item.id)} name="trash" color={"red"} /></Text>
            )}
          />
        </View>
      </BlurView>
    </View>
  );
}