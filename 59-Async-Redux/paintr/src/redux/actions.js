// action creators
const URL = 'http://localhost:3000/paintings'

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function votedForPainting(paintingId) {
  return { type: "INCREASE_VOTES", payload: paintingId };
}

//click event -> voting (fetch) -> voted (updating store)
function votingForPainting(paintingId){
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`,{
      method: "PATCH",
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        votes: oldVotes + 1
      })
    }).then(() => {
        dispatch(votedForPainting(paintingId))
    })
  }
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday, paintingId}
  };
}

function fetchedPaintings(paintings){ //action that is changing the store
  return {type: "FETCHED_PAINTINGS", payload:paintings}
}

//loaded -> fetching (fetch) -> fetched (updating store)
function fetchingPainting(){ //action that's not really an action, it's just doing some fetching for us
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(paintingsData => {
      dispatch( fetchedPaintings(paintingsData) )
    })
  }
}


export { changeSearchText, votingForPainting, updatePainting,
 fetchingPainting};
