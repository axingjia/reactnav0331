import * as ActionTypes from './ActionTypes';

export const changeName=(sequenceArray,oldName,newName)=>({
	type:ActionTypes.CHANGE_NAME,
	payload:{sequenceArray:sequenceArray,oldName:oldName,newName:newName}
});

export const addCell=(sequenceArray,newName)=>({
	type:ActionTypes.ADD_CELL,
	payload:{sequenceArray:sequenceArray,
			newName:newName}
});

export const deleteCell=(sequenceArray,oldName)=>({
	type:ActionTypes.DELETE_CELL,
	payload:{
		sequenceArray:sequenceArray,
		oldName:oldName
	}
})

export const showDir=(sequenceArray,name)=>({
	type:ActionTypes.SHOW_DIR,
	payload:{
		sequenceArray:sequenceArray,
		name:name
	}
})

export const hideDir=(sequenceArray,name)=>({
	type:ActionTypes.HIDE_DIR,
	payload:{
		sequenceArray:sequenceArray,
		name:name
	}
})

export const clearAllOtherArrow=(sequenceArray,name)=>({
	type:ActionTypes.CLEAR_ALL_OTHER_ARROW,
	payload:{
		sequenceArray:sequenceArray,
		name:name
	}
})

export const addArrow=(sequenceArray,name)=>({
	type:ActionTypes.ADD_ARROW,
	payload:{
		sequenceArray:sequenceArray,
		name:name
	}
})

// 
// export const addToRoot=(newNodeName)=>({
// 	type:ActionTypes.ADD_CELL,
// 	payload:{oldNodeName:'root',
// 			newNodeName:newNodeName}
// })
// 
// export const flagActive=(parentsName)=>({
// 	type:ActionTypes.FLAG_ACTIVE,
// 	payload:{parentsName:parentsName}
// });
