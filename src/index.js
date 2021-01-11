import './styles.css';
import imgitem from './tamplates/item.hbs';
import refs from './js/refs';
const { form, input, gallery, loadmoreBtn } = refs;
import search from './js/apiService.js';
import onClickImg from './js/basiclightbox';
import notifError from './js/notification';

form.addEventListener('submit', renderImg);
gallery.addEventListener('click', onClickImg);
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
  loadmoreBtn.classList.remove('is-hidden');
  if (arr.length === 0) {
    notifError('Oops', 'Something happen wrong');
    loadmoreBtn.classList.add('is-hidden');
  }
  gallery.insertAdjacentHTML('beforeEnd', markup);

  if (search.page >= 2) {
    window.scrollBy({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  }

  input.value = '';
}

function newpage() {
  search.setPage();
  search.searchImg().then(renderImglist);
}
