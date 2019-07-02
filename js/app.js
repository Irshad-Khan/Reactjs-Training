// React.render(
// 	React.createElement('h1',null,'Hello World')
// 	,
// 	document.getElementById('content')
// 	);

// OR

// H1 Tag creation
// var h1 = React.createElement('h1',null,'HelloWolrd');
// var content = document.getElementById('content');
// React.render(h1,content);


//Anchor Tag Creaion
// var anchor = React.createElement('a',{href: 'https://www.google.com', target: '_blank', title: 'google'},'Google');
// var content = document.getElementById('content');
// React.render(anchor,content);


// var h1 = React.createElement('h1', null, 'Amezing Line');
// var p = React.createElement('p', null, 'A quick brown fox jump over the lazy dog.');
// var content = document.getElementById('content');
// React.render(
// 	React.createElement('div', null, h1, p),
// 	content
// 	);

// Ending of Lab 1 HelloWolrd
// =================================================================================================


// Lab 2 Baby Step
// ===================================================================================================

class CustomeElement extends React.Component{
	render(){
		return(
			React.createElement('a', this.props, this.props.linktext) 
			)
	};
}
//this.prop get all standrad properties of html 5 like href title or target but linktext is not any
// prpperty and if we want to get this custom property then also write its name like this.props.linktext
var myLinks = React.createElement('div', null, 
	React.createElement(CustomeElement, {href: 'https://www.google.com', linktext: 'Google', title: 'Google', target: '_blank'}),
	React.createElement(CustomeElement, {href: 'https://www.facebook.com', linktext: 'facebook', title: 'facebook', target: '_blank'}),
	React.createElement(CustomeElement, {href: 'https://www.youtube.com', linktext: 'youtube', title: 'youtube', target: '_blank'}),

	);

var content = document.getElementById('content');
ReactDOM.render(myLinks,content);
// ending of Babysetep Lab
// ===================================================================================================




