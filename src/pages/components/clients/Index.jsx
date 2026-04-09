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
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
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
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
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
          <AppearTitle>Dec 2025 - Feb 2026</AppearTitle>
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
            <h4 className={clsx('h4', 'bold')}>Codveda Technologies, India</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer Intern – Codveda Technologies (Remote)</b></div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Worked as a Frontend Developer Intern at Codveda Technologies, contributing to the development of responsive and user-friendly web applications in a remote, cross-cultural environment.</div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Responsible for building and optimizing user interfaces using modern technologies such as React, TypeScript, and Tailwind CSS. Collaborated with designers and backend developers to translate UI/UX designs into functional, high-quality code while ensuring performance, accessibility, and responsiveness across multiple devices.</div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Participated in code reviews, debugging, and feature enhancements to improve overall application quality. Applied best practices in component-based architecture, clean code principles, and separation of concerns to maintain scalable and maintainable codebases.</div>
            <div className="p-l">This experience strengthened my ability to work independently, communicate effectively in a distributed team, and deliver solutions in a fast-paced development environment.</div>
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
              <h6 className="h6">Dec 2025 - Feb 2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Codveda Technologies, India</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer Intern – Codveda Technologies (Remote)</b></div>
              <div className="p-l" style={{ marginBottom: '1rem' }}>Worked as a Frontend Developer Intern at Codveda Technologies, contributing to the development of responsive and user-friendly web applications in a remote, cross-cultural environment.</div>
              <div className="p-l" style={{ marginBottom: '1rem' }}>Responsible for building and optimizing user interfaces using modern technologies such as React, TypeScript, and Tailwind CSS. Collaborated with designers and backend developers to translate UI/UX designs into functional, high-quality code while ensuring performance, accessibility, and responsiveness across multiple devices.</div>
              <div className="p-l" style={{ marginBottom: '1rem' }}>Participated in code reviews, debugging, and feature enhancements to improve overall application quality. Applied best practices in component-based architecture, clean code principles, and separation of concerns to maintain scalable and maintainable codebases.</div>
              <div className="p-l">This experience strengthened my ability to work independently, communicate effectively in a distributed team, and deliver solutions in a fast-paced development environment.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
