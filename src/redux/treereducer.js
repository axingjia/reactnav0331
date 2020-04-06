import * as ActionTypes from './ActionTypes';
import {addNewNode,appendToNodeNameHelper,appendSequence,renameSequence,deleteSequence,showDir,hideDir,clearAllOtherArrow,addArrowAndClearArrow,ROOT, Node} from '../shared/knarytree';

var startroot=new Node('root');
startroot.array.push(new Node("children1"));
startroot.array.push(new Node("children2"));
startroot.array[0].array.push(new Node("children3"))// root,children1,children3
// root.array[0].addInsideFolder('children4');
startroot.array[1].addInsideFolder('children4');
startroot.array[0].array[0].addInsideFolder('children5');


export const Root = (state = { root: startroot,activeSequence:[0]}, action) => {
	console.log(action);
    switch (action.type) {
        case ActionTypes.ADD_CELL:
			var root=appendSequence(state.root,action.payload.sequenceArray,action.payload.newName);
			// console.log("console.log treereducer add cell", root);
            return {...state, root:root};
		case ActionTypes.CHANGE_NAME:
			var root=renameSequence(state.root, action.payload.sequenceArray, action.payload.oldName, action.payload.newName);
			return {...state, root:root};
		case ActionTypes.DELETE_CELL:
			var root=deleteSequence(state.root, action.payload.sequenceArray, action.payload.oldName);
			return {...state, root:root};
		case ActionTypes.SHOW_DIR:
			var activeSequence=showDir(state.root,action.payload.sequenceArray, action.payload.name);
			// console.log("inside action ",activeSequence);
			return {...state, activeSequence:activeSequence};
		case ActionTypes.HIDE_DIR:
			var activeSequence=hideDir(state.root,action.payload.sequenceArray, action.payload.name);
			console.log("inside action ",activeSequence);
			return {...state, activeSequence:activeSequence};
		case ActionTypes.ADD_ARROW:
			var root=addArrowAndClearArrow(state.root,action.payload.sequenceArray, action.payload.name);
			return {...state, root:root};
        default:
            return state;
    }
};