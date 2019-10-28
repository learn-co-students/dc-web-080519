//the place where all my actions live


function onChange(searchText){
  return {type: "CHANGE_SEARCH", payload: searchText}
}

function voteForPainting(paintingId){
  return {type: "VOTE_FOR_PAINTING", payload: paintingId}
}

function updatePaintingInfo(info){
  return {type:"SAVE_PAINTING", payload: info}
}

export {onChange, voteForPainting, updatePaintingInfo}







//  onChange("ann") => {type: "CHANGE_SEARCH", payload: "ann"}
//  dispatch(onChange("ann")) => dispatch({type: "CHANGE_SEARCH", payload: "ann"})
//  vote("rh3478wbqyr78ewr") => {type: "VOTE_FOR_PAINTING", payload: "rh3478wbqyr78ewr"}
