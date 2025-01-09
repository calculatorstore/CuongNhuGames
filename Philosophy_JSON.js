console.log("loading philosophy data")
const philosophyData = [
  {
    Tags: [],
    Name: "Three-O's Principle",
    List: [
      "Open mind",
      "Open heart",
      "Open arms"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Firsts for Friendship",
    List: [
      "Communicate",
      "Smile",
      "Care",
      "Share",
      "Forgive"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Steps to Health",
    List: [
      "Think",
      "Eat",
      "Exercise",
      "Rest",
      "Perform"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Five S's for Warmups",
    List: [
      "Safety",
      "Slowness",
      "Self-awareness",
      "Stretching",
      "Strengthening"
    ],
    Explanation: ""
  },
  {
    Tags: ["Self Defense"],
    Name: "5 A's of Self Defense",
    List: [
      "Awareness",
      "Alertness",
      "Avoidance",
      "Anticipation",
      "Action"
    ],
    Explanation: "AWARENESS is key to self defense, without it the ability to defend ourselves is wasted, ALERTNESS is a heightened state of awareness. Do you know the difference between aware and alert? Being aware and alert will allow you to AVOID or ANTICIPATE any situation before it is too late and gives you the opportunity to use the proper ACTION. The student through daily dedicated practice can trust their instinct and act with the correct response."
  },
  {
    Tags: ["Self Defense"],
    Name: "Five W's for Self Defense/5 W's to Avoid",
    List: [
      "Wrong time",
      "Wrong place",
      "Wrong people",
      "Wrong attitude",
      "Wrong techniques",
    ],
    Explanation: "To leave your home after a fight is to go out with the WRONG ATTITUDE. You end up on the streets late at night, heading somewhere at the WRONG TIME and end up at the WRONG PLACE like a bar and hang out with the WRONG PEOPLE, strangers who are drinking, and you use the WRONG TECHNIQUE by not recognizing the fact that four of the five Ws are in place and you don't leave the situation. This is a setup for a rough time."
  },
  {
    Tags: ["Self-Defense"],
    Name: "Five R's for Self Defense",
    List: [
      "Right perspective",
      "Right time",
      "Right place",
      "Right techniques",
      "Run"
    ],
    Explanation: "Having the RIGHT PERSPECTIVE means to have a clear and open mind. This allows you to trust your instinct and your action will be at the RIGHT TIME. If your action is to use martial arts techniques, you must be in the RIGHT PLACE, like stepping to the side of an attack, and deliver the RIGHT TECHNIQUE, not trying to do something impractical, and hopefully allow you the opportunity to RUN and save your life."
  },
  {
    Tags: ["Training"],
    Name: "Five P's of Achievers",
    List: [
      "Perspective",
      "Patience",
      "Perseverance",
      "Pride in accomplishment",
      "Practice 'til perfect"
    ],
    Explanation: "When you have an idea or vision of the future and formulate a plan towards that, you have a PERSPECTIVE. Any plan or vision is going to take work and time and the most important thing to have is PATIENCE. Without patience, there is no chance of follow through. To practice or work at anything worthwhile will take a measure of patience to move on in the task and PRESERVERE. To perservere is to have an accomplishment to some degree, and it is important to recognize the importance of that accomplishment and have pride in it. PRIDE IN YOUR ACCOMPLISHMENT is key to future projects and visions because sometimes we're dissatisfied or embarrassed by our work or feel it should of been better. So next time it will be better and better because PRACTICE MAKES PERFECT."
  },
  {
    Tags: ["Training"],
    Name: "Five D's of a Winner",
    List: [
      "Direction",
      "Discipline",
      "Determination",
      "Dedication",
      "Do 'til death"
    ],
    Explanation: "Any idea or vision must start with DIRECTION in the mind, a person must be able to see and visualize where or what it is they are looking for. Every event takes time and DISCIPLINE, which enables a person to develop themselves and the vision.This in turn develops a strong DETERMINATION to continue and follow through on the commitment and develop a lifelong DEDICATION. A lifelong dedication will instill this vision into the younger generations so they too will see the vision, so you DO IT TILL YOU DIE!"
  },
  {
    Tags: [],
    Name: "Five Think Rights (No Brain, No Gain)",
    List: [
      "Think simpler",
      "Think faster",
      "Think better",
      "Think deeper",
      "Think wiser"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Res's for Interrelating",
    List: [
      "Responsibility (self respect)",
      "Respect others",
      "Responsiveness",
      "Resolution",
      "Resilience"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "Five F's for Learning and Teaching",
    List: [
      "Fun",
      "Friendship",
      "Focus",
      "Fly your spirit",
      "Finish your goal"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Re's of Meditation",
    List: [
      "Relaxation",
      "Respiration",
      "Renewal / rejuvenation",
      "Reflection",
      "Realization"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Sources of Power",
    List: [
      "Mind",
      "Body",
      "Spirit",
      "Soul",
      "Ki"
    ],
    Explanation: ""
  },
  {
    Tags: [],    
    Name: "Seven Martial Arts of Influence",
    List: [
      "Shotokan",
      "Boxing",
      "Judo",
      "Aikido",
      "Wing Chun",
      "Tai Chi Chuan",
      "Vovinam"
    ],
    Explanation: ""
  },
  {
    Tags: ["Self Defense"],    
    Name: "Five Controls for Self Defense",
    List: [
      "Control area (awareness)",
      "Control yourself (fear, anger)",
      "Control attackers (strategy)",
      "Control the situation",
      "Control consequences"
    ],
    Explanation: "CONTROL THE AREA: Use Awareness to notice who and what's around you, and identify your best paths of escape. CONTROL YOURSELF: Breathe; avoid letting fear or anger take over your reactions. CONTROL THE ATTACKERS: Use verbal and physical strategies to keep them at bay, avoid being surrounded, and make it harder for them to carry out an attack. CONTROL THE SITUATION: De-escalate if you can; call for help; and if it comes to it, do whatever it takes to defend yourself. CONTROL THE CONSEQUENCES: Report every detail of what happened, to a friend or a family member, AND the authorities. Seek help in recovering from trauma."
  },
  {
    Tags: ["Self Defense"],    
    Name: "Five All's for Self Defense (3-D)",
    List: [
      "All angles",
      "All levels",
      "All techniques",
      "All situations",
      "All people"
    ],
    Explanation: "The Five Alls are the basis for 3-D applications, and a 3-dimensional approach to self defense."
  },
  {
    Tags: [],    
    Name: "Five Wins of a Winner",
    List: [
      "Over yourself",
      "Opponent's respect",
      "Third party's respect",
      "Over the situation",
      "People's hearts"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Ten Don'ts for Sparring",
    List: [
      "Angry",
      "Fearful",
      "Tense",
      "Hurried",
      "Waste energy",
      "Overconfident",
      "Distracted",
      "Pre-conceived ideas",
      "Discouraged if you lose",
      "Afraid of losing"
    ],
    Explanation: "Sparring, for some, can be a nerve-wracking or frightening part of training, at least as a beginner."
  },
  {
    Tags: [],
    Name: "Five Steps in Cuong Nhu Philosophy",
    List: [
      "Living",
      "Giving",
      "Caring",
      "Sharing",
      "Loving"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Selves",
    List: [
      "Self-acceptance / self-tolerance",
      "Self-confidence",
      "Self-esteem",
      "Self-control",
      "Selflessness"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching", "Training"],
    Name: "Eight Sources of Learning",
    List: [
      "Sensei and sempai",
      "Classmates",
      "Mirrors",
      "Books, media",
      "Tournaments",
      "Training equipment",
      "Yourself",
      "Seminars"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Five Re's for Healing",
    List: [
      "Reduce",
      "Relax",
      "Reach",
      "Reevaluate",
      "Remember"
    ],
    Explanation: "Self awareness is critical to preventing and curing injuries. Only you can feel what your body is telling you. When you realize that your body is injured, you need to REDUCE or stop the activity causing the pain. If you tell your doctor 'it hurts when I do this,' many times they'll say 'don't do that' and send you home to rest. While you should heed your doctor's advice, if you've been bitten by the martial arts bug, taking time off may not sit that well with you (pardon the pun). No work out = freak out. You need to RELAX. A little time off is not going to kill you, and if you injure yourself worse, then you'll have to take more time off than if you had just rested the original injury. To rest your injury doesn't mean you have skip class and sit at home watching Oprah. It's time to REACH OUT for some creative solutions to your dilemma. If you injured your leg, maybe it's time to work on Wing Chun, hand combos, chi sao, etc. Maybe you could just sit in the dojo and observe your class, you'd be amazed by what you learn. Maybe (for higher ranks) you could help teach the beginners or kids class. Other alternatives may include physical therapy/weight training, herbs, chiropractors, oriental medicine, etc. Ultimately, you stand a good chance of having gained a deeper understanding of whatever it is that you reached out for than if you had just hung out with Oprah. After your injury heals, you should RE-EVALUATE what caused your injury (e.g., didn't stretch properly, tried a technique beyond your level, goofing off, etc.) and REMEMBER to avoid it in the future."
  },
  {
    Tags: [],
    Name: "The Foundation for Peak Performance: Simple as ABCDE",
    List: [
      "Awareness (well prepared and planned) (right perspective, right attitude)",
      "Belief (in self and others)",
      "Commitment (to excellence)",
      "Dedication (labor of love)",
      "Enlightenment"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Five F's for Training",
    List: [
      "Fortify your body",
      "Find your own way",
      "Fly your spirit",
      "Feed your soul",
      "Flow your ki"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Five S's for Safe Training / Running",
    List: [
      "Sane - Sight",
      "Stretching",
      "Stamina",
      "Strength",
      "Speed"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training"],
    Name: "Ten C's for Successful Training / Running",
    List: [
      "Commitment",
      "Coaching",
      "Consistency",
      "Courage",
      "Conditioning",
      "Camaraderie",
      "Concentration",
      "Communication",
      "Competition with yourself",
      "Control of your body"
    ],
    Explanation: "If you want to see results, make the COMMITMENT to keep working hard no matter what. Be open to the COACHING provided by your instructors. Train with CONSISTENCY; don't skip class for questionable reasons. Have the COURAGE to try new things, take risks, make mistakes. Include CONDITIONING in your training; it will help you practice better, longer, and safer (without injuries). Find CAMARADERIE in training with your classmates, and sharing your experiences. Give all your CONCENTRATION to the task at hand when you are training. COMMUNICATE with training partners (to keep practice safe) and instructors (to get your questions answered). Rather than being in competition with your classmates, remember COMPETITION WITH YOURSELF is the best kind; strive to be better today than you were yesterday. In time, you will gain the CONTROL OVER YOUR BODY that comes with mastery of physical skills."
  },
  {
    Tags: ["Training"],
    Name: "Training / Running Relation to Other Sports",
    List: [
      "Focus (timing)",
      "Power",
      "Endurance",
      "Flexibility (conditioning)",
      "Perspective"
    ],
    Explanation: ""
  },
  {
    Tags: ["Leadership"],
    Name: "Ten 'Nesses' of Leadership",
    List: [
      "Fitness - Health",
      "Wellness - Health",
      "Assertiveness - PR",
      "Openness - PR",
      "Fairness - PR",
      "Directness - PR",
      "Oneness - Improvement",
      "Togetherness - Improvement",
      "Forgiveness - Improvement",
      "Creativeness - Improvement"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "5 Ups of Learning and Teaching",
    List: [
      "Shut Up",
      "Put Up",
      "Beat Up",
      "Keep Up",
      "Live Up"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Troubles To Avoid",
    List: [
      "Alcohol abuse",
      "Bigoted bull",
      "Cardiovascular carelessness",
      "Drug dependency",
      "Excessive ego"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Ten Stages of Growth",
    List: [
      "Nobody",
      "Learner",
      "Worker",
      "Fighter",
      "Achiever",
      "Winner",
      "Teacher",
      "Leader",
      "Thinker",
      "Philosopher",
      "Nobody"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "Five Loves of a Sensei",
    List: [
      "Teaching",
      "Sharing",
      "Students",
      "Martial arts",
      "Growth"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "Five Negatives in Teaching",
    List: [
      "Don't ridicule any student",
      "Don't make discriminatory remarks",
      "Don't push students excessively (to avoid burning them out)",
      "Don't show favoritism",
      "Don't lose your composure"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "Twelve 'Tions' for Teaching",
    List: [
      "Communication",
      "Simplification",
      "Explanation",
      "Demonstration",
      "Repetition",
      "Correction",
      "Creation",
      "Interrelation",
      "Reflection",
      "Motivation",
      "Evaluation",
      "Dedication"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Trues for Love of Life",
    List: [
      "True friendship",
      "True love",
      "True happiness",
      "True peace",
      "True freedom"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "5 Fears of Achievement",
    List: [
      "Hard work",
      "Failure",
      "Intimidation or pressure",
      "Associating with people",
      "Death"
    ],
    Explanation: ""
  }
  ,
  {
    Tags: ["Leadership"],
    Name: "5 'tions' in Leadership",
    List: [
      "Communication",
      "Education",
      "Application / Action",
      "Delegation",
      "Production"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Togethers at Annual Training",
    List: [
      "Physically we train together",
      "Socially we eat and live together",
      "Intellectually we think together",
      "Spiritually we learn, share and grow together",
      "Enjoy togetherness and harmony"
    ],
    Explanation: ""
  },
  {
    Tags: [],
    Name: "Five Saves in Wing Chun",
    List: [
      "Distance",
      "Energy",
      "Manpower",
      "Time",
      "Life"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching"],
    Name: "5 E's in Education",
    List: [
      "Expertise",
      "Eagerness",
      "Enthusiasm",
      "Enhancement",
      "Enamor"
    ],
    Explanation: ""
  },
  {
    Tags: ["Leadership"],
    Name: "5 C's for Good Communication",
    List: [
      "Clear",
      "Concise",
      "Concrete",
      "Consultative (2-way)",
      "Composed"
    ],
    Explanation: ""
  },
  {
    Tags: ["Leadership"],
    Name: "5 V 's in Poor Communication",
    List: [
      "Vague",
      "Verbose",
      "Variable",
      "Vacant",
      "Vituperative"
    ],
    Explanation: ""
  }
];
