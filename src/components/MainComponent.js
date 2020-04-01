import React, { Component } from 'react';
import {ROOT,Node} from "../shared/knarytree.js";
import  {LevelComponent} from './LevelComponent.js';



export default class MainComponent extends Component {
	constructor(props) {
    
        super(props);
        //this.addToRoot= this.addToRoot.bind(this);
		this.activeSequence=[0,0];
		//if there is 1 element, then there is only a root and its array
		// if there are 2 elements, then it looks into the second element
		
     
	}
	render() {
		var all=[];
		var currentNode=ROOT;
		// if (this.activeSequence.length==1){
			all.push(<LevelComponent arrayOfValue={ROOT.array} onButtonClick={()=>{ROOT.addInsideFolder("Untitled");this.forceUpdate();}}></LevelComponent>)
		// }
		if(this.activeSequence.length>1){
			for(var i=1;i<this.activeSequence.length;i++){
				currentNode=currentNode.array[this.activeSequence[i]];
				all.push(<LevelComponent arrayOfValue={currentNode.array} onButtonClick={()=>{currentNode.addInsideFolder("Untitled");this.forceUpdate();}}></LevelComponent>)
			}
		}
		
  	  return (
  	  <div>
          <div className="space"> </div>
          {all}
          
    	</div>
	
	);
	}
	
}