import React from 'react'
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectId } from '@/types/project';
import styles from '@/styles/portfolio.module.scss';
import SectionTitle from '../../components/SectionTitle';
import ListBlock from '../../components/ListBlock';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const project = PROJECTS_DATA[id as ProjectId];

  if (!project) {
    router.replace('/404');
    return null;
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>{project.name}</h1>
      </header>

      <SectionTitle title="Project" />

      {project.projectSrc && project.projectSrc.length > 0 && (
        <ul>
          {project.projectSrc.map((link, linkIndex) => (
            <React.Fragment key={`link-group-${linkIndex}`}>
              {link.src.map((url, urlIndex) => (
                <li key={`${linkIndex}-${urlIndex}`} className={styles.src}>
                  {link.title}
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}

      {project.templateBlocks.map((item, index) => (
        <ListBlock
          key={`template-${index}`}
          title={item.title}
          content={item.content}
          items={item.items}
        />
      ))}

      {project.caseStudy.map((caseItem, caseIndex) => (
        <React.Fragment key={`case-${caseIndex}`}>
          <SectionTitle title={caseItem.sectionTitle} />

          {caseItem.architectureSrc && caseItem.architectureSrc.length > 0 && (
            <ul>
              {caseItem.architectureSrc.map((link, linkIndex) => (
                <React.Fragment key={`arch-link-${linkIndex}`}>
                  {link.src.map((url, urlIndex) => (
                    <li key={`${linkIndex}-${urlIndex}`} className={styles.src}>
                      {link.title}
                      <Link href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          )}

          {caseItem.blocks.map((block, blockIndex) => (
            <ListBlock
              key={`block-${blockIndex}`}
              title={block.title}
              content={block.content}
              image={block.testImg}
              items={block.items}
            />
          ))}
        </React.Fragment>
      ))}
    </main>
  );
}