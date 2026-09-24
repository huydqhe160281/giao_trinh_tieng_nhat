import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/kana">
            Bảng chữ cái
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/intro">
            Khóa Minna N5
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/bai-01-cau-danh-tu">
            Bắt đầu Bài 1
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Giáo án ngữ pháp Minna no Nihongo I — 25 bài N5 bằng tiếng Việt">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <Heading as="h3">Bảng chữ cái</Heading>
                <p>Hiragana, katakana, tenten/maru, âm ghép và っ — học trước hoặc song song Minna.</p>
              </div>
              <div className="col col--4">
                <Heading as="h3">25 bài Minna</Heading>
                <p>Sidebar trái liệt kê đủ Bài 1 → 25; prev/next chỉ hiện bài kề có sẵn.</p>
              </div>
              <div className="col col--4">
                <Heading as="h3">Dễ đọc khi chưa biết Hán</Heading>
                <p>Mọi kanji kèm hiragana: 学生（がくせい）. Nội dung tiếng Việt + ví dụ JP.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
