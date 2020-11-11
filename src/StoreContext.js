import React from 'react';

const StoreContext = React.createContext({
  handleDelete: () => {},
  updateMessage: () => {},
  clearMessage: () => {},
  updateError: () => {},
  "folders": [],
  "notes": []
})

export default StoreContext;