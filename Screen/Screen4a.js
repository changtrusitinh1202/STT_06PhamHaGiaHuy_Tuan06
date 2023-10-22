import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo,Ionicons,AntDesign } from '@expo/vector-icons'; 


export default function Screen4a({navigation}){
    const data = [
        {
            id: "1",
            img: require("../assets/ca_nau_lau.png"),
            shop_name: "Devang",
            product_name: "Ca nấu lẩu, nấu mì mini...",
        },
        {
            id: "2",
            img: require("../assets/ga_bo_toi.png"),
            shop_name: "LTD Food",
            product_name: "1KG KHÔ GÀ BƠ TỎI...",
        },
        {
            id: "3",
            img: require("../assets/xa_can_cau.png"),
            shop_name: "Thế giới đồ chơi",
            product_name: "Xe cần cẩu đa năng",
        },
        {
            id: "4",
            img: require("../assets/do_choi_dang_mo_hinh.png"),
            shop_name: "Thế giới đồ chơi",
            product_name: "Đồ chơi dạng mô hình",
        },
        {
            id: "5",
            img: require("../assets/lanh_dao_gian_don.png"),
            shop_name: "Minh Long Book",
            product_name: "Lãnh đạo đơn giản",
        },
        {
            id: "6",
            img: require("../assets/hieu_long_con_tre.png"),
            shop_name: "Minh Long Book",
            product_name: "Hiểu lòng con trẻ",
        },
        {
            id: "7",
            img: require("../assets/trump.png"),
            shop_name: "Minh Long Book",
            product_name: "Donal Trum thiên tài lãnh đạo",
        },
    ];

    const Item = ({item}) => {
        return(
            <View style={styles.boxP}>
                    <View style={styles.box}>
                        <ImageBackground
                            source={item.img}
                            style={styles.img_style}
                        ></ImageBackground>
                        <View>
                            <View style={styles.text}>
                                <Text style={{marginBottom: '10px', fontSize: '15px'}}>{item.product_name}</Text>
                                <Text style={{fontSize: '14px', color: '#E83030'}}>Shop {item.shop_name}</Text>
                            </View>
                            
                        </View>
                        <View>
                            <TouchableOpacity 
                                style={{height: '38px', width: '88px', 
                                        backgroundColor: '#F31111', justifyContent: 'center', 
                                        alignItems: 'center', position: 'absolute', top: '20px', left: '20px'}}
                                       >
                                            
                                <Text style={{fontSize: '15px', color: 'white'}}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View>
                    <hr style={{ backgroundColor: 'black', width: '98.8%'}}/>
                </View>
                </View>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back-sharp" size={30} color="white" onPress={() => navigation.navigate('Screen4b')}/>
                <Text style={{fontSize: '20px', fontWeight: '400', color: 'white'}}>Chat</Text>
                <AntDesign name="shoppingcart" size={30} color="white" />
            </View>
           <View style={styles.top}>
                    <Text 
                        style={{fontWeight: '400'}}
                    >Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại {'\n'}chát với shop!</Text>
                </View>
            <View style={styles.bottom}>
                <FlatList   
                    data={data}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}                   
                />       
            <View style={{height: '49px'}}></View>
               
            </View>
            <View style={styles.footer}>
                    <Entypo name="menu" size={30} color="black" />
                    <Ionicons name="home-outline" size={30} color="black"  onPress={() => navigation.navigate('Screen4b')}/>
                    <Entypo name="back" size={30} color="black" />
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
      

    },

    top: {
        backgroundColor: '#CCCCCC',
        height: '12%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '50px'
    },

    bottom:{
      
      
    },

    img_style:{
        width: '74px',
        height: '74px',
        marginRight: '20px'
    },

    boxP:{
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    box:{
       flexDirection: 'row',
      
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
    
    text:{
        width: '165px'
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
    }

    
})