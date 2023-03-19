const getData = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
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
