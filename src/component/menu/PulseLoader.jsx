import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";

const Loading = (loading) => (
  <PulseLoader
    size={12}
    color={"teal"}
    loading={loading}
  />
);

export default Loading;
