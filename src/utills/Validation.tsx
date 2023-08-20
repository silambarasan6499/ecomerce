export const isValidEmail = (text: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text);
};

export const isEmptyField = (text: string) => {
  if (text && text.length > 0) {
    return false;
  }
  return true;
};

export const isValidPassword = (text: string) => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,20}$/.test(
      text,
    ) === false
  ) {
    return false;
  }
  return true;
};

export const isValidName = (text: string) => {
  const filter = /^[a-zA-Z ]{2,30}$/;
  if (filter.test(text)) {
    return true;
  }
  return false;
};

export const isValidePin = (text: string) => {
  let reg = /^\d{6}$/;
  return reg.test(text);
};

export const isValidePinCode = (text: string) => {
  let reg = /^.{5,12}$/;
  return reg.test(text);
};

export const isValidePhoneNo = (text: any) => {
  let reg = /^.{5,15}$/;
  return !reg.test(text);
};

export const isValidNumber = (text: any) => {
  let reg = /^[6-9][0-9]{9}$/;
  return !reg.test(text);
};

export const getExtention = (filename: string) => {
  // To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

export const getHtmlText = (htmlText: string) => {
  if (isEmptyField(htmlText)) {
    return null;
  }
  const regex = /(<([^>]+)>)/gi;
  return htmlText.replace(regex, '');
};

export const onlyNumbersAndLetters = (text: any) => {
  let regExp = /[^a-zA-Z0-9]/g;
  if (regExp.test(text)) {
    return true;
  }
  return false;
};

export const isBoundedRange = (text: any) => {
  // let regex = /\b(\d|1[130-170])\b/;
  let regex = /\b(15|16)\b/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};

export const hasLowerCase = (str: string) => {
  return (/[a-z]/.test(str));
};

export const hasUpperCase = (str: string) => {
  return (/[A-Z]/.test(str));
};

export const hasNumber = (str: string) => {
  return (/[0-9]/.test(str));
};

export const hasSpecialCharecter = (str: string) => {
  return (/[#$@!%&*?]/.test(str));
};
