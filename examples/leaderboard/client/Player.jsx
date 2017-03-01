var React = require('react');
var classNames = require('classnames');

var Player = React.createClass({
  propTypes: {
    doc: React.PropTypes.object.isRequired,
    onPlayerSelected: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool.isRequired
  },

  handleClick: function(event) {
    this.props.onPlayerSelected(this.props.doc.id);
  },

  render: function() {
    var classes = {
      'player': true,
      'selected': this.props.selected
    };

    return (
      <li className={classNames(classes)} onClick={this.handleClick}>
        <span className="name">{this.props.doc.data.name}</span>
        <span className="score">{this.props.doc.data.score}</span>
      </li>
    );
  }
});

module.exports = Player;
