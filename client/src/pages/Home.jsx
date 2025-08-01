import React from 'react';
import { fetchData } from '../api/fetch';
import { useLoaderData } from 'react-router-dom';
import Grid from '../components/Grid';
import GridLinkCard from '../components/GridLinkCard';
import MessageBubble from '../components/MessageBubble';
import { useApp } from '../context/AppContext';
import { getRandomColor } from '@sarawebs/sb-utils';
/**
 * Loader function to fetch msg data from the Express backend.
 * The backend server address is stored in the client `.env` file
 * under the variable: VITE_API_SERVER.
 */
export async function loader({ request }) {
  const data = await fetchData({ endpoint: 'messages', limit: 12 });
  return { data };
}

export default function Home() {
  const { data } = useLoaderData();
  const messages = data.messages;
  const { appName } = useApp();

  return (
    <main className="home">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Welcome to the {appName}
      </h1>

      <section className="msg-list">
        <div className="flex flex-col  gap-4 mx-auto max-w-100">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              name={msg.name}
              text={msg.text}
              id={msg.id}
              editable={!msg.protected}
              timestamp={msg.added}
              avatarColor={getRandomColor()}
            />
          ))}
        </div>

        <ul></ul>
      </section>
      <section className="mt-5 dark:text-white">
        <h2>
          Visit{' '}
          <a
            aria-label="Git Repo"
            href="https://github.com/mdahamshi/top-basic-msg-full"
          >
            Git Repo
          </a>{' '}
          for more information
        </h2>
      </section>
    </main>
  );
}
