import React, { Component } from 'react';
import { changeName,deleteCell,showDir,hideDir,clearAllOtherArrow,addArrow} from '../redux/ActionCreators';
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
    delete: (sequenceArray,oldName)=>dispatch(deleteCell(sequenceArray,oldName)),
    showDir:(sequenceArray,name)=>dispatch(showDir(sequenceArray,name)),
    hideDir:(sequenceArray,name)=>dispatch(hideDir(sequenceArray,name)),
    clearAllOtherArrow:(sequenceArray,name)=>dispatch(clearAllOtherArrow(sequenceArray,name)),
    addArrow:(sequenceArray,name)=>dispatch(addArrow(sequenceArray,name))
});




class CellComponent extends Component{
	constructor(prop){
		super(prop);
		this.toggleArrow= this.toggleArrow.bind(this);
		this.showContextMenu=this.showContextMenu.bind(this);
		this.rename=this.rename.bind(this);
		this.hideContextMenu=this.hideContextMenu.bind(this);
        this.delete=this.delete.bind(this);
        // this.showDir=this.showDir.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
		// this.state={active:false};
		// this.state={active:this.props.active};
		this.state={condition:'div',value:this.props.value,style:{display:"none"}};

		// this.style={display:"none"};
		// this.archSequence=this.props.archSequence;
		
	}
	componentDidUpdate(pP,pS,sS){
        
        console.log("this.props.active",this.props.active);
        if(this.props.active==true&&pP.active!=this.props.active){
        
            this.props.showDir(this.props.archSequenceArray,this.props.value)
        }else if (pP.active==true&&this.props.active==false){
            this.props.hideDir(this.props.archSequenceArray,this.props.value);
        }
    }
	
	toggleArrow(){
      this.props.addArrow(this.props.archSequenceArray,this.props.value);
      // if(this.props.active==true){
      //     alert('hayo');
      // }
      // this.props.setUpdate();
      // console.log("this.props.active", this.props.active);
      
      // var currentArrow=this.state.active;
      // this.setState({active:!currentArrow},()=>{
      //     if(this.state.active==true){
        if (this.props.active==true){
              console.log('active is true');
              console.log('in Cell ',this.props.value);
              // console.log("showDir ",showDir(this.props.archSequenceArray,this.state.value));
              this.props.showDir(this.props.archSequenceArray,this.props.value)
              // this.props.setActiveSequence(this.props.showDir(this.props.archSequenceArray,this.state.value));
              // this.setUpdate();
              // this.props.clearAllOtherArrow(this.props.archSequenceArray,this.props.value);
              // this.props.setUpdate();
          }else{
              console.log("active is false");
              this.props.hideDir(this.props.archSequenceArray,this.props.value);
              // this.props.setUpdate();
          }
      // });
      // self.props.addLevelFn();
      //change parent's state
      // this.props.changeParent(!currentArrow);
	
	
    }
	
	showContextMenu (event) {
      event.preventDefault();

      this.style = {display:"block"};
      // this.setState('style',{display:"block"})
      this.setState({style:{display:"block"}},()=>{

      })
     
      // this.contextMenu.style.left = event.clientX + 'px';
      // this.contextMenu.style.top = event.clientY + 'px';
	  this.forceUpdate();
      return false;
    }
	
	hideContextMenu (event) {
      


        if(event.type=="mouseleave"){
            this.setState({style:{display:"none"}})
        }
        
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          // alert('You clicked outside of me!');
          this.setState({style:{display:"none"}})
        }
		
        

    }
	
	rename(event){
      // console.log('rename');
      // console.log('rename');
      
      this.setState({condition:"input"},()=>{
          // console.log(this.state);
      })
      
    }
    
	componentDidMount() {
      document.addEventListener('mousedown', this.hideContextMenu);
    }
    
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideContextMenu);
    }
    
    setWrapperRef(node) {
        this.wrapperRef = node;
      }
	
	buttonOnclick(){
        console.log('button called');
      this.setState((prev)=>{return {condition:'div'}},()=>{
        // console.log(this.state);
      });
      this.setState((prev)=>{
        console.log(this.refs.inputt.defaultValue);
        return {value:this.refs.inputt.value};
      },()=>{
        // console.log(this.state);
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
        // console.log("state ",this.state);
		let changeContainer=null;
	    if(this.state.condition==="div"){
	      changeContainer=<div 
	        ref={custom=>{this.custom=custom}} className={[(this.props.active?'grey':null),'item'].join(' ')} 
	        onClick={this.toggleArrow} 
	        onContextMenu={this.showContextMenu.bind(this)}
	        >
	          {this.props.value}
	          <div className="arrow" style={{display:this.props.active?'inline-block':'none'}}></div>

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
				<div ref={this.setWrapperRef} style={this.state.style} id="contextMenu" className="context-menu" >
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
