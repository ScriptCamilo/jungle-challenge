const API = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

export async function postForm(credentials) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }
  const response = await fetch(API, options);
  
  if (!response.ok) throw new Error('Something went wrong');
}
