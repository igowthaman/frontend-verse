"use client";
import React from 'react';
import Quill from 'quill';

const Editor = () => {
  React.useEffect(() => {
    const options = {
      modules: {
        toolbar: true,
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    };
    new Quill('#quill-editor', options);
  }, []);

  return <div id="quill-editor" />;
};

export default Editor;
