import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
      listItems: []
    }
  }

  handleInputChange = event => {
    const inputElement = event.target;

    this.setState(() => {
      return { todoValue: inputElement.value }
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.todoValue === '') {
      return;
    }

    this.setState(() => {
      return {
        todoValue: '',
        listItems: this.state.listItems.concat([this.state.todoValue])
      }
    })
  }

  handleDeleteItem = index => {
    const listItems = this.state.listItems;
    const updatedListItems = listItems.filter((item, i) =>  i != index);

    this.setState(() => {
      return { listItems: updatedListItems }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.todoValue}
            />
            <button type="submit">Add</button>
          </div>
        </form>

        <div className="list-items">
          <List
            listItems={this.state.listItems}
            deleteItem={this.handleDeleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
