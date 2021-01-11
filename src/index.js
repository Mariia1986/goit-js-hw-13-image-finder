import './styles.css';
import imgitem from './tamplates/item.hbs';
import refs from './js/refs';
const { form, searchBtn, input, gallery, loadmoreBtn } = refs;
import search from './js/apiService.js';


form.addEventListener('submit', renderImg);
// form.addEventListener('click', refreshlists);
loadmoreBtn.addEventListener('click',newpage
);

function renderImg(e) {
  e.preventDefault();
  gallery.innerHTML='';
  search.resetPage();
  search.query = e.target.elements.query.value;
  if (search.query === '') {
    return;

  }
  
  search.searchImg().then(renderImglist)
}
 function renderImglist(arr) {
  

  const markup = imgitem(arr);
  gallery.insertAdjacentHTML('beforeEnd', markup);
  loadmoreBtn.classList.remove('is-hidden');
 
  
    window.scrollBy({
     
      top: window.innerHeight - 10,
      behavior: 'smooth',
    });
    input.value=''

}
// function refreshlists(e) {
//   e.target.elements.query.value = '';
// }
function newpage() {
 
 search.setPage()
 
  search.searchImg().then(renderImglist)
}
