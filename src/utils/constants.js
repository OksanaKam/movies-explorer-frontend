export const MainURL = 'https://api.oksanakam.nomoredomains.xyz';
export const MoviesURL = 'https://api.nomoreparties.co';

export const REGEX_EMAIL = "^([^ ]+@[^ ]+\\.[a-z]{2,4}|)$";
export const REGEX_NAME = "^([a-zа-яA-ЯA-Z\\- ]{2,30}|)$";

export const ERRORS = {
  BAD_REQUEST: "400",
  AUTH: "401",
  CONFLICT: "409",
  SERVER: "500"
}

export const ERROR_TEXT = {
  ERROR_401: "Неправильные почта или пароль",
  ERROR_403: "Нет прав",
  ERROR_409: "Пользователь с такой электронной почтой уже зарегистрирован",
  ERROR_404: "Пользователь не найден",
  ERROR_500: "ServerError",
  ERROR_REGISTER: "При регистрации пользователя произошла ошибка",
  ERROR_LOGIN: "При авторизации произошла ошибка",
  ERROR_PROFILE: "При обновлении профиля произошла ошибка",
  SUCCESS_PROFILE: "Данные профиля обновлены",
  ERROR_QUERY: "Нужно ввести ключевое слово",
  ERROR_NOT_FOUND: "Ничего не найдено",
  ERROR_HAS_OCCURED: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
}

export const SHORT_DURATION = 40;

export const SCREEN = {
  FULL_SCREEN: 1280,
  MEDIUM_SCREEN: 952,
  SMALL_SCREEN: 768
}

export const CARDS_AMOUNT = {
  SIXTEEN: 16,
  TWELVE: 12,
  EIGHT: 8,
  FIVE: 5
}

export const CARDS_ADD = {
  FOUR: 4,
  THREE: 3,
  TWO: 2
}
