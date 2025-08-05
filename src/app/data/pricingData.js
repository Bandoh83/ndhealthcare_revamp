import nationWideImage from "@public/images/nationwide.png";
import nhisImage from "@public/images/nhis.png";
import redShotImage from "@public/images/redshot.png";
import hefraImage from "@public/images/hefra.png";  
import healthNetImage from "@public/images/healthnet.png";
import { HiHeart, HiUserGroup, HiShieldCheck } from "react-icons/hi2";
import {
  FaHandsHelping,
  FaBaby,
  FaHome,
  FaUserInjured,
  FaPuzzlePiece,
  FaBrain,
  FaBlind,
  FaBed,
  FaUserNurse,
} from "react-icons/fa";


export const pricingData = [
  {
    title: 'Full Support Services',
    subTitle:
      'Comprehensive care including mobility assistance, stress management, and healthcare coordination for complete support.',
    price: 'GHc 5,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Stress, Anxiety and Depression Management',
      'Coordination with Healthcare Providers',
      '24/7 Support Available',
    ],
    btnText: 'Get Started',
    btnUrl: '#',
    popular: true,
  },
  {
    title: 'Elderly Support Care',
    subTitle:
      'Specialized care for seniors including mobility support, medication reminders, and personal care assistance.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Medication Reminders',
      'Assistance with Medical Appointments',
      'Personal Care Support (Bathing)',
      'Stress & Depression Management',
    ],
    btnText: 'Get Started',
    btnUrl: '#',
    popular: false,
  },
  {
    title: 'Baby and Child Care',
    subTitle:
      'Dedicated childcare services including bathing, feeding support, and educational assistance for growing children.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Bathing & Personal Care',
      'Meal Preparation & Feeding Support',
      'Educational Assistance',
      'Oral Care & Grooming',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Autism Care',
    subTitle:
      'Specialized autism support with mobility exercises, speech therapy, and cognitive improvement activities.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Mobility Strengthening Exercises',
      'Speech Therapy',
      'Concentration & Memory Activities',
      'Personal Care Assistance',
      'Stress & Anxiety Management',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Dementia Care',
    subTitle:
      'Compassionate dementia care focused on creating safe environments and cognitive support activities.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Safe & Familiar Environment Setup',
      'Memory & Concentration Activities',
      'Stress & Depression Management',
      'Specialized Dementia Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Live-In Care',
    subTitle:
      'Round-the-clock care with a dedicated caregiver residing in your home for constant support and supervision.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      '24/7 In-Home Caregiver',
      'Round-the-Clock Support',
      'Constant Care & Supervision',
      'Personalized Care Plan',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Post-Surgical Care',
    subTitle:
      'Specialized recovery support including mobility assistance, hygiene maintenance, and rehabilitation exercises.',
    price: 'GHc 3,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Personal Hygiene Maintenance',
      'Minimal Exercise Support',
      'Feeding Support When Necessary',
      'Stress & Anxiety Management',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Neurological Care',
    subTitle:
      'Specialized care for neurological conditions with focused rehabilitation and support services.',
    price: 'GHc 2,000',
    period: '/month',
    featureList: [
      'Specialized Neurological Support',
      'Rehabilitation Assistance',
      'Customized Care Plans',
      'Professional Medical Coordination',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Home Visits/Assessments',
    subTitle:
      'Professional home assessments and visits to evaluate care needs and provide targeted support services.',
    price: 'GHc 2,000',
    period: '/month',
    featureList: [
      'Professional Home Assessments',
      'Care Need Evaluations',
      'Customized Care Recommendations',
      'Follow-up Visits',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Physiotherapy',
    subTitle:
      'Professional in-house physiotherapy sessions designed to improve mobility, strength, and overall physical wellbeing.',
    price: 'GHc 300',
    period: '/session',
    featureList: [
      'In-House Physiotherapy Sessions',
      'Mobility Improvement',
      'Strength Building Exercises',
      'Pain Management',
      'Recovery Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
];



export const featureListData = [
  {
    iconUrl: <HiHeart size={40} color="#E9722B" />,
    title: "Compassion",
    subTitle:
      "We believe in providing care with empathy, understanding, and kindness. We treat every individual as a member of our own family, offering not just assistance, but companionship and emotional support.",
  },
  {
    iconUrl: <HiUserGroup size={40} color="#E9722B" />,
    title: "Respect",
    subTitle:
      "We respect the dignity, preferences, and privacy of every person we serve. We honor each individual’s unique needs and work with them and their families to ensure they receive personalized, respectful care.",
  },
  {
    iconUrl: <HiShieldCheck size={40} color="#E9722B" />,
    title: "Integrity",
    subTitle: `We are committed to acting with honesty and transparency in all our dealings. We maintain high ethical standards and ensure that our clients, their families, and our caregivers can always trust us to act in their best interests.`,
  },
];

export const helpData = [
  {
    iconUrl: "/images/home_4/compassion.svg",
    title: "Personal care",
    subTitle:
      "All of our carers are trained to provide discreet, sensitive support with areas of personal care such as bathing, dressing, toileting, and continence care.",
  },
  {
    iconUrl: "/images/home_4/excellence.svg",
    title: "Housework",
    subTitle:
      "If you’re struggling to find the time or energy to stay on top of the housework, your carer can help out around the house with just about anything.",
  },
  {
    iconUrl: "/images/home_4/integrity.svg",
    title: "Mobility support",
    subTitle: `Your carer will be able to help you get into and out of bed and move around your home, as well as assisting with physiotherapy exercises.`,
  },
  {
    iconUrl: "/images/home_4/respect.svg",
    title: "Medication Assistance",
    subTitle:
      "From collecting it on your behalf to helping you organise and administer it, our carers are expertly trained to help you with your medication management.",
  },
  {
    iconUrl: "/images/home_4/teamwork.svg",
    title: "Looking after pets",
    subTitle:
      "With home care, you won’t need to worry about being parted from your furry friend(s) – your carer can exercise them, and generally spoil them rotten.",
  },
  {
    iconUrl: "/images/home_4/teamwork.svg",
    title: "Getting out of the house",
    subTitle:
      "A carer can accompany you out and about – whether that’s to the shops, to visit loved ones, or helping you attend social clubs and hobbies.",
  },
];



export const brandData = [
  { imgUrl: nationWideImage, imgAlt: "Brand" },
  { imgUrl: nhisImage, imgAlt: "Brand" },
  { imgUrl: redShotImage, imgAlt: "Brand" },
  { imgUrl: hefraImage, imgAlt: "Brand" },
  { imgUrl: healthNetImage, imgAlt: "Brand" },
];

export const workingProcessData = [
  {
    title: "Book Appointment",
    subTitle:
      "You can schedule an appointment with us by calling our office, completing our online form, or using our mobile application.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Visit Our Facility",
    subTitle:
      "On the day of your visit, please arrive at our facility at your scheduled time. Our team will welcome you and assist with the check-in process.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Meet with Our Healthcare <br />Professionals",
    subTitle:
      "If needed, we’ll arrange any follow-up visits, tests, or procedures to make sure you receive the highest quality care.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "Follow-up Care",
    subTitle:
      "We will schedule any necessary follow-up <br />appointments, tests, or procedures to ensure <br />that you receive the best possible care.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Billing",
    subTitle:
      "We work with most major insurance providers, and our billing team is available to help you understand your coverage and any personal costs.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
];

export const faqData = [
  {
    title: "What services does ND Healthcare offer?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I schedule an appointment",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
];

export const awardData = [
  {
    title: "Mission",
    subTitle:
      "Our mission is to deliver reliable, professional, and compassionate care that enhances the lives of our service users. We strive to build lasting relationships based on trust, respect, and understanding, ensuring that every individual receives care that is both effective and empathetic.",
    iconUrl: "/images/icons/award.svg",
  },
  {
    title: "Vision",
    subTitle:
      "At ND Healthcare, our vision is to be the leading provider of compassionate, high-quality homecare services, empowering individuals to live independently and with dignity in the comfort of their own homes. We strive to create a future where every person receives personalized care that supports their physical, emotional, and social well-being, and where families find peace of mind knowing their loved ones are in the best possible hands.",
    iconUrl: "/images/icons/award.svg",
  },
];
export const departmentData = [
  {
    title: "FULL SUPPORT SERVICES",
    icon: FaHandsHelping,
    href: "/departments/department-details",
  },
  {
    title: "BABY AND CHILD CARE",
    icon: FaBaby,
    href: "/departments/department-details",
  },
  {
    title: "HOME VISITS / ASSESSMENTS",
    icon: FaHome,
    href: "/departments/department-details",
  },
  {
    title: "POST-SURGICAL CARE",
    icon: FaUserInjured,
    href: "/departments/department-details",
  },
  {
    title: "AUTISM CARE",
    icon: FaPuzzlePiece,
    href: "/departments/department-details",
  },
  {
    title: "DEMENTIA CARE",
    icon: FaBrain,
    href: "/departments/department-details",
  },
  {
    title: "ELDERLY SUPPORT CARE",
    icon: FaBlind,
    href: "/departments/department-details",
  },
  {
    title: "BEDRIDDEN CARE",
    icon: FaBed,
    href: "/departments/department-details",
  },
  {
    title: "LIVE-IN CARE",
    icon: FaUserNurse,
    href: "/departments/department-details",
  },
];