import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './EnvelopeIntro.css';

type Phase = 'closed' | 'flap' | 'cardOut' | 'unfold' | 'done';

const SESSION_KEY = 'wedding-envelope-seen';

const panelVariants = {
  folded: (index: number) => ({
    rotateX: index % 2 === 0 ? 85 : -85,
    opacity: 0.4,
  }),
  flat: {
    rotateX: 0,
    opacity: 1,
  },
};

type EnvelopeIntroProps = {
  children: React.ReactNode;
};

export function EnvelopeIntro({ children }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<Phase>(() =>
    sessionStorage.getItem(SESSION_KEY) ? 'done' : 'closed',
  );

  useEffect(() => {
    if (phase === 'done') {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }
  }, [phase]);

  function handleOpen() {
    setPhase('flap');
    window.setTimeout(() => setPhase('cardOut'), 450);
    window.setTimeout(() => setPhase('unfold'), 1000);
  }

  const isIntroVisible = phase !== 'done';

  return (
    <div className="envelope-intro-root">
      <AnimatePresence>
        {isIntroVisible && (
          <motion.div
            className="intro-stage"
            onClick={() => {
              if (phase === 'unfold') setPhase('done');
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="envelope-perspective">
              <motion.div
                className="envelope-back"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              <div className="card-position">
                <motion.div
                  className="invitation-card"
                  animate={
                    phase === 'closed' || phase === 'flap'
                      ? { y: 60, opacity: phase === 'closed' ? 0 : 1 }
                      : { y: -40, opacity: 1 }
                  }
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className={`fold-panel fold-panel--${index}`}
                      custom={index}
                      variants={panelVariants}
                      initial="folded"
                      animate={phase === 'unfold' ? 'flat' : 'folded'}
                      transition={{ duration: 0.6, delay: index * 0.22, ease: 'easeOut' }}
                    >
                      {index === 1 && (
                        <div className="fold-panel-content">
                          <span className="invitation-kicker">You are invited to the wedding of</span>
                          <span className="invitation-names">Aaron Voigt<br /><i>and</i><br />Genevieve Ovsak</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className={`envelope-flap envelope-flap--${phase}`}
                animate={{ rotateX: phase === 'closed' ? 0 : 180 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
            </div>

            {phase === 'closed' && (
              <motion.button
                type="button"
                className="open-invitation-button"
                onClick={handleOpen}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Open Your Invitation
              </motion.button>
            )}
            {phase === 'unfold' && (
              <motion.p
                className="continue-invitation-prompt"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Click anywhere to continue
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={isIntroVisible ? 'site-content site-content--hidden' : 'site-content'}>
        <div className="site-corners" aria-hidden="true">
          <span className="site-corner site-corner--top-left" />
          <span className="site-corner site-corner--top-right" />
          <span className="site-corner site-corner--bottom-left" />
          <span className="site-corner site-corner--bottom-right" />
        </div>
        {children}
      </div>
    </div>
  );
}
