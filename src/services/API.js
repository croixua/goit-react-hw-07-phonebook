const BASE_URL = 'https://62bff53ec134cf51cec6b89e.mockapi.io/contacts';

const fetchData = async (url = '', options = {}) => {
  const res = await fetch(url, options);
  return res.json();
};

export const fetchContacts = async () => fetchData(BASE_URL);

export const postContact = async obj => {
  const options = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetchData(BASE_URL, options);
};

export const deleteContact = async id => {
  const options = { method: 'DELETE' };

  return await fetchData(`${BASE_URL}/${id}`, options);
};
