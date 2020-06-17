import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ViewCards from './ViewCards';
import api from '../../services/api';
import {
  HomePageContainer,
  CategoriesList,
  ScrollItem,
  InputContainer,
  InputSearch,
  ViewCardsContainer
} from './styles';

//TODO ao clicar no input de busca, exibe o texto <p>Busque por nome de restaurante</p>
//TODO fazer renderização no input de busca, do tipo 'se a busca encontrar não encontrar tal restaurante, mostrar <p>Não encontramos :(</p>

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);

  const history = useHistory();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredCategories = () => {
    const list = restaurantsList.map((restaurant) => {
      const category = restaurant.category
      return category
    })
    const categories = list.filter((category) => {
      return !categoryList.includes(category)
    })
    return categories
  }

  const Login = () => {

    const body = {
      email: '"venganzakills@gmail.com",',
      password: '123456'
    }

    api.post('login', body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
      });

  }
*******
  let filteredSearch = () => {
    const searchBox = restaurantsList.filter((search) => {
      const search = restaurant.name
      search.toLowerCase().includes(e.target.value)
    })
    restaurantsList(filteredSearch)
  }

  useEffect(() => {

    Login();

    api.get('restaurants', {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then(response => {
        setRestaurantsList(response.data.restaurants)
      })
      .catch(err => {
        console.error(err)
      });

  }, []);

  useEffect(() => {
    let categories

    if (restaurantsList.length > 0) {
      categories = filteredCategories()

      setCategoryList(categories)
    }

  }, [restaurantsList]);

  return (
    <HomePageContainer>

      <InputContainer>

        <InputSearch
          type='text'
          id='idInputSearch'
          placeholder='Restaurante'
          onChange={onChangeSearch}
          onKeyUp={''}
        />

      </InputContainer>

      <CategoriesList>
        {categoryList.map((list) => {
          return <ScrollItem onClick={() => console.log('não se esqueça de me linkar ao meu respectivo restaurante!!')}>{list}</ScrollItem>
        })}
      </CategoriesList>

      <ViewCardsContainer>
        {restaurantsList.map((restaurant) => {
          return <ViewCards restaurant={restaurant} />
        })}
      </ViewCardsContainer>

    </HomePageContainer>

  );
};

export default HomePage;