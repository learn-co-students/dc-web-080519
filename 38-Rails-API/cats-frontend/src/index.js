document.addEventListener('DOMContentLoaded', function(){
  document.querySelector("form").addEventListener("submit", createCat)
  fetchAllCats()
  fetchAllHobbies()
})

