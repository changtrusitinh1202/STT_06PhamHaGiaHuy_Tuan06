import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList, TextInput} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo,Ionicons,AntDesign, EvilIcons , FontAwesome  } from '@expo/vector-icons'; 

export default function Screen4b({navigation}){
    const data = [
        {
            id: "1",
            img: require("../assets/carbusbtops21.jpg"),
        },
        {
            id: "2",
            img: require("../assets/daucam1.jpg"),
        },
        {
            id: "3",
            img: require("../assets/dauchuyendoipsps21.jpg"),
        },
        {
            id: "4",
            img: require("../assets/daynguon1.jpg"),
        },
        {
            id: "5",
            img: require("../assets/giacchuyen1.jpg"),
        },
        {
            id: "6",
            img: require("../assets/dauchuyendoi1.jpg"),
        }
    
    ]

    const Item = ({item}) => {
        return(
            <View style={styles.boxP}>        
                <View style={styles.box}>
                    <ImageBackground
                        source={item.img}
                        style={styles.img_style}
                    ></ImageBackground>
                    <Text style={{width: '140px', fontWeight: '500'}}>Cap chuyển từ Cổng USB sang PS2...</Text>
                    <View style={{flexDirection: 'row', width: '130px', justifyContent: 'space-between'}}>
                        {
                            [...Array(5)].map((star, index) => {
                                return(
                                    <Entypo name="star" size={17} color={index < 4 ? '#FFCC33' : 'gray'} />  
                                )
                            })
                        }
                        <Text>(15)</Text>
                </View>
                
                <Text style={{fontWeight: '700'}}>69.900 đ <Text style={{color: 'gray', fontWeight: '200', position: 'relative', right: '-15px'}}>-39%</Text></Text>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back-sharp" size={30} color="white" />
                <View style={{flexDirection: 'row'}}>
                <FontAwesome name="search" size={24} color="black" style={{position: 'absolute',top: '1px', left: '5px'}}/>
                    <TextInput placeholder="Dây cáp USB" style={{backgroundColor: 'white' ,height: '30px', width: '192px', paddingLeft: '35px', fontSize: '12px'}}></TextInput>
                </View>
                <AntDesign name="shoppingcart" size={30} color="white" />
                <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>

            <View style={{marginTop: '20px'}}></View>

            <View style={styles.center}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <Item style={{marginTop: '50px'}} item={item}/>}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>

            <View style={styles.footer}>
                <Entypo name="menu" size={30} color="black" />
                <Ionicons name="home-outline" size={30} color="black"  onPress={() => navigation.navigate('Screen4a')}/>
                <Entypo name="back" size={30} color="black" />
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
        backgroundColor: '#1BA9FF',
        position: 'fixed',
        zIndex: 1
        
    },

    img_style:{
        width: '155px',
        height: '90px',
        marginRight: '20px'
    },

    footer:{
        height: '49px',
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '0px'
    },

    center:{
        marginTop: '60px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxP:{
        marginBottom: '10px',
        marginLeft: '20px'
     
    }
   
})