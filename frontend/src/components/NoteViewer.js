import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <h2>Title</h2>
      <p>Body</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
