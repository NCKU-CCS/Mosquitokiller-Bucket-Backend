import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import List from '../components/ItemList'
import Item from '../components//Item/Item'
import ItemEdit from '../components/Item/ItemEditForm'
import ItemAdd from '../components/Item/ItemAddForm'

// Redux Actions
import ReduxMethod from '../redux/reduxMethod'

const ROUTE = 'places'
const items = new ReduxMethod(ROUTE)

const {
  onFetchLoadItems, onFetchUpdateItem, 
  onFetchAddItem, onItemEdit
} = items.actions

class App extends Component {
  constructor (props) {
    super(props)
    this.itemId = 'place_id'
    this.nonEditList = ['place_id', 'created_at', 'updated_at', 'isEditing']
    this.postModel = [
      ['place_name', 'string'],
      ['place_address', 'string'],
      ['place_contact_person', 'string'],
      ['place_phone', 'string']
    ]
  }
  componentDidMount () {
    this.props.onFetchLoadItems()
  }

  render () {
    let itemList = this.props[ROUTE]
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Dengue fever</h1>
        </header>
        <ItemAdd 
          form={this.postModel}
          onFetchAddItem={this.props.onFetchAddItem}
        />
        <List name={ROUTE}>
          {
            itemList.map((item, index) => {
              return (
                (item.isEditing)
                  ? <ItemEdit
                      itemId={this.itemId}
                      key={index}
                      nonEditList={this.nonEditList}
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
  [ROUTE]: store[ROUTE],
 })

 const mapDispatchToProps = (dispatch) =>(
   bindActionCreators({
     onFetchLoadItems, onFetchUpdateItem, onFetchAddItem, onItemEdit
    }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(App)
