import React from 'react'
import ReactDom from 'react-dom'


class HelloWorld extends React.Component {

	render() {
		return (<h1>Hello World</h1>)
	}

}

ReactDom.render(<HelloWorld />, document.getElementById('app'));