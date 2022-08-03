import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate('/articles');
    // replace 옵션을 사용하면 페이지 이동 시 현재 페이지를 페이지 기록에 남기지 않음
    // navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header style={{ background: 'lightpink', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
