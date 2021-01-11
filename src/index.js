import './styles.css';
import imgitem from './tamplates/item.hbs';
import refs from './js/refs';
const { form, searchBtn, input, gallery, loadmoreBtn } = refs;
import search from './js/apiService.js';

form.addEventListener('submit', renderImg);

loadmoreBtn.addEventListener('click', newpage);

function renderImg(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  search.resetPage();
  search.query = e.target.elements.query.value;
  if (search.query === '') {
    return;
  }

  search.searchImg().then(renderImglist);
}
function renderImglist(arr) {
  const markup = imgitem(arr);
  gallery.insertAdjacentHTML('beforeEnd', markup);
  loadmoreBtn.classList.remove('is-hidden');
if (search.page>=2){
  window.scrollBy({
    top: window.innerHeight - 80,
    behavior: 'smooth',
  })};
  // window.scrollByPages(search.page)}
  input.value = '';
}

function newpage() {
  search.setPage();

  search.searchImg().then(renderImglist);
}
