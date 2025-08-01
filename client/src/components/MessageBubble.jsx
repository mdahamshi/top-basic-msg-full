import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Trash, SquarePen } from 'lucide-react';
import { Button } from 'flowbite-react';
import { fetchData } from '../api/fetch';
import { useNavigate } from 'react-router-dom';
import MessageEdit from './MessageEdit';
const getInitials = (name) => name.charAt(0).toUpperCase();

const MessageBubble = ({
  name,
  text,
  timestamp,
  id,
  editable,
  avatarColor = '#6C63FF',
}) => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const messageDelete = async (id) => {
    try {
      await fetchData({
        method: 'DELETE',
        endpoint: `messages/${id}`,
      });
    } catch (err) {}
    navigate('/');
  };
  if (edit)
    return (
      <MessageEdit
        id={id}
        textIn={text}
        nameIn={name}
        onSave={() => setEdit(false)}
      />
    );
  return (
    <div className="flex flex-col p-4   rounded-md shadow-md  dark:bg-primaryDark  justify-between gap-3 py-2">
      <div>
        <div className="flex gap-3 justify-center">
          <span className="ml-2 text-xs text-gray-400">
            {format(new Date(timestamp), 'PPP, p')}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: avatarColor }}
        >
          {getInitials(name)}
        </div>

        {/* Message content */}
        <div>
          {/* Name + Timestamp */}
          <div className="dark:text-white text-sm font-semibold">{name}</div>

          {/* Bubble */}
          <div className="bg-primary   text-white  px-4 py-2 rounded-xl mt-1 inline-block max-w-xs">
            {text}
          </div>

          {/* Status */}
          <div className="text-xs text-gray-500 mt-1">Delivered</div>
        </div>
      </div>
      {editable && (
        <div className="flex gap-4 justify-end">
          <Button className="" onClick={() => setEdit(true)}>
            <SquarePen className="dark:stroke-white" />
          </Button>
          <Button
            className="self-end bg-red-700 dark:bg-red-700 dark:hover:bg-red-700/65 hover:bg-red-700/65 "
            onClick={() => messageDelete(id)}
          >
            <Trash className="dark:stroke-white" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
