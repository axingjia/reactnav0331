import React, { Component } from 'react';
import {ROOT,Node,isInt} from "../shared/knarytree.js";
import  {LevelComponent} from './LevelComponent.js';
import { connect } from 'react-redux';
import { changeName,addCell} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    root:state.root
  }
}

const mapDispatchToProps = dispatch => ({
	// addfromRoot: (oldNodeName,newNodeName) => dispatch(postComment(dishId, rating, author, comment)),
    // unFlagAllByParent:(parentsName)=>dispatch(unFlagAllByParent(parentsName)),
    //changeName: (sequenceArray,oldName,newName) => dispatch(changeName(sequenceArray,oldName,newName))
	addCell:(sequenceArray,newName)=>dispatch(addCell(sequenceArray,newName))
});


export class MainComponent extends Component {
	constructor(props) {
    
        super(props);
        //this.addToRoot= this.addToRoot.bind(this);
		this.activeSequence=[0,0];
		//if there is 1 element, then there is only a root and its array
		// if there are 2 elements, then it looks into the second element
		
     
	}
	render() {
        // if(isInt('2')){
        //     alert('yes');
        // }else{
        //     alert('no');
        // }
		var all=[];
		var currentNode=this.props.root;
		// if (this.activeSequence.length==1){
			all.push(<LevelComponent arrayOfValue={this.props.root.array} onButtonClick={()=>{this.props.addCell([0],"hhh");this.forceUpdate();}}
			archSequenceArray={[0]} setUpdate={()=>{this.forceUpdate()}}></LevelComponent>)
		// }
		if(this.activeSequence.length>1){
			for(var i=1;i<this.activeSequence.length;i++){
				console.log('main current ',currentNode);
				currentNode=currentNode.array[this.activeSequence[i]];
				all.push(<LevelComponent arrayOfValue={currentNode.array} onButtonClick={()=>{this.props.addCell(this.activeSequence,"hhh");this.forceUpdate();}}
				archSequenceArray={this.activeSequence.slice(0,i+1)} setUpdate={()=>{this.forceUpdate()}}></LevelComponent>)
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

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
