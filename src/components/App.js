import React from 'react';

import SelectIssue from '../features/issues/components/SelectIssue';
import IssueDetail from '../features/issues/components/IssueDetail'

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <SelectIssue />
      <IssueDetail />
    </div>
  );
}

export default App;
