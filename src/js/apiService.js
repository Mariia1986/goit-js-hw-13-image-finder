// const key='19753127-35047f3cd3d8da270542cf7b9'
// const baseURL='https://pixabay.com/api/?'
// const options='image_type=photo&orientation=horizontal&image_type=photo&orientation=horizontal&'
// // function searchImg(searchQuery,page){
//    page+=1
// const url=baseURL+options+`q=${searchQuery}&page=${page}&per_page=12&key=${key}`
// return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return Promise.reject(response.status);
//     }
//   })
//   .then(data => data.hits);
// }

// export default searchImg ;
export default {
  key: '19753127-35047f3cd3d8da270542cf7b9',
  baseURL: 'https://pixabay.com/api/?',
  options:
    'image_type=photo&orientation=horizontal&image_type=photo&orientation=horizontal&',
  query: '',
  page: 1,
  totalPages: 0,
  isLastPage: false,
  perPage: 12,

  get value() {
    return this.query;
  },
  set queryVal(val) {
    return (this.query = val);
  },
  setPage() {
    this.page += 1;
    return this.page;
  },
  resetPage() {
    this.page = 1;

    return this.page;
  },
  searchImg() {
    const url =
      this.baseURL +
      this.options +
      `q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.key}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .then(data => 
        data.hits
      );
  },
};
