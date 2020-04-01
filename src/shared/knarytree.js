export function Node(archname){
	this.name=archname;
	this.array=[];
	this.folder=true;
	this.active=false;
	this.addInsideFolder=function(name){
		this.array.push(new Node(name));
	}
	
	this.deleteNameInArray=function(name){
		for(var i=0;i<this.array.length;i++){
			if(this.array[i].name==name){
				this.array.splice(i,1);
			}
		}
	}
	this.renameAInsideNode=function(oldName,newName){
		for(var i=0;i<this.array.length;i++){
			if(this.array[i].name==oldName){
				this.array[i].name=newName;
			}
		}
	}
}

export function appendSequence(node,sequenceArray,newName){
	var currentNode=node;
	
	if(sequenceArray.length==1){
		console.log('sequencearray ',sequenceArray);
		console.log('newName ', newName);
		if(folderExist(currentNode.array,newName)){
			// alert("duplicate at position "+folderExist(currentNode.array,newName));
			newName=appendIndexToNodeName(currentNode.array,newName);
			currentNode.addInsideFolder(newName);
		}else{
			currentNode.addInsideFolder(newName);
		}
		// currentNode.addInsideFolder(newName);
	}else if(sequenceArray.length>1){
		for(var i=1;i<sequenceArray.length;i++){
			currentNode=currentNode.array[sequenceArray[i]];
			console.log('appendsequence ',currentNode);
		}
		// currentNode.addInsideFolder(newName);
		if(folderExist(currentNode.array,newName)){
			// alert("duplicate at position "+folderExist(currentNode.array,newName));
			newName=appendIndexToNodeName(currentNode.array,newName);
			currentNode.addInsideFolder(newName);
		}else{
			currentNode.addInsideFolder(newName);
		}
		
	}
	return node;
}

export function deleteSequence(node,sequenceArray,oldName){
	var currentNode=node;
	if(sequenceArray.length==1){
		currentNode.deleteNameInArray(oldName);
	}else if(sequenceArray.length>1){
		for(var i=1;i<sequenceArray.length;i++){
			console.log("current",currentNode);
			currentNode=currentNode.array[sequenceArray[i]];
		}
		currentNode.deleteNameInArray(oldName);
	}
	
	
	return node;
}

export function renameSequence(node,sequenceArray,oldName,newName){
	var currentNode=node;	
	if(sequenceArray.length==1){
		console.log('current inside knarytree',currentNode);
		console.log("old ",oldName, " new ",newName)
		if(folderExist(currentNode.array,newName)){
			alert("duplicate at position "+folderExist(currentNode.array,newName));
		}else{
			currentNode.renameAInsideNode(oldName,newName);
		}
		
		console.log('current inside knarytree after',currentNode);
	}else if(sequenceArray.length>1){
		for(var i=1;i<sequenceArray.length;i++){
			console.log('current ', currentNode);
			currentNode=currentNode.array[sequenceArray[i]];
		}
		if(folderExist(currentNode.array,newName)){
			alert("duplicate at position "+folderExist(currentNode.array,newName));
		}else{
			currentNode.renameAInsideNode(oldName,newName);
		}
		// currentNode.renameAInsideNode(oldName,newName);
	}
	console.log('rename,', node);
	return node;
}

export function folderExist(array,newName){
	 for(var i=0;i<array.length;i++){
		 if(array[i].name==newName){
			 return i;
		 }
	 }
	 return false;
}

function appendIndexToNodeName(array,name){
	
	var i=0;
	var temp_name=name;
	// console.log("temp_name "+temp_name)
	while(folderExist(array,temp_name)){
		console.log("iii "+i);
		console.log("whilewhile..temp name "+temp_name);
		var splitString=temp_name.split("_");
		console.log("splitString "+splitString);
		var i=splitString[splitString.length-1];
		console.log("iiii "+i);
		// console.log("splitstring "+splitString);
		if(isInt(i)){
			// console.log("i++")
			console.log("i is a integer")
			
			i++;
			console.log('inside if statement '+i);
			// console.log("i is now "+i);
		}else{
			console.log("i is not a integer")
			i=1
			// console.log('i is 1')
		}
		var splitString0="";
		if(splitString.length>1){
			for(var j=0;j<splitString.length-1;j++){
				console.log('forfor...')
				splitString0+=splitString[j]
				// console.log("j"+j);
				// console.log('its stuck here');
			}
		}else{
			splitString0=splitString[0];
			// console.log('length is 0 '+splitString0);
		}
		
		// console.log("splitString0 "+splitString0);
		temp_name=splitString0+"_"+i;
		console.log('temp_name after '+temp_name)
		console.log("===============")
	}
	return temp_name;
}

export function isInt(value) {
	return !isNaN(value) && 
	         parseInt(Number(value)) == value && 
	         !isNaN(parseInt(value, 10));
}


export function appendToNodeNameHelper(root,oldName,newName){
	//recursively search the root and then the children of the root, and then the children of children
	if(root.array.length==0 && root.name!=oldName){
		return false;
	}else{
		if(oldName==root.name){
			var newNode=new Node(newName);
			// newNode.parent=root;
			root.array.push(newNode);
			return root;
		}else{
			for(var i=0;i<root.array.length;i++){
				appendToNodeNameHelper(root.array[i],oldName,newName);
			}
			
		}
		
	}
}
export function addNewNode(oldName,newName){
	var newRoot=appendToNodeNameHelper(root,oldName,newName);
	return newRoot;
}

// export function unFlagAllByParentHelper(root,parentNodeName){
// 	//recursively search the root and then the children of the root, and then the children of children
// 	if(root.folderInFolder.length==0 && root.node_name!=parentNodeName){
// 		return false;
// 	}else{
// 		if(parentNodeName==root.node_name){
// 			// var newNode=new Node(newNodeName);
// 			// newNode.parent=root;
// 			// root.folderInFolder.push(newNode);
// 			root.folderInFolder.forEach(function(item,index){
// 				item.active=false;
// 
// 			})
// 			return root;
// 		}else{
// 			for(var i=0;i<root.folderInFolder.length;i++){
// 				unFlagAllByParentHelper(root.folderInFolder[i],parentNodeName);
// 			}
// 
// 		}
// 
// 	}
// }
// 
// export function unFlagAllByParent(parentNodeName){
// 	var newRoot=unFlagAllByParentHelper(root,parentNodeName);
// 	return newRoot;
// }
var root=new Node('root');
root.array.push(new Node("children1"));
root.array.push(new Node("children2"));
root.array[0].array.push(new Node("children3"))// root,children1,children3
// root.array[0].addInsideFolder('children4');
root.array[1].addInsideFolder('children4');
console.log(root.array[0]);
// root.folderInFolder.push(new Node("children3"));
export const ROOT=root;
