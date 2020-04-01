import React, { Component } from 'react';

export class CellComponent extends Component{
	constructor(prop){
		super(prop);
		this.toggleArrow= this.toggleArrow.bind(this);
		this.showContextMenu=this.showContextMenu.bind(this);
		this.rename=this.rename.bind(this);
		this.hideContextMenu=this.hideContextMenu.bind(this);
		// this.state={active:false};
		// this.state={active:this.props.active};
		this.state={active:false,condition:'div'};
		console.log('thisstate',this.state);
		this.style={display:"none"};
		
	}
	
	
	toggleArrow(){
      var currentArrow=this.state.active;
      this.setState({active:!currentArrow});
      // self.props.addLevelFn();
      //change parent's state
      // this.props.changeParent(!currentArrow);
	
	
    }
	
	showContextMenu (event) {
      event.preventDefault();
	  console.log('show')
      this.style = {display:"block"};
      // this.contextMenu.style.left = event.clientX + 'px';
      // this.contextMenu.style.top = event.clientY + 'px';
	  this.forceUpdate();
      return false;
    }
	
	hideContextMenu (event) {
      
      console.log('hide');
      
      
		this.style = {display:"none"};
      

    }
	
	rename(event){
      
      console.log('rename');
      this.setState((prev)=>{
        return {condition:'input'}
      });
      
      
      
      // this.render();
    }
	
	componentDidMount() {
      document.addEventListener('mousedown', this.hideContextMenu);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideContextMenu);
    }
	
	buttonOnclick(){
      this.setState((prev)=>{return {condition:'div'}},()=>{
        // console.log(this.state);
      });
      this.setState((prev)=>{
        console.log(this.refs.inputt.defaultValue);
        return {value:this.refs.inputt.value};
      },()=>{
        console.log(this.state);
      });

      
    }
	render(){
		let changeContainer=null;
	    if(this.state.condition==="div"){
	      changeContainer=<div 
	        ref={custom=>{this.custom=custom}} className={[(this.state.active?'grey':null),'item'].join(' ')} 
	        onClick={this.toggleArrow} 
	        onContextMenu={this.showContextMenu.bind(this)}
	        >
	          {this.props.value}
	          <div className="arrow" style={{display:this.state.active?'inline-block':'none'}}></div>

	        </div>;
	    }else if(this.state.condition==="input"){
	      changeContainer=<div><input ref="inputt" style={{width:"95px",position:"relative"}} defaultValue={this.props.value}></input><button style={{position:"absolute",zIndex:1}} onClick={this.buttonOnclick.bind(this)}>Confirm</button></div>
	    }
		return(
			<div >
				{changeContainer}
				{/*<div className={[(this.state.active?'grey':null),'item'].join(' ')} 
					onClick={this.toggleArrow} 
					onContextMenu={this.showContextMenu}
					>
					{this.props.value}
					<div className="arrow" style={{display:this.state.active?'inline-block':'none'}}></div>
				</div>*/}
				<div style={this.style} id="contextMenu" className="context-menu">
		          <ul>
		            <li onClick={this.rename}>Rename</li>
		            
		          </ul>
		        </div>
				
				
			</div>
		);
	}
}