/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import lista from './src/lista';
import React from 'react';
import styled from 'styled-components/native';
import ListaItem from './android/app/src/ListaItem';

const Page = styled.SafeAreaView `
flex:1;
`;
const Listagem = styled.FlatList `
flex:1;
background-color:#FF0000;
`;
const Item = styled.TouchableOpacity `
padding: 10px;
background-color:#CCC;
`;
const ItemText = styled.Text `
font-size: 13px;
`;
const ItemCheck = styled.View '
width: 20 px;
height: 20 px;
border - radius: 10 px;
border: 5 px solid# FFF;
';

export default () => {
    return ( < Page >
        <
        Listagem data = { lista }
        renderItem = {
            () => < ListaItem data = {}
            />} /
            >

            <
            /Page>
        );
    }