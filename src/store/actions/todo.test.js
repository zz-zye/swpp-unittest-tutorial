import * as actionCreators from './todo'
import store from '../store'
import axios from 'axios' // for mock axios

describe('ActionCreators', () => {
  const stubTodoList = [
    {
      id: 0,
      title: 'title 1',
      content: 'content 1',
    },
  ] // used in mock of axios.get

  it(`'getTodo' should fetch todos correctly`, () => {
    // mock of axios.get
    axios.get = jest.fn((url) => {
      return new Promise((resolve, reject) => {
        const result = {
          status: 200,
          data: stubTodoList,
        }
        resolve(result)
      })
    })

    return store.dispatch(actionCreators.getTodos()).then(() => {
      const newState = store.getState()
      expect(newState.td.todos).toBe(stubTodoList)
      expect(axios.get).toHaveBeenCalledTimes(1)
    }) // return it because it is a promise
    // alternative: callback in it() can be async, and return can be await instead
    // alternative2: callback in it() receives 'done', and calls done() in the promise
  })
})
