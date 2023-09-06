import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import RichTextEditor from './RichTextEditor/RichTextEditor'
import { SetStateAction, useState } from 'react'

const App = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const handleEditorChange = (state: SetStateAction<EditorState>): void => {
    setEditorState(state)
    // convertContentToHTML()
  }

  return <RichTextEditor editorState={editorState} onEditorStateChange={handleEditorChange} />
}

export default App
