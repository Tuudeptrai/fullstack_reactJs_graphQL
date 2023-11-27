import React, { useEffect, useState } from 'react';
import {
    ContentState,
    convertFromHTML,
    convertToRaw,
    EditorState,
  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { draftToHTML } from 'draftjs-to-html';

export default function Note() {
    
    const note = {id:'1', content: '<p>This is new note</p>'}

    const [editorState, setEditorState] = useState(()=>{
        return EditorState.createEmpty()
    })
    const [rawHTML, setRawHTML] = useState(note.content);

    const handleOnchange = (e) =>{
        setEditorState(e);
        setRawHTML(draftToHTML(convertToRaw(e.getCurrentContent())));
    }

    useEffect(() => {
        const blocksFromHTML = convertFromHTML(note.content);
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        setEditorState(EditorState.createWithContent(state));
      }, [note.id]);

    useEffect(()=>{
        setRawHTML(note.content);
    },[note.content])

    return (
        <>
           <Editor editorState={editorState}
           onEditorStateChange={handleOnchange}
           placeholder='write note content'
           />
        </>
    )
}
