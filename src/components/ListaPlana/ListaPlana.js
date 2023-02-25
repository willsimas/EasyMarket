import React from 'react';
import { View, Text, FlatList } from 'react-native';

const categorias=[
    {
        id:'001',
        categoryName:"Mercearia"
    },
    {
        id:'002',
        categoryName:"Frios e Laticínios"
    },
    {
        id:'003',
        categoryName:"HortiFruti"
    },
    {
        id:'004',
        categoryName:"Carnes"
    },
    {
        id:'005',
        categoryName:"Bebidas"
    },
    {
        id:'006',
        categoryName:"Higiene"
    },
    {
        id:'007',
        categoryName:"Limpeza"
    },
    {
        id:'008',
        categoryName:"Outros"
    }
]

export default function Lp(){
    return(
        <View>
            <FlatList 
                data={categorias}
                keyExtractor={item=> item.id}
                renderItem={({item})=><Text>Descrição:{} - Valor:{}</Text>}
            />
        </View>
    )
}