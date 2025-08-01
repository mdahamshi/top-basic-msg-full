'use client';
import { fetchData } from '../api/fetch';

import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
  Textarea,
} from 'flowbite-react';
import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MessageEdit = ({ id, nameIn, textIn, onSave }) => {
  const [name, setName] = useState(nameIn);
  const [text, setText] = useState(textIn);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    const body = { name, text };
    try {
      await fetchData({
        body,
        method: 'PUT',
        endpoint: `messages/${id}`,
      });
    } catch (err) {}
    onSave();
  };
  return (
    <div className="p-4  dark:bg-primaryDark  rounded-md shadow-md  space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Update Message
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="text">Your Message</Label>
        </div>
        <Textarea
          rows={4}
          id="text"
          type="textarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
          placeholder="A brief message to the TOP folks"
        />
      </div>

      <div className="w-full flex justify-end">
        <Button onClick={handleUpdate} className=" btn-primary flex gap-4">
          Save
          <SendHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default MessageEdit;
