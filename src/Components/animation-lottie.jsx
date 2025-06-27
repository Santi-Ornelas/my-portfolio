import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    fetchAnimation();
  }, [animationPath]);

  return animationData ? (
    <Lottie animationData={animationData} loop={true} />
  ) : (
    <div>Loading animation...</div>
  );
};

export default AnimationLottie;