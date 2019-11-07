/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import lista from './lista';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListaItem from './ListaItem';
import AddItem from './AddItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './ListaItemSwipe';
import uuid from 'uuid/v4';

const Page = styled.SafeAreaView`
flex:1;
`;

export default () => {
    const [items, setItems] = useState(lista);
    const addNewItem = (txt) => {
        let newItems = [...items];
        newItems.push({
            id: uuid(),
            task: txt,
            done: false
        });
        setItems(newItems);
    }
    const toggleDone = (index) => {
        let newItems = [...items];
        newItems[index].done = !newItems[index].done;
        setItems(newItems);
    }
    const deleteItem = (index) => {
        let newItems = [...items];
        newItems = newItems.filter((it, i) => {
            if (i != index) {
                return true;
            } else {
                return false;
            }

        });
        setItems(newItems);
    }

    return (
        <Page>
            <AddItem onAdd={addNewItem} />
            <SwipeListView data={items}
                renderItem={
                    ({ item, index }) => <ListaItem onPress={
                        () => toggleDone(index)}
                        data={item}
                    />}
                leftOpenValue={50}
                disableLeftSwipe={true}
                keyExtractor={
                    (item) => item.id}
            />
        </Page>
    );
}