export const authenticate = async (userName: string, password: string) => {
  try {
    let res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });

    let data = await res.json();
    return data;
  } catch (err) {
    return {
      message: 'Internal Server Error',
    };
  }
};
