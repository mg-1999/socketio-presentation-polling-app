/* ------------------------------------------------------------------------------------------------------
THIS FILE OUTPUTS THE 404 ERROR PAGE WHEN THE USER ENTERS A URL PATH / ROUTE THAT DOES NOT EXIST
------------------------------------------------------------------------------------------------------ */
// child component
// manages output of the app's "404" screen / page
/* ------------------------------------------------------------------------------------------------------
EXTERNAL FRAMEWORKS
------------------------------------------------------------------------------------------------------ */
// include / require the React framework and store it in a variable
var React = require('react');
// include / require the React Router and store it in a variable
// so we can use Link component below
var Router = require('react-router');
// Router's "Link" component (<a href=""></a>)
var Link = Router.Link;
/* ------------------------------------------------------------------------------------------------------
WHOOPS404 COMPONENT
------------------------------------------------------------------------------------------------------ */
// create React component for all instances of "404" screens / pages
var Whoops404 = React.createClass({
  render() {
    return (
      <div id = "not-found">
        <h4> Whoops... De pagina die je probeert te bereiken bestaat niet :(</h4>
        <ul>
          <li> <Link to="/"> Terug naar het stemmen </Link></li>
        </ul>
      </div>);
  }
});
// make this module's properties and functions (above) available to other files
module.exports = Whoops404;