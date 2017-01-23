//entryList.js
import React from 'react';

// const entryList = (props) => {
//   const {entries} = props;
//   console.log('inside entryList');
//   console.log(entries)
//   return (
//     <div>
//       {entries.map((entry) =>
//         <div>
//           {this.entry.term} : {this.entry.definition}
//         </div>
//       )}
//     </div>
//   )
// }

const EntryList = ({entries}) => (
  <div>
    List of Entries:
    {entries.map((entry, index) =>
      <div key={index}>
        { entry.term } : { entry.definition }
      </div>
    )}
  </div>
);

export default EntryList;
