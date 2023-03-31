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
  picturesArray.forEach((singlePicture) => {
    const newPicture = createPicture(singlePicture);
    fragment.append(newPicture);
  });
  picturesList.append(fragment);
};

export {renderPictures};

/* <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a> */
