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
              top: index === 0 ? '10vw' : index === 1 ? '70vw' : '130vw',
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
        <Badge name="company1" label="Codveda Technologies" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Codveda Technologies, India</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer Intern – Codveda Technologies (Remote)</b></div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Worked as a Frontend Developer Intern at Codveda Technologies, contributing to the development of responsive and user-friendly web applications in a remote, cross-cultural environment. Built and optimized user interfaces using React, TypeScript, and Tailwind CSS, while collaborating with designers and backend developers to transform UI/UX designs into functional, high-quality implementations.</div>
            <div className="p-l">Participated in code reviews, debugging, and feature enhancements to improve overall application performance and usability. Applied best practices such as component-based architecture, clean code principles, and separation of concerns, while strengthening skills in remote collaboration, problem-solving, and delivering solutions in a fast-paced development environment.</div>
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
              <div className="p-l" style={{ marginBottom: '1rem' }}>Worked as a Frontend Developer Intern at Codveda Technologies, contributing to the development of responsive and user-friendly web applications in a remote, cross-cultural environment. Built and optimized user interfaces using React, TypeScript, and Tailwind CSS, while collaborating with designers and backend developers to transform UI/UX designs into functional, high-quality implementations.</div>
              <div className="p-l">Participated in code reviews, debugging, and feature enhancements to improve overall application performance and usability. Applied best practices such as component-based architecture, clean code principles, and separation of concerns, while strengthening skills in remote collaboration, problem-solving, and delivering solutions in a fast-paced development environment.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>Okt 2025 - Jan 2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" label="IDCamp" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>IDCamp Indosat Ooredoo Hutchison</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer Trainee – [Frontend Developer]</b></div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Completed an intensive bootcamp program focused on modern frontend development, gaining hands-on experience in building responsive and scalable web applications using React, TypeScript, and Tailwind CSS. Developed multiple projects by applying component-based architecture and clean code principles, while translating UI/UX designs into interactive and user-friendly interfaces.</div>
            <div className="p-l">Collaborated in team-based environments using Git and structured development workflows to simulate real-world practices. Strengthened skills in problem-solving, debugging, and writing maintainable, reusable code within a fast-paced learning environment.</div>
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
              <h6 className="h6">Okt 2025 - Jan 2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>IDCamp Indosat Ooredoo Hutchison</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer Trainee – [Frontend Developer]</b></div>
              <div className="p-l" style={{ marginBottom: '1rem' }}>Completed an intensive bootcamp program focused on modern frontend development, gaining hands-on experience in building responsive and scalable web applications using React, TypeScript, and Tailwind CSS. Developed multiple projects by applying component-based architecture and clean code principles, while translating UI/UX designs into interactive and user-friendly interfaces.</div>
              <div className="p-l">Collaborated in team-based environments using Git and structured development workflows to simulate real-world practices. Strengthened skills in problem-solving, debugging, and writing maintainable, reusable code within a fast-paced learning environment.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {!isMobile ? <div className={styles.fifthEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>Aug 2024 - Sep 2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" label="Synepse Academy" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Synepse Academy (Palembang)</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer</b></div>
            <div className="p-l" style={{ marginBottom: '1rem' }}>Developed responsive e-learning web interfaces designed to deliver a seamless and engaging user experience across both desktop and mobile devices. Focused on creating intuitive layouts and interactive components to support effective content delivery and user navigation.</div>
            <div className="p-l">Integrated frontend components with backend APIs to enable dynamic data handling and improve overall application functionality. Ensured smooth communication between client and server while optimizing performance and enhancing the overall user experience.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">Aug 2024 - Sep 2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Synepse Academy (Palembang)</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l" style={{ marginBottom: '1rem' }}><b>Frontend Developer</b></div>
              <div className="p-l" style={{ marginBottom: '1rem' }}>Developed responsive e-learning web interfaces designed to deliver a seamless and engaging user experience across both desktop and mobile devices. Focused on creating intuitive layouts and interactive components to support effective content delivery and user navigation.</div>
              <div className="p-l">Integrated frontend components with backend APIs to enable dynamic data handling and improve overall application functionality. Ensured smooth communication between client and server while optimizing performance and enhancing the overall user experience.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
