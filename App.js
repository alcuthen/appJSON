import { StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import {api} from "./src/services/api";
import Students from './src/Students';

export default function App(){

const [students, setStudents] = useState([]);

useEffect(() => {
  
    async function loadStudents() {
    try {
      const response = await api.get("baseJSON/master/datapp.json");
      console.log(response.data);
      setStudents(response.data);
    }
  
    catch (error) {
      console.error('erro identificado',e);
  }
}
  loadStudents();
}, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => { <Students data={item} /> }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
