const BASE_URL = 'https://62bff53ec134cf51cec6b89e.mockapi.io/contacts';

export const fetchContacts = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  if (!data || data.length === 0)
    return Promise.reject(new Error('Not found contacts'));

  return data;
};

export const postContact = async obj => {
  const options = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const res = await fetch(BASE_URL, options);
  const contact = res.json();

  return contact;
};

export const deleteContact = id => {
  return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
