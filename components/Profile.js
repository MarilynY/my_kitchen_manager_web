import React, {Component} from 'react';
import {Container, Content, Text, Button, Left, Body, Title, Right, Icon, Header, Item} from "native-base"
import {AsyncStorage, SafeAreaView, ScrollView, View, Image, StyleSheet, FlatList} from "react-native"
import {TOKEN_KEY} from "../constant"
import {Actions} from "react-native-router-flux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import avatar from '../assets/avatar.jpeg';
import meal from '../assets/meal.jpeg';
import {List} from "@ant-design/react-native";

class Profile extends Component {
   logoutHandler(){
       AsyncStorage.removeItem(TOKEN_KEY)
           .then(()=>{
               console.log("Token Removed!");
               Actions.login();
           }).catch((error)=>{
               console.log(`Error in removing token --> ${error}`);
       })

   }
    render() {
        return (
            <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header>
                        <Left>
                        </Left>
                        <Body>
                            <Title style={{alignSelf:'center',
                                justifyContent:'center'}}>My Profile</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.logoutHandler}>
                                <Text>LogOut</Text>
                            </Button>
                        </Right>
                    </Header>
                    <View style={{alignSelf: "center"}}>
                        <View style={styles.profileImage}>
                            <Image source={avatar} style={styles.image} resizeMode="center" />
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 25 }]}>
                            Julie Wang
                        </Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                            <Text style={[styles.text, styles.subText]}>Recipes</Text>
                        </View>
                        <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
                            <Text style={[styles.text, { fontSize: 24 }]}>12,000</Text>
                            <Text style={[styles.text, styles.subText]}>Followers</Text>
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                            <Text style={[styles.text, styles.subText]}>Following</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 32}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.mediaImageContainer}>
                                <Image source={meal} style={styles.image} resizeMode="cover" />
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={meal} style={styles.image} resizeMode="cover" />
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={meal} style={styles.image} resizeMode="cover" />
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={meal} style={styles.image} resizeMode="cover" />
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={meal} style={styles.image} resizeMode="cover" />
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={[styles.personalInfo, styles.subText]}>PERSONAL INFO</Text>
                    <View style={styles.personalInfoItem}>
                        <List style={{width: 280}}>
                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Username</Text>
                                <Right>
                                    <Text style={styles.text}>Marilyn</Text>
                                </Right>
                            </Item>

                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>First Name</Text>
                                <Right>
                                    <Text style={styles.text}>Menglin</Text>
                                </Right>
                            </Item>

                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Last Name</Text>
                                <Right>
                                    <Text style={styles.text}>Yu</Text>
                                </Right>
                            </Item>

                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Gender</Text>
                                <Right>
                                    <Text style={styles.text}>Female</Text>
                                </Right>
                            </Item>
                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Email</Text>
                                <Right>
                                    <Text style={styles.text}>yml.100205@gmail.com</Text>
                                </Right>
                            </Item>
                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Nationality</Text>
                                <Right>
                                    <Text style={styles.text}>China</Text>
                                </Right>
                            </Item>
                            <Item data-seed="logId">
                                <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>Diet</Text>
                                <Right>
                                    <Text style={styles.text}>Vegetarian</Text>
                                </Right>
                            </Item>
                        </List>
                    </View>

                    {/*<View style={[styles.personalInfoItem, styles.text]}>*/}

                    {/*    <FlatList*/}
                    {/*        data={[*/}
                    {/*            {key: 'Username'},*/}
                    {/*            {key: 'First Name'},*/}
                    {/*            {key: 'Last Name'},*/}
                    {/*            {key: 'Gender'},*/}
                    {/*            {key: 'Email Address'},*/}
                    {/*            {key: 'Nationality'},*/}
                    {/*            {key: 'Diet'}*/}
                    {/*        ]}*/}
                    {/*        renderItem={({item}) => <Text style={styles.text}>{item.key}: abcd</Text>}*/}
                    {/*    />*/}
                    {/*</View>*/}
                </ScrollView>
            </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 12
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 120,
        height: 120,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    personalInfo: {
        marginLeft: 60,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 18
    },
    personalInfoItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
        marginLeft: 60
    },
    personalInfoItemIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
})
/*
<Container>
<Content>
     <Text style = {{padding:30}}>This is Profile</Text>
     <Button primary onPress={this.logoutHandler}>
         <Text>
             LogOut
         </Text>
     </Button>
 </Content>
</Container>

 */