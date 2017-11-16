import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import List from '../../components/ItemList'
import ItemHead from '../../components/Item/ItemHead'
import Item from '../../components/Item/Item'
import ItemEdit from '../../components/Item/ItemEditForm'
import ItemAdd from '../../components/Item/ItemAddForm'

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
    const itemList = this.props.itemList
    const heads = itemList[0] ? Object.keys(itemList[0]) : []
    return (
      <div className='App'>
        <Header/>
        <ItemAdd 
          form={this.postModel}
          onFetchAddItem={this.props.onFetchAddItem}
        />
        <List name={this.route}>
            <ItemHead heads={heads}/>
          {
            itemList.map((item, index) => {
              return (
                (item.isEditing)
                  ? <ItemEdit
                      key={index}
                      itemId={this.itemId}
                      form={this.postModel}
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
