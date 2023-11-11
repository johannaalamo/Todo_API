const API_URL = 'https://playground.4geeks.com/apis/fake/todos/user/gabriel';

export const getTodos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const updateTodos = async (newTodos) => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        body: JSON.stringify(newTodos),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating todos:', error);
      throw error;
    }
  };
  