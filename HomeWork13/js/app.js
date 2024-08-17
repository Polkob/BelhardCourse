const booksObj = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    price: 15.99,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 9.99,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 14.99,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 13.99,
  },
  {
    id: 7,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 11.99,
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 16.99,
  },
  {
    id: 9,
    title: "Moby Dick",
    author: "Herman Melville",
    price: 18.99,
  },
  {
    id: 10,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 20.99,
  },
  {
    id: 11,
    title: "The Odyssey",
    author: "Homer",
    price: 17.99,
  },
  {
    id: 12,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 13.49,
  },
  {
    id: 13,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 12.49,
  },
  {
    id: 14,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 19.99,
  },
  {
    id: 15,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 21.99,
  },
  {
    id: 16,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    price: 10.49,
  },
  {
    id: 17,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    price: 15.49,
  },
  {
    id: 18,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    price: 14.49,
  },
  {
    id: 19,
    title: "The Bell Jar",
    author: "Sylvia Plath",
    price: 13.99,
  },
  {
    id: 20,
    title: "The Road",
    author: "Cormac McCarthy",
    price: 16.49,
  },
  {
    id: 21,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 11.99,
  },
  {
    id: 22,
    title: "The Fault in Our Stars",
    author: "John Green",
    price: 12.99,
  },
  {
    id: 23,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 10.99,
  },
  {
    id: 24,
    title: "Divergent",
    author: "Veronica Roth",
    price: 9.99,
  },
  {
    id: 25,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 19.99,
  },
  {
    id: 26,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 14.99,
  },
  {
    id: 27,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 13.49,
  },
  {
    id: 28,
    title: "Life of Pi",
    author: "Yann Martel",
    price: 15.49,
  },
];

const todoList = {
  Влад: [
    {
      id: 0,
      title: "Купить продукты",
      urgent: false,
      state: true,
    },
    {
      id: 1,
      title: "Позвонить нотариусу",
      urgent: true,
      state: true,
    },
    {
      id: 2,
      title: "Оплатить налоги",
      urgent: true,
      state: false,
    },
    {
      id: 3,
      title: "Узнать цены на билеты",
      urgent: false,
      state: false,
    },
  ],
  Игорь: [
    {
      id: 0,
      title: "Помыть посуду",
      urgent: false,
      state: false,
    },
    {
      id: 1,
      title: "Не проспать работу",
      urgent: true,
      state: false,
    },
    {
      id: 2,
      title: "Купить подарок жене",
      urgent: true,
      state: true,
    },
    {
      id: 3,
      title: "Вынести мусор",
      urgent: false,
      state: true,
    },
  ],
};

class StartApp extends React.Component {
  constructor() {
    super();
    this.state = { selected: false, itemsObject: todoList };
    this.addItem = this.addItem.bind(this);
  }

  addItem = (title) => {
    let newItemsObject = Object.assign({}, this.state.itemsObject);
    if (this.state.selected) {
      const newItemId = newItemsObject[this.state.selected].length;
      newItemsObject[this.state.selected].push({
        id: newItemId,
        title: title,
        urgent: false,
        state: false,
      });
      this.setState({ itemsObject: newItemsObject });
    }
  };

  setSelected = function (name) {
    if (name !== this.state.selected) {
      this.setState({ selected: name });
    } else {
      this.setState({ selected: false });
    }
  };

  changeItemState = function (id) {
    let newItemsObject = Object.assign({}, this.state.itemsObject);
    newItemsObject[this.state.selected][id].state =
      !newItemsObject[this.state.selected][id].state;
    this.setState({ itemsObject: newItemsObject });
  };

  render() {
    return (
      <div>
        <ButtonsList
          selected={this.state.selected}
          buttonsList={Object.keys(this.state.itemsObject)}
          onClickHandler={this.setSelected.bind(this)}
        ></ButtonsList>
        {this.state.selected ? (
          <ItemsList
            changeItemState={this.changeItemState.bind(this)}
            itemsList={this.state.itemsObject[this.state.selected]}
            addItem = {this.addItem}
          ></ItemsList>
        ) : (
          ""
        )}
      </div>
    );
  }
}

class ButtonsList extends React.Component {
  render() {
    const self = this;
    let buttons = [];
    this.props.buttonsList.forEach((name, index) => {
      buttons.push(
        <ButtonItem
          selected={name === self.props.selected}
          key={index}
          value={name}
          onClickHandler={self.props.onClickHandler}
        ></ButtonItem>
      );
    });
    return <div className="button-wrapper">{buttons}</div>;
  }
}

class ButtonItem extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClickHandler(this.props.value);
        }}
        className={this.props.selected ? "selected" : ""}
      >
        {this.props.value}
      </button>
    );
  }
}

class ItemsList extends React.Component {
  render() {
    const self = this;
    let items = [];
    this.props.itemsList.forEach((item, index) => {
      items.push(
        <ListItem
          changeItemState={self.props.changeItemState}
          key={index}
          item={item}
        ></ListItem>
      );
    });
    return (
      <div>
        <ol className="items-list">{items}</ol>
        <AddItem clickHandler={this.props.addItem} />
      </div>
    );
  }
}

class ListItem extends React.Component {
  render() {
    let className = "list-item";
    if (this.props.item.urgent) {
      className += " urgent";
    }
    if (this.props.item.state) {
      className += " done";
    }
    return (
      <li className={className}>
        <input
          id={"list-item-" + this.props.item.id}
          type="checkbox"
          checked={this.props.item.state}
          onChange={() => {
            this.props.changeItemState(this.props.item.id);
          }}
        />
        <label htmlFor={"list-item-" + this.props.item.id}>
          {this.props.item.title}
        </label>
      </li>
    );
  }
}

class AddItem extends React.Component {
  handleAddItem = () => {
    const newItemTitle = prompt('Введите название нового дела');
    if (newItemTitle) {
      this.props.clickHandler(newItemTitle);
    }
  };

  render() {
    return (
      <div className="add-item">
        <button onClick={this.handleAddItem}>Добавить</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('app');
const rootReactElement = ReactDOM.createRoot(rootElement);

rootReactElement.render(<StartApp></StartApp>);