import type {ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import VideoOverlay from '@site/src/components/VideoOverlay';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <button
              className="button button--secondary button--lg"
              onClick={openVideo}
              type="button">
              GoChapaa Tutorial - 30 Seconds ⏱️
            </button>
          </div>
        </div>
      </header>
      
      <VideoOverlay
        isOpen={isVideoOpen}
        onClose={closeVideo}
        videoSrc="/img/gochapaatutorial.mp4"
        title="GoChapaa Tutorial"
      />
    </>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.greenSection}>
          {/* Green background section - content can be added later */}
        </div>
      </main>
    </Layout>
  );
}
