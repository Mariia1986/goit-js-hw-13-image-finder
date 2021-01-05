const key='19753127-35047f3cd3d8da270542cf7b9'
const baseURL='https://pixabay.com/api/?'
let page ='1'

const options='image_type=photo&orientation=horizontal&image_type=photo&orientation=horizontal&'
function searchImg(searchQuery){
const url=baseURL+options+`q=${searchQuery}&page=${page}&per_page=12&key=${key}`
return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response.status);
    }
  })
  .then(data => data.hits);
}


export default searchImg ;