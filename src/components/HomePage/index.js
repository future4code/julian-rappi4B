import React, { useState, useEffect } from 'react';
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

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState('ALL');
  const [categoryList, setCategoryList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //função que mapeia e filtra a lista de categorias
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

  //TODO -- requisição POST Login está retornando 404 - corrigir problema de autenticação 
  const Login = () => {

    const body = {
      email: 'bia@gmail.com',
      password: '123456'
    }

    api.post('login', body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
      });

  }

  //função que filtra a lista de restaurantes conforme a categoria escolhida pelo usuário
  const filteredRestaurantsLists = (event) => {
    setDisplayRestaurants('CATEGORY');

    const item = event.target.id

    const list = restaurantsList.filter((restaurant) => {
      return restaurant.category === item
    })

    setFilteredRestaurants(list)
  }

  const onChangeSearch = (e) => {
    setInputValue(e.target.value);
  }

  //TODO-- refinar logica -- função da barra de busca, que retorna o texto que o usuário digitou no input
  const filteredByText = () => {
    const filter = restaurantsList.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(inputValue, 0)
    });

    setSearchList(filter);
  }

  //função side-effect que retorna os dados atualizados dos restaurantes, buscados pelo endpoint Get Restaurants
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

  //função side-effect que 'seta' no estado a lista de categorias filtrada
  useEffect(() => {
    let categories

    if (restaurantsList.length > 0) {
      categories = filteredCategories()

      setCategoryList(categories)
    }

  }, [restaurantsList])

  return (
    <HomePageContainer>

      <InputContainer>

        <InputSearch
          type='text'
          id='idInputSearch'
          placeholder='Restaurante'
          onChange={onChangeSearch}
          value={inputValue}
          onKeyDown={filteredByText}
          onClick={() => setDisplayRestaurants('SEARCH')}
        />

      </InputContainer>

      <CategoriesList>
        {categoryList.map((category) => {
          return <ScrollItem id={category} onClick={filteredRestaurantsLists}>{category}</ScrollItem>
        })}
      </CategoriesList>

      <ViewCardsContainer>
        {
          displayRestaurants === 'CATEGORY' && 
          filteredRestaurants.map((restaurant) => {
              return <ViewCards restaurant={restaurant} />
            })
          ||
          displayRestaurants === 'SEARCH' &&
            searchList.map((restaurant) => {
              return <ViewCards restaurant={restaurant} />
            })
          ||         
            restaurantsList.map((restaurant) => {
              return <ViewCards restaurant={restaurant} />
            })
          }
      </ViewCardsContainer>

    </HomePageContainer>

  );
};

export default HomePage;