import React, { Component } from 'react'

// Components
import List from '../components/ItemList'
import Item from '../components//Item/Item'
import ItemEdit from '../components/Item/ItemEditForm'
import ItemAdd from '../components/Item/ItemAddForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.route = this.props.route
    this.itemId = this.props.itemId
    this.nonEditList = this.props.nonEditList
    this.postModel = this.props.postModel
  }
  componentDidMount () {
    this.props.onFetchLoadItems()
  }

  render () {
    let itemList = this.props.itemList
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Dengue fever</h1>
        </header>
        <ItemAdd 
          form={this.postModel}
          onFetchAddItem={this.props.onFetchAddItem}
        />
        <List name={this.route}>
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

export default App
