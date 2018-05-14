import uuid from 'uuid';

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = (id, votes) => dispatch(thumbUpComment(id, votes));
const boundThumbDownComment = (id, votes) => dispatch(thumbDownComment(id, votes));

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id, votes) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		votes
	}
}

function thumbDownComment(id, votes) {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		votes
	}
}


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
