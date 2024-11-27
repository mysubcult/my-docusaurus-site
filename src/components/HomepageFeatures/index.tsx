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
    title: 'Установка ПО',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Подробные инструкции по установке программного обеспечения для диагностики автомобилей. Наши руководства помогут вам быстро и легко установить необходимое ПО, чтобы вы могли сразу приступить к работе. Мы предоставляем шаг за шагом инструкции, которые подходят как для новичков, так и для опытных пользователей.
      </>
    ),
  },
  {
    title: 'Использование ПО',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Руководства и документация по использованию программного обеспечения для диагностики автомобилей. Мы предлагаем подробные инструкции, которые помогут вам максимально эффективно использовать все возможности нашего ПО. Вы найдете здесь советы и рекомендации по настройке, использованию различных функций и решению возможных проблем.
      </>
    ),
  },
  {
    title: 'Использование Оборудования',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Инструкции по использованию оборудования для диагностики автомобилей. Мы предоставляем подробные руководства по настройке и использованию диагностического оборудования, чтобы вы могли быстро и точно диагностировать проблемы в автомобилях. Наши инструкции помогут вам максимально эффективно использовать оборудование и получать точные результаты.
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
