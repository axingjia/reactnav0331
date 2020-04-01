import React, { Component } from 'react';
import { changeName,deleteCell} from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    root:state.root
  }
}

const mapDispatchToProps = dispatch => ({
	// addfromRoot: (oldNodeName,newNodeName) => dispatch(postComment(dishId, rating, author, comment)),
    // unFlagAllByParent:(parentsName)=>dispatch(unFlagAllByParent(parentsName)),
    changeName: (sequenceArray,oldName,newName) => dispatch(changeName(sequenceArray,oldName,newName)),
    delete: (sequenceArray,oldName)=>dispatch(deleteCell(sequenceArray,oldName))
});




class CellComponent extends Component{
	constructor(prop){
		super(prop);
		this.toggleArrow= this.toggleArrow.bind(this);
		this.showContextMenu=this.showContextMenu.bind(this);
		this.rename=this.rename.bind(this);
		this.hideContextMenu=this.hideContextMenu.bind(this);
        this.delete=this.delete.bind(this);
		// this.state={active:false};
		// this.state={active:this.props.active};
		this.state={active:false,condition:'div',value:this.props.value,style:{display:"none"}};
		console.log('thisstate',this.state);
		// this.style={display:"none"};
		this.archSequence=this.props.archSequence;
		
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
      // this.style = {display:"block"};
      // this.setState('style',{display:"block"})
      this.setState({"style":{display:"block"}})
      // this.contextMenu.style.left = event.clientX + 'px';
      // this.contextMenu.style.top = event.clientY + 'px';
	  this.forceUpdate();
      return false;
    }
	
	hideContextMenu (event) {
      
      console.log('hide');
      
      
		// this.style = {display:"none"};
        this.setState({"style":{display:"none"}})

    }
	
	rename(event){
      
      console.log('rename');
      this.setState((prev)=>{
        return {condition:'input'}
      });
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
	  this.props.changeName(this.props.archSequenceArray,this.state.value,this.refs.inputt.value)
	  this.props.setUpdate();

      
    }
    
    delete(){
        var person = window.confirm("Are you sure you want to delete this node?");
        
        if (person ==true) {
          this.props.delete(this.props.archSequenceArray,this.state.value);
          this.props.setUpdate();
        }

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
	      changeContainer=<div><input ref="inputt" style={{width:"95px",position:"relative"}} defaultValue={this.state.value}></input><button style={{position:"absolute",zIndex:1}} onClick={this.buttonOnclick.bind(this)}>Confirm</button></div>
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
				<div style={this.state.style} id="contextMenu" className="context-menu">
		          <ul>
		            <li onClick={this.rename}>Rename</li>
                    <li onClick={this.delete}>Delete</li>
		            
		          </ul>
		        </div>
				
				
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CellComponent);
