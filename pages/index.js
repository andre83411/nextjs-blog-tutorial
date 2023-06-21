import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const siteTitle = "My Blog";
  const selfIntroduction = `Hello everyone! My name is Andrea Montes, and I am a dedicated stay-at-home mother of two wonderful children, aged 1 and 6. Beyond my role as a mother, I have embarked on an exciting journey of personal growth and professional development. Currently, I am immersing myself in the world of coding and software development, pursuing my passion for technology.

  To further enhance my skills and knowledge in this field, I am attending a full-stack developer bootcamp at MIT xPro, one of the world's renowned institutions for cutting-edge education. Through this intensive program, I am acquiring a deep understanding of various programming languages, frameworks, and tools, empowering me to create innovative and impactful solutions.

  Balancing the responsibilities of motherhood with the demands of learning to code has been both challenging and rewarding. It has taught me invaluable lessons in time management, determination, and perseverance. By investing in my education and honing my coding skills, I aim to create new opportunities for myself and contribute to the ever-evolving tech industry.

  I believe that being a mother has nurtured my ability to adapt, solve problems creatively, and work effectively within a team. These transferable skills, combined with my newfound technical expertise, make me a versatile and resilient professional ready to take on exciting challenges.

  I am thrilled to connect with like-minded individuals, collaborate on inspiring projects, and make a meaningful impact in the world of technology. Together, let's push boundaries, drive innovation, and create a brighter future.`;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{selfIntroduction}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}