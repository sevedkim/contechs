//entryList.js
import React from 'react';

const EntryList = ({entries}) => (
  <div>
    List of Entries:
    {entries.map((entry, index) =>
      <div key={index}>
        <b>{ entry.term }</b> : { entry.definition }
      </div>
    )}
  </div>
);

export default EntryList;
