import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://testour.az/uploads/baku-azerbaijan.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://testour.az/uploads/baku-azerbaijan.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
];

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {}, []);

    return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default HomePage;
