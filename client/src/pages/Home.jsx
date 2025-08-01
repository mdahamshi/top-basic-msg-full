import React from 'react';
import { fetchData } from '../api/fetch';
import { useLoaderData } from 'react-router-dom';
import Grid from '../components/Grid';
import GridLinkCard from '../components/GridLinkCard';
import MessageBubble from '../components/MessageBubble';
import { getRandomColor } from '@sarawebs/sb-utils';
/**
 * Loader function to fetch msg data from the Express backend.
 * The backend server address is stored in the client `.env` file
 * under the variable: VITE_API_SERVER.
 */
export async function loader({ request }) {
  const server = import.meta.env.VITE_API_SERVER;
  const data = await fetchData({ server, endpoint: 'messages', limit: 12 });
  return { data };
}

export default function Home() {
  const { data } = useLoaderData();
  const messages = data.messages;

  return (
    <main className="home">
      <h1 className='text-4xl font-bold mb-4 text-primary'>
        Welcome to the{' '}
        <a href="https://sarawebs.com" target="_blank" rel="noopener">
          SaraWebs
        </a>{' '}
        React + Express starter kit
      </h1>

      <section className="msg-list">
        <div className='flex flex-col  gap-4 mx-auto p-6 max-w-200'>
          {messages.map((msg) => (
            <GridLinkCard  key={msg.id} link={`message/${msg.id}`}>
              <MessageBubble
              username={msg.name}
              text={msg.text}
              timestamp={msg.added}
              avatarColor={getRandomColor()}
              />
            </GridLinkCard>
          ))}
        </div>

        <ul></ul>
      </section>
      <section className='dark:text-white'>
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
