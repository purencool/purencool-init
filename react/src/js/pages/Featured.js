import React from "react";

import Article from "../components/Article";
import ApiCalls from "../utils/ApiCalls";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      newData: null
   }
  }
  
  /**
   *  Received request from server
   */
  componentDidMount(){
    ApiCalls.articleData()
      .then(function(data){
        const newData = data.map(c => {
          return  c.attributes.title;
        })
        const addElement = newData.map((title, i) => <Article key={i} title={title}/> );
        const newState = Object.assign({}, this.state, {
           newData: addElement
        });

     
        this.setState(newState);
      }.bind(this));
  }
  
  /**
   *  Render request
   */
  render() {
    const Articles = this.state.newData
    return (
        <div class="row">{Articles}</div>
    );
  }
}
