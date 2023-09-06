import React from 'react'
import { Editor } from 'react-draft-wysiwyg'

const RichTextEditor = ({
  editorState,
  onEditorStateChange
}: {
  editorState: any

  onEditorStateChange: (e: any) => void
}): ReactNode => {
  return (
    <Editor
      placeholder='Write a comment...'
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      editorClassName='editor-class'
      toolbar={{
        options: ['inline', 'list', 'textAlign', 'link'],
        inline: {
          options: ['bold', 'italic', 'underline']
        },
        list: {
          options: ['unordered']
        },
        textAlign: {
          options: ['left', 'justify', 'right']
        },
        link: {
          options: ['link']
        }
      }}
    />
  )
}

export default RichTextEditor
