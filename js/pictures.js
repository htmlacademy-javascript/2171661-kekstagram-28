const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = ({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  return pictureElement;
};

const renderPictures = (picturesArray) => {
  const fragment = document.createDocumentFragment();
  picturesArray.map((picture) => fragment.append(createPicture(picture)));
  picturesList.append(fragment);
};

export {renderPictures};
