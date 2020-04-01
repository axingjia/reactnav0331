export function Node(archname){
	this.name=archname;
	this.array=[];
	this.folder=null;
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
	// this.renameAInsideNode(oldName,newName){
	// 	for(var i=0;i<this.array.length;i++){
	// 		if(this.array[i].name==oldName){
	// 			this.array[i].name=newName;
	// 		}
	// 	}
	// }
}

export function appendSequence(node,sequenceArray,newName){
	var currentNode=node;
	for(var i=0;i<sequenceArray.length;i++){
		currentNode=currentNode[sequenceArray[i]];
	}
	currentNode.addInsideFolder(newName);
	return node;
}

export function deleteSequence(node,sequenceArray,name){
	var currentNode=node;
	for(var i=0;i<sequenceArray.length;i++){
		currentNode=currentNode[sequenceArray[i]];
	}
	currentNode.deleteNameInArray(name);
	return node;
}

export function renameSequence(node,sequenceArray,oldName,newName){
	var currentNode=node;
	for(var i=0;i<sequenceArray.length;i++){
		currentNode=currentNode[sequenceArray[i]];
	}
	currentNode.renameAInsideNode(oldName,newName);
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
