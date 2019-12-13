import React from 'react';

class List extends React.Component {
  render () {
    const props = this.props;
    const listItems = props.listItems;
    const listItemElements = listItems.map((item, i) => {
      return (
        <li key={item + i}>
          {item}  
          <button
            onClick={() => props.deleteItem(i)}
            type="button">
            Delete
          </button>
        </li>
      );
    });

    return (
      <ol>{listItemElements}</ol>
    );
  }
}

export default List;
