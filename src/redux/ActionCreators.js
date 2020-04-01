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
