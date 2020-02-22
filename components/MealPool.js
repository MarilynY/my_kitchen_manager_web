import React, {Component} from 'react';
import {
    Container,
    Text,
    Content,
    Header,
    Title,
    Spinner,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Item,
    Input, Card, CardItem, Thumbnail
} from "native-base"
import {Provider} from "@ant-design/react-native";
import {FlatList, Image} from "react-native";
import RecipeDetailModal from "./RecipeDetailModal";
import {AsyncStorage, View} from "react-native"
import {API_URL, TOKEN_KEY} from "../constant"
import {Actions} from 'react-native-router-flux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class MealPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            Items: [],
            display: [],
            loading: true
        }
        this.onPressAdd = this.onPressAdd.bind(this);
        this.onPressImage = this.onPressImage.bind(this);
    }

    onPressAdd(){
        Actions.add_recipe_page();
        //this.refs.AddRecipeModal.showAddRecipeModal();
    }

    onSearch(data){
        let text = data.toLowerCase();
        let trucks = this.state.Items;
        let filtered = trucks.filter((item)=>{
            return item.recipeName.toLowerCase().match(text);
        });
        if(!text||text==""){
            this.setState({
                display: trucks
            })
        }else if(!Array.isArray(filtered) && !filtered.length){
            this.setState({display: []});
        }else if(Array.isArray(filtered)){
            this.setState({display: filtered});
        }
    }

    onPressImage(item) {
        const recipe ={
            contributorId: item.contributorId,
            id: item.id,
            name: item.recipeName,
            image: item.recipeImageUrl,
            detail: item.recipeDetails,
            method: item.instructions
        }
        this.refs.RecipeDetailModal.showRecipeDetailModal(recipe);
    }

    scanRecipes(){
        this.setState({Items: [], loading: true});
        AsyncStorage.getItem(TOKEN_KEY)
            .then((accessToken)=>{
                if(accessToken!=null){
                    fetch(`${API_URL}/recipe/all`, {
                        method: "GET",
                        headers:{
                            "Authorization": accessToken
                        }
                    }).then((response)=>{
                        if(response.status=="200"){
                            return response.json();
                        }else{
                            alert(`Error in fetching data --> status ${response.status}`);
                        }
                    }).then((responseData)=>{
                       this.setState({
                           Items: responseData,
                           display: responseData,
                           loading: false
                       });
                       console.log(this.state.Items);
                    }).done()
                }
            })
            .catch((error)=>{
                console.log("Error in fetching recipe list");
            })
    }

    componentDidMount() {
        this.scanRecipes();
    }

    render() {
        return this.state.loading?
            <Container>
                <Header>
                    <Title style={{alignSelf:'center',
                        justifyContent:'center',}}>Meal Pool</Title>
                </Header>
                <Content>
                    <Spinner color='deepskyblue'/>
                </Content>
            </Container>
            :(
            <Provider>
                <Container >
                    <Header>
                        <Left>

                        </Left>
                        <Body>
                            <Title style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}>My Meal Pool</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.onPressAdd()}>
                                <Icon name='add-circle'/>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Item rounded style={{margin: 10, width: wp('91%'), height: hp('6%'), alignSelf: "center", marginLeft: 10}}>
                            <Icon name="ios-search"/>
                            <Input
                                placeholder = "Find Recipe"
                                onChangeText = {(data)=>{
                                    this.setState({search: data});
                                    this.onSearch(data);
                                }}
                                value = {this.state.search}
                            />
                            <Right>
                                <Button transparent onPress={
                                    ()=>{
                                        if(this.state.search!=""){
                                            this.setState({search:"", display: this.state.Items});
                                        }
                                    }
                                }>
                                    <Icon type="MaterialIcons" name="clear"></Icon>
                                </Button>
                            </Right>
                        </Item>

                        <View style={{width: wp('100%'), alignItems: 'center'}}>
                        <FlatList
                            contentContainerStyle={{width: wp('95%'), alignItems: 'center',}}
                            data={this.state.display}
                            renderItem={({item}) =>(
                                <Card style={{  marginLeft: 5, marginRight: 5,alignItems: 'center',paddingTop: 30, height: 200, width: wp('45%'), borderRadius: 15}}>
                                    <CardItem cardBody style={{alignItems: 'center'}}>
                                        <Button transparent style={{margin: 10}} onPress = {() => this.onPressImage(item)}>
                                            <Thumbnail source={{uri:item.recipeImageUrl}} style ={{height: hp('16%'), width: wp('38%'), marginTop: 30}}/>
                                        </Button>
                                    </CardItem>
                                    <CardItem style={{marginTop: 40, backgroundColor: 'transparent'}}>
                                        <Text style = {{fontWeight:"bold", fontSize:13, paddingTop: 5, textAlign: 'center', width: 190}}>{item.recipeName}</Text>
                                    </CardItem>
                                </Card>
                            )}
                            numColumns = {2}
                            keyExtractor = {item=>item.id}
                        />
                        </View>
                        {/*<AddRecipeModal data={this.scanRecipes.bind(this)} ref={'AddRecipeModal'} />*/}
                        <RecipeDetailModal data={this.scanRecipes.bind(this)} ref={'RecipeDetailModal'} />

                    </Content>
                </Container>
            </Provider>
        )
    }
}

export default MealPool;