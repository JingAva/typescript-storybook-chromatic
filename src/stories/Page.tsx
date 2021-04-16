import React from 'react';

import { Header } from './Header';
import './page.css';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Home Page</h2>
      <p>This is the homepage</p>
    </section>
  </article>
);
