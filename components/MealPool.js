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
import AddIngredientModal from "./AddIngredientModal";
import IngredientDetailModal from "./IngredientDetailModal";
import RecipeCard from "./RecipeCard";
import meal from "../assets/meal.jpeg";
import {Grid, Row, Col} from "react-native-easy-grid";
import {getAutoFocusEnabled} from "expo/build/AR";
import {lefthandObjectDiff} from "react-native/Libraries/Utilities/verifyComponentAttributeEquivalence";
import AddRecipeModal from "./AddRecipeModal";
import RecipeDetailModal from "./RecipeDetailModal";

class MealPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.onPressAdd = this.onPressAdd.bind(this);
        this.onPressImage = this.onPressImage.bind(this);
    }

    onPressAdd(){
        this.refs.AddRecipeModal.showAddRecipeModal();
    }

    onPressImage() {
        this.refs.RecipeDetailModal.showRecipeDetailModal();
    }
    render() {
        return (
            <Provider>
                <Container>
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
                        <Item rounded style={{margin: 10, width: 380, height:50, alignSelf: "center", marginLeft: 10}}>
                            <Icon name="ios-search"/>
                            <Input
                                placeholder = "Find Recipe"
                                onChangeText = {(data)=>{this.setState({search: data})}}
                                value = {this.state.search}
                            />
                            <Right>
                                <Button transparent onPress={
                                    ()=>{
                                        if(this.state.search!=""){
                                            this.setState({search:""});
                                        }
                                    }
                                }>
                                    <Icon type="MaterialIcons" name="clear"></Icon>
                                </Button>
                            </Right>
                        </Item>

                        <Grid>
                            <Col>
                               <Card style={{padding: 20, height: 160}}>
                                    <CardItem cardBody>
                                        <Button transparent style={{margin:10}} onPress = {() => this.onPressImage()}>
                                            <Thumbnail source={meal} style ={{height: 120, width: 140, marginTop: 30}}/>
                                        </Button>
                                    </CardItem>
                                   <CardItem style={{marginTop: 40, textAlign: 'center', backgroundColor: 'transparent'}}>
                                       <Left>
                                           <Body>
                                               <Text style = {{fontWeight:"bold", fontSize:13}}>Orange Chicken</Text>
                                           </Body>
                                       </Left>
                                   </CardItem>
                                </Card>
                                <Card style={{padding: 20, height: 160}}>
                                    <CardItem cardBody>
                                        <Button transparent style={{margin:10}} onPress = {() => this.onPressImage()}>
                                            <Thumbnail source={meal} style ={{height: 120, width: 140, marginTop: 30}}/>
                                        </Button>
                                    </CardItem>
                                    <CardItem style={{marginTop: 40, textAlign: 'center', backgroundColor: 'transparent'}}>
                                        <Left>
                                            <Body>
                                                <Text style = {{fontWeight:"bold", fontSize:13}}>Orange Chicken</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{padding: 20, height: 160}}>
                                    <CardItem cardBody>
                                        <Button transparent style={{margin:10}} onPress = {() => this.onPressImage()}>
                                            <Thumbnail source={meal} style ={{height: 120, width: 140, marginTop: 30}}/>
                                        </Button>
                                    </CardItem>
                                    <CardItem style={{marginTop: 40, textAlign: 'center', backgroundColor: 'transparent'}}>
                                        <Left>
                                            <Body>
                                                <Text style = {{fontWeight:"bold", fontSize:13}}>Orange Chicken</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                                <Card style={{padding: 20, height: 160}}>
                                    <CardItem cardBody>
                                        <Button transparent style={{margin:10}} onPress = {() => this.onPressImage()}>
                                            <Thumbnail source={meal} style ={{height: 120, width: 140, marginTop: 30}}/>
                                        </Button>
                                    </CardItem>
                                    <CardItem style={{marginTop: 40, textAlign: 'center', backgroundColor: 'transparent'}}>
                                        <Left>
                                            <Body>
                                                <Text style = {{fontWeight:"bold", fontSize:13}}>Orange Chicken</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Grid>

                        <AddRecipeModal ref={'AddRecipeModal'} />
                        <RecipeDetailModal ref={'RecipeDetailModal'} />

                    </Content>
                </Container>
            </Provider>
        )
    }
}


export default MealPool;