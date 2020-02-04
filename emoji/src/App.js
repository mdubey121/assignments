import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import {BrowserRouter,Route} from "react-router-dom";
import {Emoji} from './emoji';
import Clipboard from 'clipboard';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };
   componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <BrowserRouter>
        <div >
        <Route path ="/" exact>
          
            <Header />
            <SearchInput textChange={this.handleSearchChange} />
            <EmojiResults emojiData={this.state.filteredEmoji} />
          
        </Route>
        <Route path = "/:title">
            <Emoji />
        </Route>
        </div>
      </BrowserRouter>
    );
  }
}
