import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function onClickImg(event) {
  const bigImg = event.target.dataset.sourse;

  const instance = basicLightbox.create(`
        <img src="${bigImg}" />
      `);
  instance.show();
}
export default onClickImg