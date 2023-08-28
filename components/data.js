import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/traveltwo.jpg';
import benefitNewImg from '../public/img/benefitNew.png';

const benefitOne = {
  title: 'Our services',
  desc: 'Services we specialize in',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Air Tickets',
      desc: 'To any country',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Visa Assistance',
      desc: 'United Kingdom, United States, Canada, Australia, France, Germany, Sweden, Norway, Spain, Malayasia, Dubai',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Holiday Packages',
      desc: 'To any country',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Hotel Bookings',
      desc: 'To any country',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Travel Insurance',
      desc: 'To any country',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'These are our services',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
