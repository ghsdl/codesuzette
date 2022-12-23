/* eslint-disable no-undef */
const getData = async (url) => {
  const response = await fetch(url);
  try {
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

export { getData };
