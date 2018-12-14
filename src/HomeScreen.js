import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
      };

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    I'm the home screen!
                                </Text>
                                <Button primary onPress={() => this.props.navigation.navigate('NotHome')}>
                                    <Text>Take me elsewhere!</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}