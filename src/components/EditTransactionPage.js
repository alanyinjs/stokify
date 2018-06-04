import React from 'react';

const EditTransactionPage = (props) => (
  <div>
    <p>This is to edit stock: {props.match.params.id}</p>
  </div>
)

export default EditTransactionPage;