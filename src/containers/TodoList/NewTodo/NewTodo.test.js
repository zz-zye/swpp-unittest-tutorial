import React from 'react'
import { getMockStore } from '../../../test-utils/mocks'

import { Provider } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../../../store/store'
import NewTodo from './NewTodo'
import { mount } from 'enzyme'

const stubInitialState = {
  todos: [
    { id: 1, title: 'TODO_TEST_TITLE_1', done: false },
    { id: 2, title: 'TODO_TEST_TITLE_2', done: false },
    { id: 3, title: 'TODO_TEST_TITLE_3', done: false },
  ],
  selectedTodo: null,
}

const mockStore = getMockStore(stubInitialState)

describe('<NewTodo />', () => {
  let newTodo

  beforeEach(() => {
    newTodo = (
      <Provider store={mockStore}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={NewTodo} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  })

  it('should set state properly on title input', () => {
    const title = 'TEST_TITLE'
    const component = mount(newTodo)
    const wrapper = component.find('input')
    wrapper.simulate('change', { target: { value: title } })

    const newTodoInstance = component.find(NewTodo.WrappedComponent).instance()
    expect(newTodoInstance.state.title).toEqual(title)
    expect(newTodoInstance.state.content).toEqual('')
  })
})
