/* ------------------------------------------------------------------------------------------------------
OUTPUTS A LIST OF QUESTIONS FOR THE SPEAKER TO CHOOSE / ASK THE AUDIENCE
------------------------------------------------------------------------------------------------------ */

var React = require('react');

// create React component
var Questions = React.createClass({
  // emits an "ask" event and sends the clicked / current question to the server
  ask(question) {
    this.props.emit('ask', question);
  },
  
  // returns a JSX table row element
  // invoked once for each question
  // "question" is the question
  // "i" is the index of that question
  // <span onClick={this.ask.bind(null, question)}>{question.q}</span> means that when the speaker clicks on the <span>, question.q gets sent into the ask() function as the "question" argument
  addQuestion(question, i) {
    return ( <div key={i}><span onClick={this.ask.bind(null, question)}> {question.q} </span></div>);
  },

  // render the view
  render() {
    // .map() functions returns an array of JSX table row elements
    return (
      <div className="row">
        <div id="questions"> {this.props.questions.map(this.addQuestion)}</div>
      </div>);
  }
});
// make this module's properties and functions (above) available to other files
module.exports = Questions;