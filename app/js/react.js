function myFunction() {
    document.getElementById("demo").innerHTML = "Text changed :)";
  }

class ShoppingList extends React.Component {
    render() {
        return 'Some Text (React Element)';
    }
}

/*
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
*/

const e = React.createElement;
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(ShoppingList), domContainer);
