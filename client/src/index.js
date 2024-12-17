import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Appコンポーネントをルート要素にレンダリング
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // HTMLファイル内のid="root"の要素に描画
);
