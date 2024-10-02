import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'The AutoEval Platform',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Overview of LastMile AI's AutoEval platform to evaluate LLMs through fine-tuned evaluator models.
      </>
    ),
    link: './docs/autoeval-platform'
  },
  {
    title: 'Quickstart',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Guide to get started with LastMile AI within minutes.
      </>
    ),
    link:'./docs/quickstart',
  },
  {
    title: 'Community Recipes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Resources from the community and the LastMile AI team.
      </>
    ),
    link:'./docs/overview',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
        <a href={link}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </a>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
