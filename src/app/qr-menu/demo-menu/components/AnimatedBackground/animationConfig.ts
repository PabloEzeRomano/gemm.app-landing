import { gsap } from 'gsap';

export const createBlobAnimations = (q: gsap.utils.SelectorFunc) => {
  // Create multiple timelines for different animation layers
  const mainTimeline = gsap.timeline({ repeat: -1 });
  const morphTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  const rotationTimeline = gsap.timeline({ repeat: -1 });
  const scaleTimeline = gsap.timeline({ repeat: -1, yoyo: true });

  // Main floating movement - organic, wave-like patterns
  mainTimeline
    .to(q('.blob-1'), {
      x: 40,
      y: -20,
      duration: 12,
      ease: 'sine.inOut',
    })
    .to(
      q('.blob-1'),
      {
        x: -30,
        y: 15,
        duration: 15,
        ease: 'sine.inOut',
      },
      '+=2'
    )
    .to(
      q('.blob-1'),
      {
        x: 20,
        y: -10,
        duration: 10,
        ease: 'sine.inOut',
      },
      '+=1'
    );

  mainTimeline
    .to(
      q('.blob-2'),
      {
        x: -50,
        y: 25,
        duration: 18,
        ease: 'sine.inOut',
      },
      '<'
    )
    .to(
      q('.blob-2'),
      {
        x: 35,
        y: -30,
        duration: 14,
        ease: 'sine.inOut',
      },
      '+=3'
    )
    .to(
      q('.blob-2'),
      {
        x: -25,
        y: 20,
        duration: 16,
        ease: 'sine.inOut',
      },
      '+=2'
    );

  mainTimeline
    .to(
      q('.blob-3'),
      {
        x: 30,
        y: 35,
        duration: 20,
        ease: 'sine.inOut',
      },
      '<'
    )
    .to(
      q('.blob-3'),
      {
        x: -40,
        y: -15,
        duration: 13,
        ease: 'sine.inOut',
      },
      '+=4'
    )
    .to(
      q('.blob-3'),
      {
        x: 15,
        y: 25,
        duration: 17,
        ease: 'sine.inOut',
      },
      '+=1'
    );

  // Morphing effects - blobs change shape and size
  morphTimeline
    .to(q('.blob-1'), {
      scale: 1.3,
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      duration: 8,
      ease: 'power2.inOut',
    })
    .to(
      q('.blob-2'),
      {
        scale: 0.8,
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
        duration: 10,
        ease: 'power2.inOut',
      },
      '<'
    )
    .to(
      q('.blob-3'),
      {
        scale: 1.2,
        borderRadius: '70% 30% 40% 60% / 40% 70% 60% 30%',
        duration: 9,
        ease: 'power2.inOut',
      },
      '<'
    );

  // Rotation effects for more organic movement
  rotationTimeline
    .to(q('.blob-1'), {
      rotation: 360,
      duration: 25,
      ease: 'none',
    })
    .to(
      q('.blob-2'),
      {
        rotation: -360,
        duration: 30,
        ease: 'none',
      },
      '<'
    )
    .to(
      q('.blob-3'),
      {
        rotation: 180,
        duration: 35,
        ease: 'none',
      },
      '<'
    );

  // Subtle scale breathing effect
  scaleTimeline
    .to(q('.blob-1'), {
      scale: 1.1,
      duration: 4,
      ease: 'power2.inOut',
    })
    .to(
      q('.blob-2'),
      {
        scale: 0.9,
        duration: 5,
        ease: 'power2.inOut',
      },
      '<'
    )
    .to(
      q('.blob-3'),
      {
        scale: 1.05,
        duration: 4.5,
        ease: 'power2.inOut',
      },
      '<'
    );

  return { mainTimeline, morphTimeline, rotationTimeline, scaleTimeline };
};

export const createParticleAnimations = (q: gsap.utils.SelectorFunc) => {
  const particles = q('.particle');

  // Create complex particle paths that navigate the whole page
  gsap.set(particles, {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight
  });

  // Particle 1: Top to bottom with zigzag
  gsap.to(q('.particle-1'), {
    y: window.innerHeight + 100,
    x: () => Math.random() * window.innerWidth,
    duration: 15,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-1'), { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.set(q('.particle-1'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 2: Bottom to top with wave motion
  gsap.to(q('.particle-2'), {
    y: -100,
    x: () => Math.random() * window.innerWidth,
    duration: 18,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-2'), { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.set(q('.particle-2'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 3: Diagonal across the page
  gsap.to(q('.particle-3'), {
    x: window.innerWidth + 100,
    y: window.innerHeight + 100,
    duration: 20,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-3'), { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.set(q('.particle-3'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 4: Circular path around the page
  gsap.to(q('.particle-4'), {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: window.innerWidth, y: 0 },
        { x: window.innerWidth, y: window.innerHeight },
        { x: 0, y: window.innerHeight },
        { x: 0, y: 0 }
      ],
      curviness: 1
    },
    duration: 25,
    repeat: -1,
    ease: 'none',
    onRepeat: () => {
      gsap.to(q('.particle-4'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-4'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 5: Figure-8 pattern across the page
  gsap.to(q('.particle-5'), {
    motionPath: {
      path: [
        { x: 0, y: window.innerHeight / 2 },
        { x: window.innerWidth, y: 0 },
        { x: 0, y: window.innerHeight },
        { x: window.innerWidth, y: window.innerHeight / 2 },
        { x: 0, y: 0 },
        { x: window.innerWidth, y: window.innerHeight / 2 },
        { x: 0, y: window.innerHeight / 2 }
      ],
      curviness: 1.5
    },
    duration: 30,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-5'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-5'), { opacity: 0.8 });
      }});
    }
  });

  // Additional particles with unique patterns
  // Particle 6: Spiral pattern
  gsap.to(q('.particle-6'), {
    motionPath: {
      path: [
        { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8 },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.8 },
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.2 },
        { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      ],
      curviness: 2
    },
    duration: 22,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-6'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-6'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 7: Infinity symbol
  gsap.to(q('.particle-7'), {
    motionPath: {
      path: [
        { x: 0, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.25, y: 0 },
        { x: window.innerWidth * 0.5, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.75, y: window.innerHeight },
        { x: window.innerWidth, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.75, y: 0 },
        { x: window.innerWidth * 0.5, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.25, y: window.innerHeight },
        { x: 0, y: window.innerHeight / 2 }
      ],
      curviness: 1.2
    },
    duration: 28,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-7'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-7'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 8: Random bouncing
  gsap.to(q('.particle-8'), {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: 12,
    repeat: -1,
    ease: 'bounce.out',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-8'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-8'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 9: Sine wave motion
  gsap.to(q('.particle-9'), {
    x: window.innerWidth + 100,
    y: (i) => Math.sin(i * 0.1) * window.innerHeight / 2 + window.innerHeight / 2,
    duration: 16,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-9'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-9'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 10: Circular orbit
  gsap.to(q('.particle-10'), {
    motionPath: {
      path: [
        { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.8, y: window.innerHeight / 2 },
        { x: window.innerWidth / 2, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.2, y: window.innerHeight / 2 },
        { x: window.innerWidth / 2, y: window.innerHeight * 0.8 },
        { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      ],
      curviness: 1
    },
    duration: 19,
    repeat: -1,
    ease: 'none',
    onRepeat: () => {
      gsap.to(q('.particle-10'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-10'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 11: Zigzag pattern
  gsap.to(q('.particle-11'), {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: window.innerWidth * 0.2, y: window.innerHeight },
        { x: window.innerWidth * 0.4, y: 0 },
        { x: window.innerWidth * 0.6, y: window.innerHeight },
        { x: window.innerWidth * 0.8, y: 0 },
        { x: window.innerWidth, y: window.innerHeight }
      ],
      curviness: 0
    },
    duration: 24,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-11'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-11'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 12: Spiral outward
  gsap.to(q('.particle-12'), {
    motionPath: {
      path: [
        { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.6, y: window.innerHeight * 0.4 },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.6 },
        { x: window.innerWidth * 0.4, y: window.innerHeight * 0.8 },
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.2 },
        { x: window.innerWidth * 0.9, y: window.innerHeight * 0.9 },
        { x: window.innerWidth * 0.1, y: window.innerHeight * 0.1 }
      ],
      curviness: 1.5
    },
    duration: 26,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-11'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-11'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 13: Random walk
  gsap.to(q('.particle-13'), {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: 14,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-13'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-13'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 14: Wave pattern
  gsap.to(q('.particle-14'), {
    x: window.innerWidth + 100,
    y: (i) => Math.sin(i * 0.15) * window.innerHeight / 3 + window.innerHeight / 2,
    duration: 21,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-14'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-14'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 15: Diamond pattern
  gsap.to(q('.particle-15'), {
    motionPath: {
      path: [
        { x: window.innerWidth / 2, y: 0 },
        { x: window.innerWidth, y: window.innerHeight / 2 },
        { x: window.innerWidth / 2, y: window.innerHeight },
        { x: 0, y: window.innerHeight / 2 },
        { x: window.innerWidth / 2, y: 0 }
      ],
      curviness: 0.5
    },
    duration: 23,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-15'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-15'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 16: Random floating
  gsap.to(q('.particle-16'), {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: 17,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-16'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-16'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 17: S-curve
  gsap.to(q('.particle-17'), {
    motionPath: {
      path: [
        { x: 0, y: window.innerHeight / 2 },
        { x: window.innerWidth * 0.3, y: 0 },
        { x: window.innerWidth * 0.7, y: window.innerHeight },
        { x: window.innerWidth, y: window.innerHeight / 2 }
      ],
      curviness: 1.8
    },
    duration: 27,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-17'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-17'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 18: Random movement
  gsap.to(q('.particle-18'), {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: 13,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-18'), { opacity: 0, duration: 0.3, onComplete: () => {
        gsap.set(q('.particle-18'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 19: Circular sweep
  gsap.to(q('.particle-19'), {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: window.innerWidth, y: 0 },
        { x: window.innerWidth, y: window.innerHeight },
        { x: 0, y: window.innerHeight },
        { x: 0, y: 0 }
      ],
      curviness: 0.8
    },
    duration: 29,
    repeat: -1,
    ease: 'power2.inOut',
    onRepeat: () => {
      gsap.to(q('.particle-19'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-19'), { opacity: 0.8 });
      }});
    }
  });

  // Particle 20: Random floating
  gsap.to(q('.particle-20'), {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: 18,
    repeat: -1,
    ease: 'power2.inOut',
    yoyo: true,
    onComplete: () => {
      gsap.to(q('.particle-20'), { opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(q('.particle-20'), { opacity: 0.8 });
      }});
    }
  });
};
