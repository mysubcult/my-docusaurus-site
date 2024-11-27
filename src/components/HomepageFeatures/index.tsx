import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Качественные Инструкции',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Мы предоставляем только качественные и проверенные инструкции, которые создаем сами. Наши руководства помогут вам быстро и легко установить и настроить программное обеспечение для диагностики автомобилей.
      </>
    ),
  },
  {
    title: 'Ответы на Ваши Вопросы',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        В наших документациях и инструкциях вы найдете ответы на все ваши вопросы. Мы предлагаем подробные руководства по использованию ПО, которые помогут вам максимально эффективно использовать все его возможности.
      </>
    ),
  },
  {
    title: 'Эффективное Использование',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Наши инструкции помогут вам максимально эффективно использовать диагностическое оборудование. Мы предоставляем подробные руководства по настройке и использованию оборудования.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
