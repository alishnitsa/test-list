import axios from '../../axios/axios-quiz'
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR } from './actionTypes'

function fetchQuizes() {
   return async dispatch => {
      dispatch(fetchQuizesStart())

      try {
         const response = await axios.get('/quizes.json')

         const quizes = []
         Object.keys(response.data).forEach((key, index) => {
            quizes.push({
               id: key,
               name: `Тест №${index + 1}`
            })
         })
         dispatch(fetchQuizesSuccess(quizes))
      } catch (e) {
         console.log(e)
         dispatch(fetchQuizesError)
      }
   }

}

function fetchQuizesStart() {
   return {
      type: FETCH_QUIZES_START
   }
}

function fetchQuizesSuccess(quizes) {
   return {
      type: FETCH_QUIZES_SUCCESS,
      quizes: quizes
   }
}

function fetchQuizesError(e) {
   return {
      type: FETCH_QUIZES_ERROR,
      error: e
   }
}

export { fetchQuizes, fetchQuizesStart, fetchQuizesSuccess, fetchQuizesError }