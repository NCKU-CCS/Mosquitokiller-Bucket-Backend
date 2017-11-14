import React, { Component } from 'react'

import { actions } from '../redux/places'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import List from '../components/ItemList'
import Item from '../components//Item/Item'
import ItemEdit from '../components/Item/ItemEditForm'
import ItemAdd from '../components/Item/ItemAddForm'

const {
  onFetchLoadItems, onFetchUpdateItem, 
  onFetchAddItem, onItemEdit
} = actions

const ROUTE = 'Place'

const postModel = [
  ['place_name', 'string'],
  ['place_address', 'string'],
  ['place_contact_person', 'string'],
  ['place_phone', 'string']
]

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
        <ItemAdd 
          form={postModel}
          onFetchAddItem={this.props.onFetchAddItem}
        />
        <List name={ROUTE}>
          {
            itemList.map((item, index) => {
              return (
                (item.isEditing)
                  ? <ItemEdit
                      key={index}
                      content={item}
                      onFetchUpdateItem={this.props.onFetchUpdateItem}
                    />
                  : <Item
                      key={index}
                      content={item}
                      onItemEdit={this.props.onItemEdit}
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
   bindActionCreators({
     onFetchLoadItems, onFetchUpdateItem, onFetchAddItem, onItemEdit
    }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(App)
