import './styles.css';
import imgitem from './tamplates/item.hbs'
import refs from './js/refs'
const{form, searchBtn, gallery, loadmoreBtn}=refs
import searchImg from './js/apiService.js'
console.log(searchImg('moon'))

form.addEventListener('submit', renderImg)
form.addEventListener('click', refreshlists)
function renderImg(e){
    e.preventDefault();
const name=e.target.elements.query.value
searchImg(name).then(renderImglist)
}
function renderImglist(arr) {
    const markup = imgitem(arr) 
  gallery.innerHTML = markup;
  loadmoreBtn.classList.remove('is-hidden')
  }
  function refreshlists(e) {
    e.target.elements.query.value = '';
  }
  function setpage(){
    page+=1;
    return page
}