import React from 'react';
import FeatureCard from './FeatureCard';
import backgroundCard from '../assets/images/background-card.jpg'; // Adjust the path as necessary
import hydrationIcon from '../assets/images/hydrate-icon.png'; // Updated path without space
import sleepIcon from '../assets/images/sleep-icon.png';
import exerciseIcon from '../assets/images/exercise-icon.png';

const FeaturesSection = () => {
  return (
    <div className="py-16 text-center" id="features">
      <p className="text-green-500 font-semibold mb-2">Our Service</p>
      <h2 className="text-3xl font-bold mb-6">
        Features that Improve <span className="underline text-green-500">Your Life</span>
      </h2>
      <div className="flex justify-center space-x-6">
        <FeatureCard title="Hydrate Monitoring" description="Never miss a sip! Keep track of your daily water intake and ensure optimal hydration for your body's needs." icon={hydrationIcon} background={backgroundCard} />
        <FeatureCard title="Sleep Tracking" description="Monitor your sleep patterns and improve your sleep quality with actionable insights for a healthier, more energized you." icon={sleepIcon} background={backgroundCard} />
        <FeatureCard title="Exercise Scheduling" description="Log workouts, track progress, and stay motivated from light exercises to intense routines." icon={exerciseIcon} background={backgroundCard} />
      </div>
    </div>
  );
};

export default FeaturesSection;
