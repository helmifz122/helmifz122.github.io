const animationTimeline = () => {
    // split chars that need to be animated individually
    const textBoxChars = document.querySelector(".hbd-chatbox");
    const hbd = document.querySelector(".wish-hbd");
  
    textBoxChars.innerHTML = `<span>${textBoxChars.textContent
      .split("")
      .join("</span><span>")}</span>`;
  
    hbd.innerHTML = `<span>${hbd.textContent
      .split("")
      .join("</span><span>")}</span>`;
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };
  
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };
  
    // timeline
    const tl = gsap.timeline();
  
    tl.to(".container", { visibility: "visible" })
      .from(".one", { opacity: 0, y: 10, duration: 0.7 })
      .from(".two", { opacity: 0, y: 10, duration: 0.4 })
      .to(
        ".one",
        { opacity: 0, y: 10, duration: 0.7 },
        "+=3.5"
      )
      .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
      .from(".three", { opacity: 0, y: 10, duration: 0.7 })
      .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")
      .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 })
      .from(".fake-btn", { scale: 0.2, opacity: 0, duration: 0.3 })
      .staggerTo(
        ".hbd-chatbox span",
        1.5,
        {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", { backgroundColor: "rgb(127, 206, 248)", duration: 0.1 }, "+=4")
      .to(
        ".four",
        { scale: 0.2, opacity: 0, y: -150, duration: 0.5 },
        "+=1"
      )
      .from(".idea-1", ideaTextTrans)
      .to(".idea-1", ideaTextTransLeave, "+=2.5")
      .from(".idea-2", ideaTextTrans)
      .to(".idea-2", ideaTextTransLeave, "+=2.5")
      .from(".idea-3", ideaTextTrans)
      .to(".idea-3 strong", {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
        duration: 0.5,
      })
      .to(".idea-3", ideaTextTransLeave, "+=2.5")
      .from(".idea-4", ideaTextTrans)
      .to(".idea-4", ideaTextTransLeave, "+=2.5")
      .from(
        ".idea-5",
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
          duration: 0.7,
        },
        "+=1.5"
      )
      .to(
        ".idea-5 span",
        {
          rotation: 90,
          x: 8,
          duration: 0.7,
        },
        "+=1.4"
      )
      .to(
        ".idea-5",
        {
          scale: 0.2,
          opacity: 0,
          duration: 0.7,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
      )
      .staggerFromTo(
        ".baloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400,
        },
        {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".profile-picture",
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
          duration: 0.5,
        },
        "-=2"
      )
      .from(".hat", {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
        duration: 0.5,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7,
        {
          scale: 1.4,
          rotationY: 150,
        },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
          duration: 0.5,
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5,
        {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )
      .to(".six", {
        opacity: 0,
        y: 30,
        zIndex: "-1",
        duration: 0.5,
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        {
          rotation: 90,
          duration: 0.5,
        },
        "+=1"
      );
  
    // Restart Animation on click
    const replayBtn = document.getElementById("replay");
    replayBtn.addEventListener("click", () => {
      tl.restart();
    });
  };
  
  animationTimeline();