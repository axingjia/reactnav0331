import React, { Component } from 'react';
// import {ROOT,Node,isInt,showDir} from "../shared/knarytree.js";
import  {LevelComponent} from './LevelComponent.js';
import { connect } from 'react-redux';
import { changeName,addCell,showDir} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    root:state.root,
    activeSequence:state.activeSequence
  }
}

const mapDispatchToProps = dispatch => ({
	// addfromRoot: (oldNodeName,newNodeName) => dispatch(postComment(dishId, rating, author, comment)),
    // unFlagAllByParent:(parentsName)=>dispatch(unFlagAllByParent(parentsName)),
    //changeName: (sequenceArray,oldName,newName) => dispatch(changeName(sequenceArray,oldName,newName))
	addCell:(sequenceArray,newName)=>dispatch(addCell(sequenceArray,newName)),
    showDir:(sequenceArray,name)=>dispatch(showDir(sequenceArray,name))
});


export class MainComponent extends Component {
	constructor(props) {
    
        super(props);
        //this.addToRoot= this.addToRoot.bind(this);
		// this.activeSequence=[0,0];
        this.setActiveSequence=this.setActiveSequence.bind(this);
        // this.state={activeSequence:[0]};
        // this.setState({activeSequence:this.props.activeSequence});
		//if there is 1 element, then there is only a root and its array
		// if there are 2 elements, then it looks into the second element
		
     
	}
    
    setActiveSequence(newActiveSequence){
        this.setState({activeSequence:newActiveSequence});
        // console.log("from main, activesequence ",this.state.activeSequence)
        // console.log('state',this.state)
    }
    
    componentDidMount() {
        // check if the user ID matches what's in the database
        // if the above is true, setState as needed
        this.props.showDir([0],'children1');
        console.log(this.props.activeSequence);
        // this.setActiveSequence(showDir(this.props.root,[0],"children3"));
        // this.setState({activeSequence:this.props.activeSequence});
    }
    
	render() {
        // if(isInt('2')){
        //     alert('yes');
        // }else{
        //     alert('no');
        // }
        // console.log("newActiveSequence",showDir(this.props.root,[0],"children1"));
        
        
		var all=[];
		var currentNode=this.props.root;
		// if (this.activeSequence.length==1){
			all.push(<LevelComponent key={0} arrayOfValue={this.props.root.array} onButtonClick={()=>{this.props.addCell([0],"hhh");this.forceUpdate();}}
			archSequenceArray={[0]} setUpdate={()=>{this.forceUpdate()}}
            setActiveSequence={this.setActiveSequence}></LevelComponent>)
		// }
		if(this.props.activeSequence.length>1){
            
			for(let i=1;i<this.props.activeSequence.length;i++){//i is the level
                // var iplus1=i+1;
                // var tempi=i;
                console.log("i is "+i);
				currentNode=currentNode.array[this.props.activeSequence[i]];
				all.push(<LevelComponent key={i}
                    arrayOfValue={currentNode.array} 
                    onButtonClick={()=>{
                        console.log("iiiiii is "+i);
                        console.log('slice ',this.props.activeSequence.slice(0,i+1));
                        this.props.addCell(this.props.activeSequence.slice(0,i+1),"untitled");
                        this.forceUpdate();}}
    				archSequenceArray={this.props.activeSequence.slice(0,i+1)} setUpdate={()=>{this.forceUpdate()}}
                    setActiveSequence={this.setActiveSequence}></LevelComponent>)
			}
		}
        Array(8).fill().map((_, i) => {
            return
        });
        console.log(all);
        console.log("props active sequence at main",this.props.activeSequence);
		
  	  return (
  	  <div>
          <div className="space"> </div>
          {all}
         
    	</div>
        
	
	);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
