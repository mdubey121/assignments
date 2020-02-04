import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";
import {Link} from 'react-router-dom';
export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  render() {
    return (
      <div className="component-emoji-results">
          {this.props.emojiData.map( emojiData => (
          <Link to = {`/${emojiData.title}`} >
            <EmojiResultRow
             key={emojiData.title}
             symbol={emojiData.symbol}
             title={emojiData.title}
            />
          </Link>
          ))}
      </div>
    );
  }
}
