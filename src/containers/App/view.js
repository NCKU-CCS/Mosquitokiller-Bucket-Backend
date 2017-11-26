import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import List from '../../components/ItemList'
import ItemHead from '../../components/Item/ItemHead'
import Item from '../../components/Item/Item'
import ItemEdit from '../../components/Item/ItemEditForm'
import ItemAdd from '../../components/Item/ItemAddForm'

// Method
import mapKeysToHeads from '../../utility/heads'

class App extends Component {

  componentDidMount () {
    this.props.onFetchLoadItems()
  }

  render () {
    const itemList = this.props.itemList
    const heads = itemList[0] ? Object.keys(itemList[0]).reduce(mapKeysToHeads, []) : []
    return (
      <div className='App'>
        <Header/>
        <ItemAdd 
          form={this.props.postModel}
          onFetchAddItem={this.props.onFetchAddItem}
        />
        <List name={this.props.route}>
            <ItemHead heads={heads}/>
          {
            itemList.map((item, index) => {
              return (
                (item.isEditing)
                  ? <ItemEdit
                      key={index}
                      itemId={this.props.itemId}
                      form={this.props.postModel}
                      nonEditList={this.props.nonEditList}
                      content={item}
                      onFetchUpdateItem={this.props.onFetchUpdateItem}
                    />
                  : <Item
                      key={index}
                      divideList={this.props.divideList}
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
