import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import {
  MainWrapper,
  GenInput,
  GenText,
  RestaurantCard,
  GenNavBar,
  ListenerCard
} from '../rappi4bUi/rappi4bUi';

import {
  CategoriesList,
  MainWrapper2,
  OrderInfo
} from './styles';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState('ALL');
  const [categoryList, setCategoryList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeOrder, setActiveOrder] = useState([
    {
          totalPrice: 122.69999999999999,
          restaurantName: "Habibs",
          createdAt: 1592597161886,
          expiresAt: 1592600761886
  }
  ]);

  const history = useHistory();

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

  //requisição login para autenticação do usuário
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

  //TODO -- função que mostra os pedidos em andamento
  // const activeOrder = () => {
    
  // }

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

  //função side-effect que 'seta' no estado o andamento dos pedidos ativos
  useEffect(() => {
    api.get('active-order', {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then(response => {
      setActiveOrder(response.data)
    })
    .catch(err => {
      console.error(err)
    });

  }, [])

  return (
    <MainWrapper>

      <GenInput
        type='text'
        id='idInputSearch'
        placeholder='Restaurante'
        onChange={onChangeSearch}
        value={inputValue}
        onKeyDown={filteredByText}
        onClick={() => setDisplayRestaurants('SEARCH')}
      />

      <CategoriesList>
        {categoryList.map((category) => {
          return (
            <GenText
              sticky
              hover
              id={category}
              onClick={filteredRestaurantsLists}
            >
              {category}
            </GenText>
          )
        })}
      </CategoriesList>

      <MainWrapper2>
        {
          displayRestaurants === 'CATEGORY' &&
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                openDetails={() => history.push(`/restaurant-detail/${restaurant.id}`)}
                src={restaurant.logoUrl}
                restaurantName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping.toFixed(2)}
              />
            )
          })

          ||

          displayRestaurants === 'SEARCH' &&
          searchList.map((restaurant) => {
            return (
              <RestaurantCard
                openDetails={() => history.push(`/restaurant-detail/${restaurant.id}`)}
                src={restaurant.logoUrl}
                restaurantName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping.toFixed(2)}
              />
            )
          })

          ||

          restaurantsList.map((restaurant) => {
            return (
              <RestaurantCard
                openDetails={() => history.push(`/restaurant-detail/${restaurant.id}`)}
                src={restaurant.logoUrl}
                restaurantName={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping.toFixed(2)}
              />
            )
          })
        }

          <ListenerCard
            // id={}
            // restaurantName={restaurant.restaurantName}
            // totalPrice={restaurant.totalPrice.toFixed(2)}
          />

      </MainWrapper2>

      <GenNavBar
        onClickToHome={() => history.push('/home')}
        onClickToCart={() => history.push('/cart')}
        onClickToProfile={() => history.push('/perfil')}
      />

    </MainWrapper>

  );
};

export default HomePage;