import React, { Component } from 'react'
import './App.css'

import { actions } from '../redux/places'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import List from '../components/ItemList'
import Item from '../components/Item'

const onFetchLoadItems =  actions.onFetchLoadItems

class App extends Component {
  componentDidMount () {
    this.props.onFetchLoadItems()
  }

  render () {
    let itemList = this.props.places
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome</h1>
        </header>
        <List>
          {
            itemList.map((item, index) => {
              return (
                <Item
                  key={item.place_id}
                  id={item.place_id}
                  content={item}
                />
              )
            })
          }
        </List>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  places: store.places,
 })

 const mapDispatchToProps = (dispatch) =>(
   bindActionCreators({ onFetchLoadItems }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(App)
