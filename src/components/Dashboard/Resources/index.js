import React from 'react';
import './Resources.css';
import Title from './Title';
import DescriptionBox from './DescriptionBox';
import Timer from './Timer';
import RecommendedProductivity from './RecommendedProductivity';

function Resources() {
  return (
    <div className="resources">
      <Title />
      <DescriptionBox />
      <Timer />
      <RecommendedProductivity />
    </div>
  );
}

export default Resources;
