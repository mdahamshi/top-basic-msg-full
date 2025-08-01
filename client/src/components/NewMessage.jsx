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

export default function Component() {
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  function onCloseModal() {
    setOpenModal(false);
    setName('');
    navigate('/');
  }
  const handleSend = async () => {
    const body = { name, text };
    try {
      await fetchData({
        body,
        method: 'POST',
        endpoint: 'new',
      });
    } catch (err) {}
    navigate('/');
    setOpenModal(false);
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Send New Message
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
              <Button onClick={handleSend} className="btn-primary flex gap-4">
                Send
                <SendHorizontal />
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
