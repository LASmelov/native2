import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MainNewCourse = () => {

  const handlePress = () => {
    // Обработчик нажатия
  };

  const [selectedValue, setSelectedValue] = React.useState("beginner");

  return (
    <View style={styles.startblock}>

        <View style={styles.startblock1}>
        <View style={styles.arrowandtext}>
                    <TouchableOpacity onPress={handlePress} style={styles.button1}>
                <Text style={styles.text1}>←</Text>
                
            </TouchableOpacity>

            <TouchableOpacity>
                 <Text style={styles.text2}>Новый курс</Text>
            </TouchableOpacity>
           
        </View>
      

      <TouchableOpacity onPress={handlePress} style={styles.button2}>
        <Text style={styles.text3}>Сохранить</Text>
      </TouchableOpacity>
</View>



      <View style={styles.twoblock}>

        <View style={styles.inputblock}>
        <Text style={styles.textinputtopic}>Тема</Text>

        <TextInput 
        style={styles.input1} 
        placeholder="Напишите тему курса"
        />
</View>

    <View style={styles.inputblock}>
        <Text style={styles.textinputtopic}>Описание</Text>

        <TextInput 
        style={styles.input1} 
        placeholder="Дайте краткое описание"
        />
        </View>


        <View style={styles.inputblock}>

        <Text style={styles.textinputtopic}>Уровень</Text>

            <Picker
            selectedValue={selectedValue}
            style={styles.selector}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            
            <Picker.Item label="Начинающий" value="beginner" />
            <Picker.Item label="Средний" value="intermediate" />
            <Picker.Item label="Продвинутый" value="advanced" />
            </Picker>
        </View>



        <View style={styles.inputblock}>

        <Text style={styles.textinputtopic}>Стоимость</Text>

        <TextInput 
        style={styles.input2} 
        placeholder="Напишите стоимость курса"
        />
        </View>

         <View style={styles.inputblock}>
            
        <Text style={styles.textinputtopic}>Иллюстрация</Text>

        <TextInput 
        style={styles.input2} 
        placeholder="+"
        />

        
        </View>

    </View>

    </View>


    
  );


  
};

const styles = StyleSheet.create({
    startblock: {
    
  
 
  },

  startblock1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },

  button1: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    
    height: 52,
    gap: 2,
  },

  button2: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 40,

    border: 'solid #5932EA 2px',
    borderRadius: '12px',
    
  },

  arrowandtext:{
    display: 'flex',
    
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    gap: '20px'
  },

  text1: {
  
    fontSize: 40,
},

text2: {
  
    fontSize: 40,
},

text3: {
  color: '#5932EA',
    fontSize: 20,
},

twoblock:{
    flexDirection: 'row',
    display:"flex",
    alignItems:"center",
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginHorizontal: '5%',
    columnGap: 80
},

input1:{
    
    display:"flex",
    alignItems:"center",
    justifyContent: 'space-between',
 
    height: 48,
    backgroundColor:"white",
    paddingLeft: 20,
    borderRadius: 12,

    color:"#B5B7C0",
    
    padding: '20px',
   
    outlineStyle: 'none',
    width: 600,
    
},

input2:{
    
    
    display:"flex",
    alignItems:"center",
    justifyContent: 'space-between',
 
    height: 48,
    backgroundColor:"white",
    paddingLeft: 20,
    borderRadius: 12,

    color:"#B5B7C0",
    
    padding: '20px',
   
    outlineStyle: 'none',
    width: 350,
    
},



textinputtopic:{
    fontSize: 30,
},


selector:{
    display:"flex",
    alignItems:"center",
    justifyContent: 'space-between',
 
    height: 48,
    backgroundColor:"white",
    paddingLeft: 20,
    borderRadius: 12,

    color:"#B5B7C0",
    
   
   
    outlineStyle: 'none',
    width: 350,
},

selectnone:{
    outlineStyle: 'none',
}


});

export default MainNewCourse;
