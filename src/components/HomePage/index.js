import React, { useState, useEffect, useContext } from 'react';
import {useLocation} from 'react-router-dom';
import {usePrivatePage} from '../../hooks/hooks';
import {validedToken} from '../../utils/utils';
import RestaurantsListContext from '../../contexts/RestaurantsListContext';
import UserInfosContext from '../../contexts/UserInfosContext';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import LogoRappiW from '../../assets/logo-rappi4-white.png';

import {
  MainWrapper,
  GenInput,
  GenText,
  RestaurantCard,
  GenNavBar,
  ListenerCard,
  LoadingPage
} from '../rappi4bUi/rappi4bUi';

import {
  CategoriesList,
  MainWrapper2
} from './styles';

const HomePage = () => {

  const {pathname} = useLocation();
  
  const restaurantsListContext = useContext(RestaurantsListContext);
  const userInfosContext = useContext(UserInfosContext);
  const history = useHistory();

  const token = validedToken(userInfosContext);
  usePrivatePage(token);

  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [displayRestaurants, setDisplayRestaurants] = useState('ALL');
  const [searchList, setSearchList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  

  const filteredCategories = () => {
    const list = restaurantsList.map((restaurant) => {
      const category = restaurant.category
      return category
    })
    const categories = list.filter((category) => {
      return !categoryList.includes(category)
    })
    return categories
  };
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

  //função da barra de busca, que retorna o texto que o usuário digitou no input
  const filteredByText = (event) => {
    
    const filter = restaurantsList.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(event.target.value, 0)
    });
    setSearchList(filter);
    setDisplayRestaurants('SEARCH');
  }
  //função side-effect que retorna os dados atualizados dos restaurantes, buscados pelo endpoint Get Restaurants
  useEffect(() => {
    if(restaurantsListContext.restaurantsList.length === 0) {
      api.get('restaurants', {
        headers: {
          auth: token
        }
      })
        .then(response => {
          setRestaurantsList(response.data.restaurants)
          restaurantsListContext.dispatch({ type: 'SET_RESTAURANTS_LIST', restaurantsList: response.data.restaurants })
        })
        .catch(err => {
          token === null ? window.alert('Sessão expirada. Faça login e se mantenha logado.') :
          window.alert(err.response.data.message);

          history.replace('/');
        });
    }
    else {
      setRestaurantsList(restaurantsListContext.restaurantsList)
    }
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
        auth: token
      }
    })
      .then(response => {
        setActiveOrder(response.data.order)
      })
  }, []);

  useEffect(()=>{
    restaurantsList.length > 0 && setTimeout(()=>setShowLoadingPage(false), 500);
  },[restaurantsList]);
  
  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return(
      <MainWrapper>
        <GenInput
          onBlur={()=>setDisplayRestaurants('ALL')}
          type='text'
          id='idInputSearch'
          placeholder='Busque o restaurante pelo nome'
          onChange={onChangeSearch}
          value={inputValue}
          onKeyDown={filteredByText}
        />
        <CategoriesList>
          {categoryList.map((category, index) => {
            return (
              <GenText
                sticky
                hover
                key={index}
                id={category}
                onClick={filteredRestaurantsLists}
              >
                {category}
              </GenText>
            )
          })}
        </CategoriesList>
        <MainWrapper2 onClick={
        ()=> filteredRestaurants.length > 0 && setDisplayRestaurants('ALL')
        }>
          {
            displayRestaurants === 'CATEGORY' &&
            filteredRestaurants.map((restaurant, index) => {
              return (
                <RestaurantCard
                  key={index}
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
            searchList.map((restaurant, index) => {
              return (
                <RestaurantCard
                  key={index}
                  openDetails={() => history.push(`/restaurant-detail/${restaurant.id}`)}
                  src={restaurant.logoUrl}
                  restaurantName={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping.toFixed(2)}
                />
              )
            })

            ||

            restaurantsList.map((restaurant, index) => {
              return (
                <RestaurantCard
                  key={index}
                  openDetails={() => history.push(`/restaurant-detail/${restaurant.id}`)}
                  src={restaurant.logoUrl}
                  restaurantName={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping.toFixed(2)}
                />
              )
            })
          }

          {
            activeOrder !== null &&
            <ListenerCard
              restaurantName={activeOrder.restaurantName}
              totalPrice={activeOrder.totalPrice.toFixed(2)}
            />
          }
        </MainWrapper2>
        <GenNavBar
          pathName={pathname}
          onClickToHome={() => history.push('/home')}
          onClickToCart={() => history.push('/cart')}
          onClickToProfile={() => history.push('/perfil')}
        />
      </MainWrapper>
    )
  }
  return (
    conditionalRender()
  );
};

export default HomePage;