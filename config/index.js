const production = process.env.NODE_ENV === 'production';

export const baseURL = production ? process.env.BASE_URL : 'http://localhost:3001';

export const questionID = '62c26d22b006199562243905'