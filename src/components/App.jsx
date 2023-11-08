import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import PostDetails from 'pages/PostDetails';
// import PostsPage from 'pages/PostsPage';
// import ProductsPage from 'pages/ProductsPage';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));

/*
1. Обгорнути весь App в компонент BrowserRouter
2. Прописати маршрути та компоненти Link|NavLink
3. Підготувати компоненти Route для кожноъ сторінки за певною адресою.
4. Якщо нам потрібно зробити шаблонну сторінку для багатьох однотипних даних,
    нам потрібно використовувати динамічні параметри '/posts/:postId'
5. Щоб у користувача була змога потрабити на конкретну шаблонну сторінку 
    ми у компоненті Link або NavLink вказуємо маршрут наступним чином <Link to={`/posts/${post.id}`}>


Етапи роботи з маршрутеризацією:
1. Змінити адресний рядок браузера за допомогою компонти Link або NavLink маршрут вказуємо 
   в (пропс to).
2. Підготувати компонент Route для відображення конкретної сторінки за певним 
   шляхом(пропс path).

РЕМАРКА!!!
Тег <a href="..." target="_blank" rel="noopener noreferrer"></a> Ми використовуємо для 
   всіх зовнішніх посиланнь(фейсбук, гугель, ютубе, інтаграми).
Тег <NavLink to="..."></NavLink> або <Link to="..."></Link> Ми використовуємо виключно 
   для навігації всередині нашого додатку.
*/

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          {/* /posts/21dwadw */}
          <Route path="/posts/:postId/*" element={<PostDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
