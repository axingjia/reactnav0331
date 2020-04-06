import React, { Component } from 'react';
import  CellComponent from './CellComponent.js';

export class LevelComponent extends Component{
	constructor(prop){
		super(prop);
		
		
	}
	render(){
		return (
			<div className="level">
	        
	            
	            {/*<div style={{overflowY:"scroll",height:"inherit"}}>}*/}
	            
	            {this.props.arrayOfValue.map(function(current,index){
	                return <CellComponent key={index} value={current.name} active={current.active} archSequenceArray={this.props.archSequenceArray} setUpdate={this.props.setUpdate}
					setActiveSequence={this.props.setActiveSequence}
					></CellComponent>;
	            },this)}
	            {/*</div>*/}
	            
	            {<button style={{position:"absolute",bottom:"0px",right:"0px"}} onClick={this.props.onButtonClick}>+</button>}
	        </div>
			
			
		)
	}
}