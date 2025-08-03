import React from 'react';
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  ClockIcon, 
  StarIcon, 
  HandRaisedIcon, 
  FaceSmileIcon,
  LockClosedIcon 
} from '@heroicons/react/24/outline';

// Core Values Icon Components
const ConfidentialityIcon = () => <LockClosedIcon className="w-8 h-8" />;
const ComfortIcon = () => <HeartIcon className="w-8 h-8" />;
const PatienceIcon = () => <ClockIcon className="w-8 h-8" />;
const DiligenceIcon = () => <StarIcon className="w-8 h-8" />;
const RespectIcon = () => <HandRaisedIcon className="w-8 h-8" />;
const CompassionIcon = () => <FaceSmileIcon className="w-8 h-8" />;
const SafetyIcon = () => <ShieldCheckIcon className="w-8 h-8" />;

const coreValuesData = [
  {
    title: "Confidentiality",
    IconComponent: ConfidentialityIcon,
  },
  {
    title: "Comfort",
    IconComponent: ComfortIcon,
  },
  {
    title: "Patience",
    IconComponent: PatienceIcon,
  },
  {
    title: "Diligence",
    IconComponent: DiligenceIcon,
  },
  {
    title: "Respect",
    IconComponent: RespectIcon,
  },
  {
    title: "Compassion",
    IconComponent: CompassionIcon,
  },
  {
    title: "Safety",
    IconComponent: SafetyIcon,
  },
];

export default coreValuesData;