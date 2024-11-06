'use strict';

const apiUrl = 'https://tasks.googleapis.com/tasks/v1/users/@me/lists';

// Функция для получения данных с бэкенда
async function fetchTodos() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET', // Указываем метод запроса
      headers: {
        'Content-Type': 'application/json',
      },
      maxResults: 20,
      pageToken: 0,
    });

    // Проверяем, успешно ли завершился запрос
    // if (!response.ok) {
    //   throw new Error(`Ошибка: ${response.status}`);
    // }

    // Получаем данные в формате JSON
    const data = await response.json();
    console.log('Задачи с бэкенда:', data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

// Вызываем функцию
fetchTodos();