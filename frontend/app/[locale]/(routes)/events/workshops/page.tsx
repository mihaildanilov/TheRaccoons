import { GetEventList } from '@/actions/events';
import { EventTypes } from '@/types';
import { useTranslations } from 'next-intl';
import EventCardGrid from '../_components/EventCardGrid';
import EventPageNav from '../_components/EventPageNav';
import ContactSection from '@/components/layout/ContactSection';

const EventsPage = () => {
  const filteredEvents = GetEventList('workshop' as EventTypes);
  const t = useTranslations('EventTypes');
  const eventTypes = [
    {
      href: '/events',
      label: t('all'),
    },
    {
      href: '/events/hackathons',
      label: t('hackathons'),
    },
    {
      href: '/events/workshops',
      label: t('workshops'),
    },
  ];
  return (
    <div className="flex flex-col items-center md:items-stretch h-[91vh]">
      <div className=" mx-5 md:mx-[4.7rem] mt-4">
        <EventPageNav events={eventTypes} placeHolder={t('sort')} />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <EventCardGrid props={filteredEvents} />
      </div>
      <div className=" flex flex-col items-center justify-end h-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default EventsPage;
