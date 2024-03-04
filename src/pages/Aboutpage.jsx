import React, { useEffect, useState } from 'react';
import { fetchHeader, fetchFooter } from './Api';
import AboutComponent from '../components/About-Page';

function AboutPage() {
    const [headerContent, setHeaderContent] = useState('');
    const [footerContent, setFooterContent] = useState('');

    useEffect(() => {
        fetchHeader().then(content => setHeaderContent(content));
        fetchFooter().then(content => setFooterContent(content));
    }, []);

    return (
        <AboutComponent headerContent={headerContent} footerContent={footerContent} />
    );
}

export default AboutPage;