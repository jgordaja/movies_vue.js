import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage';
import MovieItem from '@/components/MovieItem';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieItem,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
