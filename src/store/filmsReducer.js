import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { useDispatch } from 'react-redux'

// const initialState = [
//     {
//       srcImg: 'https://thumbs.dfs.ivi.ru/storage29/contents/0/e/73a67cb7f724a2c1f775cc9cde60ec.jpg/1216x524/?q=85',
//       srcVideo:
//         'https://region.dfs.ivi.ru/mp4-hd720/BxlazF9kgGmOvRXZezhCVQ,1691953005/storage39/contents/c/4/271040988f89f1b0bde8d4b86fd411.mp4',
//       filmName: 'Влюблён без памяти',
//       description: '1916 год. Две женщины, потерявшие мужей на войне, борются за сердце мужчины с амнезией',
//       raiting: 7,
//       price: 0,
//       category: 'Фильмы',
//     },
//     {
//       srcImg: 'https://thumbs.dfs.ivi.ru/storage23/contents/2/d/14c468663adff71c32ee89bd6e5b20.jpg/1216x524/?q=85',
//       srcVideo:
//         'https://region.dfs.ivi.ru/mp4-hd720/0Iae6KqrHfG843QEdNypfw,1691954163/storage29/contents/6/0/0ed87611ceecc7acadb728726bef96.mp4',
//       filmName: 'Ужас Истфилда. Первое изгнание',
//       description: 'Чтобы помочь душевнобольной жене, Рон обращается к экзорцисту, что приводит к страшным последствиям',
//       raiting: 7.6,
//       price: 299,
//       category: 'Фильмы',
//     },
//     {
//       srcImg: 'https://thumbs.dfs.ivi.ru/storage38/contents/5/5/65b33ce035ebba07d06cd176e09a57.jpg/1216x524/?q=85',
//       srcVideo:
//         'https://region.dfs.ivi.ru/mp4-hd720/VAbI1VEroF42q_5LIyE8MA,1691954090/storage28/contents/4/9/7e4ba0f4f6d179febfc60acd5eff86.mp4',
//       filmName: 'Детки в порядке',
//       description: 'Две подруги отстают от поезда с детьми и пускаются в погоню по небу и суше. Яркая испанская комедия',
//       raiting: 7.3,
//       price: 299,
//       category: 'Фильмы',
//     },
//     {
//       srcImg: 'https://thumbs.dfs.ivi.ru/storage29/contents/1/8/ba281851f870edfc82cf8430448aad.jpg/1216x524/?q=85',
//       srcVideo:
//         'https://region.dfs.ivi.ru/mp4-hd720/nNp16JPS56Qe-f_Q2olbsw,1691954247/storage28/contents/5/8/b9180a21b44a8be0247b3bce5a9276.mp4',
//       filmName: 'Трио в перьях 2',
//       description: 'Храбрый и обаятельный воробей Ричард начинает увлекательную охоту за сокровищами',
//       raiting: 8.2,
//       price: 0,
//       category: 'Мультфильмы',
//     },
//     {
//       srcImg: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/9/af3697721d5332cafbcbb3b2e7fdbf.jpg/1216x524/?q=85',
//       srcVideo:
//         'https://region.dfs.ivi.ru/mp4-hd720/nNp16JPS56Qe-f_Q2olbsw,1691954247/storage28/contents/5/8/b9180a21b44a8be0247b3bce5a9276.mp4',
//       filmName: 'Хор',
//       description: 'СССР, 1972. Детский хор готовится к фестивалю «Песня года», сталкиваясь с испытаниями и интригами',
//       raiting: 7.1,
//       price: 0,
//       category: 'Сериалы',
//     },
//   ]

const initialState = {
  films: [],
  topFilms: [],
  newMovies: [],
  placeNumber: [
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number2.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number3.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number4.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number6.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number7.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number8.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number9.svg',
    'https://solea-parent.dfs.ivi.ru/picture/bypass/number10.svg',
  ],
  modalWindow: [
    {
      heading: 'Подписка Иви',
      centeredModal: 'Подключай и смотри новые фильмы и сериалы со всего мира в отличном качестве и без рекламы',
      modalBody: 'Попробовать 30 дней за 1 ₽',
    },
    {
      heading: 'Активация сертификата',
      centeredModal:
        'Введи сертификат или промокод. Для некоторых сертификатов или промокодов может потребоваться банковская карта',
      modalBody: 'Ввести сертификат',
    },
  ],
}

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const baseURL = 'http://localhost:5000/api/'
  const response = await axios.get(baseURL + 'film')
  return response.data
})

export const postRating = createAsyncThunk('films/postRating', async ({ id, rating }) => {
  const baseURL = 'http://localhost:5000/api/'

  const response = await axios.put(baseURL + 'film/' + id, {
    id: id,
    rating: rating,
  })
  return response.data
})

export const filmsReducer = createSlice({
  name: 'films',
  initialState: initialState,
  reducers: {
    findTopFilms: (state) => {
      if (state.films.length) {
        state.topFilms.push(state.films)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      if (!state.films.length) {
        state.films.push(...action.payload.rows)

        state.topFilms.push(...state.films.sort((a, b) => b.price - a.price).filter((_, i) => i < 3))

        state.newMovies.push(...state.films.sort((a, b) => b.createdAt - a.createdAt).filter((_, i) => i < 3))
      }
    })
    builder.addCase(postRating.fulfilled, (state, { payload }) => {
      state.newMovies.map((item, i) => {
        if (item.id === payload.id) {
          item.ratingCount++
          item.ratingSum = payload.ratingSum
        }
      })
    })
  },
})

export const { findTopFilms } = filmsReducer.actions
export default filmsReducer.reducer

export const selectAllFilms = (store) => store.FilmsReducer.films
export const selectModalText = (store) => store.FilmsReducer.modalWindow
export const selectTopFilms = (store) => store.FilmsReducer.topFilms
export const takePlaceNumber = (store) => store.FilmsReducer.placeNumber
export const selectNewMovies = (store) => store.FilmsReducer.newMovies
