const INITIAL_POST_COUNT = 25;

const DESCRIPTION_LIST = [
  'Жить только для себя — есть злоупотребление.',
  'Приятно следовать внушениям совести.',
  'Глупость бывает двух родов: молчаливая и болтливая.',
  'Для людей работа является наслаждением.',
  'Честь дороже жизни.',
  'Целью общества является всеобщее счастье.',
  'Верная любовь помогает переносить все тяжести.',
  'Кто стал дружить с тобой для обретенья благ, Не друг надежный твой, а самый страшный враг.',
]

const NAMES_LIST = [
  'Сайвард "Беспощадный"',
  'Элвина "Безумный Глаз"',
  'Черноглазый Бизон',
  'Бодрая Ваделси',
  'Чудак Крoсли',
  'Энор Чандлер',
  'Кен Саймон',
  'Крофтон Мерсер',
  'Фэй Шортер',
  'Адисон Фишоп',
  'Симисола',
  'Ифунания',
  'Энитан',
  'Абена',
  'Анули',
  'Тлексиктли',
  'Зьянья',
  'Найт',
  'Ачкохтли',
  'Ихуикатл',
]

const MESSAGES_LIST = [
  'Всё отлично!',
  'Подтверждено: солнечных дней всё меньше',
  'В целом всё неплохо. Но не всё.',
  'Оказывается, средства индивидуальной защиты оказались бесполезны!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Внезапно, герцог графства коронован',
  'Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы разоблачены.',
]

const getPhotoUrl = (index) => `photos/${index}.jpg`;
const getAvatarUrl = (index) => `img/avatar-${index}.svg`;
const getRandomIndex = (array) => array[Math.floor(Math.random()*array.length)];
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateId = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
const isAllowedString = (string,maxLength) => (string.length <= maxLength) ? true : false;
const generateUnicNumbers = (from = 1, to = INITIAL_POST_COUNT, n = to) => [...Array(to - from + 1).keys()].map(i => i + from).reduce((arr, el) => (arr.splice(Math.random() * (arr.length + 1), 0, el), arr), []).slice(0, n);

const generateArayWithInfo = (length,cb) => new Array(length).fill().map(cb);

const createComment = () => {
  const randomUrlIndex = getRandomInteger(1,6);

  return {
    id: generateId(),
    avatar: getAvatarUrl(getRandomInteger(randomUrlIndex)),
    message: getRandomIndex(MESSAGES_LIST),
    name: getRandomIndex(NAMES_LIST),
  }
}

const idList = generateUnicNumbers();
const urlIdList = generateUnicNumbers();

const createPost = (index) => {
  const commentInfo = generateArayWithInfo(getRandomInteger(1,5),createComment);

  return {
    id: idList[index],
    url: getPhotoUrl(urlIdList[index]),
    description: getRandomIndex(DESCRIPTION_LIST),
    likes: getRandomInteger(15,200),
    comments: commentInfo,
  }
}

const generatedPostList = generateArayWithInfo(INITIAL_POST_COUNT,(_,i)=> createPost(i));
const generatedPostListInMap = new Map(Object.entries({...generatedPostList}))
