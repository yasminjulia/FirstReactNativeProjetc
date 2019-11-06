/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import lista from './src/lista';
import React from 'react';
import styled from 'styled-components/native'

const Page = styled.SafeAreaView `
flex:1
`;
const Item = styled.View `
padding: 10px;
`;
const ItemText = styled.Text `
font-size: 13px;
`;

export default () => {
    return ( < Page > {
        lista.map(item => {
            return ( < Item >
                <
                ItemText > { item.task } < /ItemText> </Item >
            );
        })
    } < /Page>)
}