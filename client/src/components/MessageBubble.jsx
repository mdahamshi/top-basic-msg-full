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
  onDelete,
  onSave
}) => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const messageDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this message?'
    );
    if (!confirmed) return;

    try {
      await fetchData({
        method: 'DELETE',
        endpoint: `messages/${id}`,
      });
    } catch (err) {}
    onDelete(id);
  };
  if (edit)
    return (
      <MessageEdit
        id={id}
        textIn={text}
        nameIn={name}
        onCancel={() => setEdit(false)}
        onSave={({text, name, id}) => {
          onSave({text, name, id});
          setEdit(false)}
        }
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
          <Button color="yellow" onClick={() => setEdit(true)}>
            <SquarePen className="dark:stroke-white" />
          </Button>
          <Button
            color="red"
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
