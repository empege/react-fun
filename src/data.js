import React from 'react'

// NAVIGATION
export const navData = [
  {
    id: 1,
    text: 'Home',
    url: '/'
  },
  {
    id: 2,
    text: 'My Github',
    url: 'https://github.com/empege/react-fun'
  },
  {
    id: 3,
    text: 'IvanMitov.com',
    url: 'https://www.ivanmitov.com'
  }
]

// COMPONENTS DATA
export const components = [
  {
    id: 1,
    title: 'Coctails 🍸',
    description: 'Yes, I spelled it wrong x( A bit more useContext, fetching Cocktails DB and just basic React practice in general. Cheers! 🍸🍸🍸',
    image: 'https://img.delicious.com.au/CKMUcpx-/w1200/del/2015/11/summer-cocktails-24374-3.jpg',
    url: '/coctails',
  },
  {
    id: 4,
    title: 'Peja\'s task!',
    github: 'https://github.com/empege/pejastask',
    description: 'A friend of mine sent me this task to show him my (JS) worth... I don\'t know Typescript yet so, will show it when I learn it! 😅 But for now, it works kind of okay without it!',
    image: 'https://ivanmitov.com/react/images/pejastask.png',
    url: 'https://pejastaks.netlify.app/',
  },
  {
    id: 2,
    title: 'Cart 👜',
    description: 'Learning how to play with useReducer and useContext with this simple cart.',
    image: 'https://ivanmitov.com/react/images/cart.png',
    url: '/cart',
  },
  {
    id: 3,
    title: 'Color Picker 🎨',
    description: 'Color picker that can divide a color by 100 fractions of tint and shade!',
    image: 'https://ivanmitov.com/react/images/colorPicker.png',
    url: '/colorPicker',
  },
]

export const cart = [
  {
    id: 1,
    title: 'Samsung Galaxy S7',
    price: 599.99,
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
    amount: 1,
  },
  {
    id: 2,
    title: 'google pixel ',
    price: 499.99,
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
    amount: 1,
  },
  {
    id: 3,
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
    amount: 1,
  },
];
