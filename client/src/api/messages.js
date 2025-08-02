const SERVER = import.meta.env.VITE_API_SERVER;

const API_URL = `${SERVER}/api/messages`;

const parseJSON = async (res) => {
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const fetchMessages = () =>
  fetch(API_URL).then(parseJSON);

export const createMessage = (data) =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(parseJSON);

export const updateMessage = (id, data) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(parseJSON);

export const deleteMessage = (id) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error('Delete failed');
    return true;
  });
