import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenStyleDefault from '../Layouts';
import FormCategory from './CategoryForm';

export default function CategoryItemsMarket() {
  const navigation = useNavigation();

  return (
        <ScreenStyleDefault>
          <FormCategory></FormCategory>
        </ScreenStyleDefault>

    );
};
