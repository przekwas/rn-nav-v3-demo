import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';

export default class NotHomeScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    I'm totally not the home screen!?
                                </Text>
                                <Button danger onPress={() => this.props.navigation.navigate('Home')}>
                                    <Text>Take me hooooome!</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}