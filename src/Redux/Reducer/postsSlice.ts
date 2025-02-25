import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Post} from '../../Types/Posts';

const initialState: Post[] = [
  {
    id: 1,
    username: 'Keyvan Mozaffari',
    content: 'Hello world!',
    image:
      'https://img.freepik.com/free-psd/fashion-sale-social-media-instagram-post-template_47987-16167.jpg',
    likes: 5,
    comments: 2,
    userProfile:
      'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg',
  },
  {
    id: 2,
    username: 'Peter Jackson',
    content: 'React Native is awesome!',
    image:
      'https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg',
    likes: 10,
    comments: 5,
    userProfile:
      'https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg',
  },
  {
    id: 3,
    username: 'Sonia Martin',
    content: 'Redux Toolkit makes state easy!',
    image:
      'https://img.freepik.com/free-psd/corporative-instagram-square-banner-template_202595-492.jpg',
    likes: 8,
    comments: 3,
    userProfile:
      'https://img.freepik.com/premium-photo/portrait-young-girl_93675-37617.jpg',
  },
  {
    id: 4,
    username: 'Sezer Ogeturk',
    content: 'Having a great day!',
    image:
      'https://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_120329-2030.jpg',
    likes: 3,
    comments: 1,
    userProfile:
      'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg',
  },
  {
    id: 5,
    username: 'Nida Beyaz',
    content: 'Just finished a new project!',
    image:
      'https://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-banner-instagram-post-template_106176-2303.jpg',
    likes: 12,
    comments: 6,
    userProfile:
      'https://img.freepik.com/free-photo/happy-woman-gray-polo-shirt-with-pink-pin-button_53876-102858.jpg',
  },
  {
    id: 6,
    username: 'Kate Astin',
    content: 'Watching a great movie!',
    image:
      'https://img.freepik.com/premium-psd/digital-marketing-web-banner-social-media-post-template_169307-2061.jpg',
    likes: 7,
    comments: 4,
    userProfile:
      'https://img.freepik.com/free-photo/handsome-man-outdoors-portrait_158595-3552.jpg',
  },
  {
    id: 7,
    username: 'Keyvan Mozaffari',
    content: 'Learning TypeScript today!',
    image:
      'https://img.freepik.com/premium-vector/travel-social-media-post-template_596886-37.jpg',
    likes: 9,
    comments: 3,
    userProfile:
      'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg',
  },
  {
    id: 8,
    username: 'Kave Jafari',
    content: 'This community is amazing!',
    image:
      'https://img.freepik.com/premium-psd/classy-modern-trendy-dynamic-blurred-background-instagram-banner-template_214530-108.jpg',
    likes: 6,
    comments: 2,
    userProfile:
      'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg',
  },
  {
    id: 9,
    username: 'Philip Max',
    content: 'Coding late at night!',
    image:
      'https://img.freepik.com/premium-psd/travel-tour-social-media-post-banner-template_627050-82.jpg',
    likes: 4,
    comments: 1,
    userProfile:
      'https://img.freepik.com/free-photo/lovely-model-with-interim-result-make-up-procedure_231208-3583.jpg',
  },
  {
    id: 10,
    username: 'Keyvan Mozaffari',
    content: 'Coffee and coding ☕',
    image:
      'https://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_202595-395.jpg',
    likes: 11,
    comments: 7,
    userProfile:
      'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      return state.filter(post => post.id !== action.payload);
    },
    clearPosts: () => {
      return [];
    },
  },
});

export const {addPost, deletePost, clearPosts} = postsSlice.actions;
export default postsSlice.reducer;
