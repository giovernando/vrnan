import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start:
                  index === 0
                    ? `top-=${vw(35)}`
                    : `top+=${vw(35 + 5.5555556 * index)}`,
                end:
                  index === 0
                    ? `bottom-=${vw(35 + 5.5555556 * index)}`
                    : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Experience</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Codveda Technologies | India</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Worked as a Frontend Developer Intern at Codveda
            </div>
            <div className="p-l">
              Technologies, contributing to the development
            </div>
            <div className="p-l">
              of responsive and user-friendly web applications in a
            </div>
            <div className="p-l">remote, cross-cultural environment.</div>
            <div className="p-l">
              Built and optimized user interfaces using React,
            </div>
            <div className="p-l">
              TypeScript, and Tailwind CSS, while collaborating with
            </div>
            <div className="p-l">
              designers and backend developers to transform UI/UX
            </div>
            <div className="p-l">
              {' '}
              designs into functional, high-quality implementations.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>
                Codveda Technologies | India
              </h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Worked as a Frontend Developer Intern at Codveda
              </div>
              <div className="p-l">
                Technologies, contributing to the development
              </div>
              <div className="p-l">
                of responsive and user-friendly web applications in a
              </div>
              <div className="p-l">remote, cross-cultural environment.</div>
              <div className="p-l">
                Built and optimized user interfaces using React,
              </div>
              <div className="p-l">
                TypeScript, and Tailwind CSS, while collaborating with
              </div>
              <div className="p-l">
                designers and backend developers to transform UI/UX
              </div>
              <div className="p-l">
                {' '}
                designs into functional, high-quality implementations.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>
              IDCamp Indosat Ooredoo Hutchison
            </h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Completed an intensive frontend bootcamp, gaining hands
            </div>
            <div className="p-l">
              on experience in building responsive and scalable web
            </div>
            <div className="p-l">
              applications using React, TypeScript, and Tailwind CSS,
            </div>
            <div className="p-l">
              while developing projects with component-based
            </div>
            <div className="p-l">
              {' '}
              architecture and clean code principles. Collaborated in
            </div>
            <div className="p-l">
              team environments using Git and structured workflows,
            </div>
            <div className="p-l">
              translating UI/UX designs into interactive interfaces while
            </div>
            <div className="p-l">
              strengthening skills in problem-solving, debugging, and
            </div>
            <div className="p-l">writing maintainable, reusable code.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>
                IDCamp Indosat Ooredoo Hutchison
              </h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Completed an intensive frontend bootcamp, gaining hands
              </div>
              <div className="p-l">
                on experience in building responsive and scalable web
              </div>
              <div className="p-l">
                applications using React, TypeScript, and Tailwind CSS,
              </div>
              <div className="p-l">
                while developing projects with component-based
              </div>
              <div className="p-l">
                {' '}
                architecture and clean code principles. Collaborated in
              </div>
              <div className="p-l">
                team environments using Git and structured workflows,
              </div>
              <div className="p-l">
                translating UI/UX designs into interactive interfaces while
              </div>
              <div className="p-l">
                strengthening skills in problem-solving, debugging, and
              </div>
              <div className="p-l">writing maintainable, reusable code.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Synepse Academy</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Developed responsive e-learning web interfaces designed toX
            </div>
            <div className="p-l">
              deliver a seamless and engaging user experience across both
            </div>
            <div className="p-l">
              desktop and mobile devices. Focused on creating intuitive
            </div>
            <div className="p-l">
              layouts and interactive components to support effective content
            </div>
            <div className="p-l">
              delivery and user navigation. Integrated frontend components
            </div>
            <div className="p-l">
              with backend APIs to enable dynamic data handling and improve
            </div>
            <div className="p-l">
              overall application functionality. Ensured smooth communication
            </div>
            <div className="p-l">
              between client and server while optimizing performance and
            </div>
            <div className="p-l">enhancing the overall user experience.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>
                Synepse Academy
              </h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Developed responsive e-learning web interfaces designed
              </div>
              <div className="p-l">
                toX deliver a seamless and engaging user experience
              </div>
              <div className="p-l">
                across both desktop and mobile devices. Focused on
              </div>
              <div className="p-l">
                creating intuitive layouts and interactive components to
              </div>
              <div className="p-l">
                support effective content delivery and user navigation.
              </div>
              <div className="p-l">
                Integrated frontend components with backend APIs
              </div>
              <div className="p-l">
                to enable dynamic data handling and improve overall
              </div>
              <div className="p-l">
                application functionality. Ensured smooth communication
              </div>
              <div className="p-l">
                between client and server while optimizing performance
              </div>
              <div className="p-l">
                and enhancing the overall user experience.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
