const serverUrl = 'http://localhost:5000'

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todo/${id}` : `${serverUrl}/todo`