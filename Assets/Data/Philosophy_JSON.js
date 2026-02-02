console.log("loading philosophy data")
const philosophyData = [
  {
    Tags: ["One Green"],
    Name: "Three-O's Principle",
    List: [
      "Open Mind",
      "Open Heart",
      "Open Arms"
    ],
    Explanation: "Open Mind. As in the famous Zen story about the tea master and the philosopher, you must 'empty your cup' to make way for new understanding and stimulate your thirst for learning. Do not let preconceptions cloud your ability to receive new ideas.  Open Heart. Make the effort to show understanding, caring, and compassion toward others. Dissolve your ego.  Open Arms. Reach out to take action, work and share with others, and achieve your visions for the world.  What do the Three O's have to do with martial arts? Everything! The dojo is a microcosm of society, and of daily life. In the dojo (training hall) we strive, we struggle, and we learn to depend on each other in practicing difficult skills. We must have trust and understanding with our training partners, who may be people very different from ourselves. We cannot learn without opening our minds, and we cannot practice together without learning patience and compassion for others. In turn, the skills we practice in the dojo translate into skills for work, school, and community."
  },
  {
    Tags: ["Self-Defense", "One Green"],
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
    Tags: ["Self-Defense", "One Green"],
    Name: "Five R's for Self Defense",
    List: [
      "Right Perspective",
      "Right Time",
      "Right Place",
      "Right Techniques",
      "Run"
    ],
    Explanation: "Having the RIGHT PERSPECTIVE means to have a clear and open mind. This allows you to trust your instinct and your action will be at the RIGHT TIME. If your action is to use martial arts techniques, you must be in the RIGHT PLACE, like stepping to the side of an attack, and deliver the RIGHT TECHNIQUE, not trying to do something impractical, and hopefully allow you the opportunity to RUN and save your life."
  },
  {
    Tags: ["Self-Defense", "One Green"],
    Name: "Five W's for Self Defense/5 W's to Avoid",
    List: [
      "Wrong Time",
      "Wrong Place",
      "Wrong People",
      "Wrong Attitude",
      "Wrong Techniques",
    ],
    Explanation: "To leave your home after a fight is to go out with the WRONG ATTITUDE. You end up on the streets late at night, heading somewhere at the WRONG TIME and end up at the WRONG PLACE like a bar and hang out with the WRONG PEOPLE, strangers who are drinking, and you use the WRONG TECHNIQUE by not recognizing the fact that four of the five Ws are in place and you don't leave the situation. This is a setup for a rough time."
  },
  {
    Tags: ["Self-Defense", "Green Belt"],    
    Name: "Five Controls for Self Defense",
    List: [
      "Control the Area",
      "Control Yourself",
      "Control Attackers",
      "Control the Situation",
      "Control the Consequences"
    ],
    Explanation: "CONTROL THE AREA: Use Awareness to notice who and what's around you, and identify your best paths of escape. CONTROL YOURSELF: Breathe; avoid letting fear or anger take over your reactions. CONTROL THE ATTACKERS: Use verbal and physical strategies to keep them at bay, avoid being surrounded, and make it harder for them to carry out an attack. CONTROL THE SITUATION: De-escalate if you can; call for help; and if it comes to it, do whatever it takes to defend yourself. CONTROL THE CONSEQUENCES: Report every detail of what happened, to a friend or a family member, AND the authorities. Seek help in recovering from trauma."
  },
  {
    Tags: ["Self-Defense", "Green Belt"],    
    Name: "Five All's for Self Defense (3-D)",
    List: [
      "All Angles",
      "All Levels",
      "All Techniques",
      "All Situations",
      "All People"
    ],
    Explanation: "The Five Alls are the basis for 3-D applications, and a 3-dimensional approach to self defense."
  },
  {
    Tags: ["Training", "Two Green"],
    Name: "Five P's of Achievers",
    List: [
      "Perspective",
      "Patience",
      "Perseverance",
      "Pride in Accomplishment",
      "Practice Until Perfect"
    ],
    Explanation: "When you have an idea or vision of the future and formulate a plan towards that, you have a PERSPECTIVE. Any plan or vision is going to take work and time and the most important thing to have is PATIENCE. Without patience, there is no chance of follow through. To practice or work at anything worthwhile will take a measure of patience to move on in the task and PRESERVERE. To perservere is to have an accomplishment to some degree, and it is important to recognize the importance of that accomplishment and have pride in it. PRIDE IN YOUR ACCOMPLISHMENT is key to future projects and visions because sometimes we're dissatisfied or embarrassed by our work or feel it should of been better. So next time it will be better and better because PRACTICE MAKES PERFECT."
  },
  {
    Tags: ["Training", "Two Green"],
    Name: "Five D's of a Winner",
    List: [
      "Direction",
      "Discipline",
      "Determination",
      "Dedication",
      "Do it Until you Die"
    ],
    Explanation: "Any idea or vision must start with DIRECTION in the mind, a person must be able to see and visualize where or what it is they are looking for. Every event takes time and DISCIPLINE, which enables a person to develop themselves and the vision.This in turn develops a strong DETERMINATION to continue and follow through on the commitment and develop a lifelong DEDICATION. A lifelong dedication will instill this vision into the younger generations so they too will see the vision, so you DO IT TILL YOU DIE!"
  },
  {
    Tags: ["Training", "Two Brown"],
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
      "Competition with Yourself",
      "Control of Your Body"
    ],
    Explanation: "If you want to see results, make the COMMITMENT to keep working hard no matter what. Be open to the COACHING provided by your instructors. Train with CONSISTENCY; don't skip class for questionable reasons. Have the COURAGE to try new things, take risks, make mistakes. Include CONDITIONING in your training; it will help you practice better, longer, and safer (without injuries). Find CAMARADERIE in training with your classmates, and sharing your experiences. Give all your CONCENTRATION to the task at hand when you are training. COMMUNICATE with training partners (to keep practice safe) and instructors (to get your questions answered). Rather than being in competition with your classmates, remember COMPETITION WITH YOURSELF is the best kind; strive to be better today than you were yesterday. In time, you will gain the CONTROL OVER YOUR BODY that comes with mastery of physical skills."
  },
  {
    Tags: ["Training", "Green Belt"],
    Name: "Ten Don'ts for Sparring",
    List: [
      "Angry",
      "Fearful",
      "Tense",
      "Hurried",
      "Waste energy",
      "Overconfident",
      "Distracted",
      "Pre-conceived Ideas",
      "Discouraged if You Lose",
      "Afraid of Losing"
    ],
    Explanation: "Sparring, for some, can be a nerve-wracking or frightening part of training, at least as a beginner."
  },
  {
    Tags: ["Training", "One Green"],
    Name: "Five S's for Warmups",
    List: [
      "Safety",
      "Slowness",
      "Self-Awareness",
      "Stretching",
      "Strengthening"
    ],
    Explanation: ""
  },
  {
    Tags: ["Training", "Green Belt"],
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
    Tags: ["Teaching", "Training", "One Brown"],
    Name: "Eight Sources of Learning",
    List: [
      "Sensei and Sempai",
      "Classmates",
      "Mirrors",
      "Books and Media",
      "Tournaments",
      "Training equipment",
      "Yourself",
      "Seminars"
    ],
    Explanation: ""
  },

  {
    Tags: ["Teaching", "One Black"],
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
    Tags: ["Leadership", "Black Belt"],
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
    Tags: ["Leadership", "Shodan"],
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
    Tags: ["Leadership", "Shodan"],
    Name: "5 V's in Poor Communication",
    List: [
      "Vague",
      "Verbose",
      "Variable",
      "Vacant",
      "Vituperative"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching", "Two Green"],
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
    Tags: ["Teaching", "One Black"],
    Name: "Five Negatives in Teaching",
    List: [
      "Don't ridicule any student",
      "Don't make discriminatory remarks",
      "Don't push students excessively",
      "Don't show favoritism",
      "Don't lose your composure"
    ],
    Explanation: ""
  },
  {
    Tags: ["Teaching", "Two Black"],
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
    Tags: ["Leadership", "Brown Belt"],
    Name: "Ten 'Nesses' of Leadership",
    List: [
      "Fitness",
      "Wellness",
      "Assertiveness",
      "Openness",
      "Fairness",
      "Directness",
      "Oneness",
      "Togetherness",
      "Forgiveness",
      "Creativeness"
    ],
    Explanation: ""
  },


  {
    Tags: ["Martial Arts"],
    Name: "Five Sources of Power",
    List: [
      "Mind",
      "Body",
      "Spirit",
      "Soul",
      "Ki"
    ],
    Explanation: "MIND: The mind is a very important source of power. You may have a lot of body strength, but if you doubt your ability, then you will have a hard time achieving your goal. Your positive attitude and belief that you can accomplish your goal will help you to realize it. 'Mind over matter' or 'Accomplishing the goal by a force of will' are some phrases that describe the power of the mind. BODY: Your body is an obvious source of power and strength. You can become stronger through body conditioning, weight training, and stamina-oriented exercises. SPIRIT: 'The power of a positive attitude' refers to one's spirit. If you approach things with enthusiasm and focus, you can accomplish many goals. You can also share your good spirit with others and better develop teamwork. Even when things are not going well, a strong spirit can help one overcome many obstacles. SOUL: The soul is the very private and personal essence of one's being. While the spirit is an outward expression of power and energy, the soul is an internal source of strength. Your ethics and system of principles lie within your soul, and by making decisions and facing challenges from your center of good principles, you can feel confident that you are taking the best path for you. 'A kind heart' makes reference to that person's soul and inner being. KI: Ki, Chi, and Qi refer to one's internal energy. By concentrating and focusing on relaxing the body and 'flowing' the ki, one can express power greater than 'normal' body strength. This expression of power is demonstrated by 'superhuman' acts, such as lifting a car that has rolled onto someone."
  },
  {
    Tags: ["Martial Arts", "One Black"],
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
    Explanation: "Every learning process starts as a clean slate, an empty cup. A NOBODY begins by being a LEARNER. Any learning process takes time and hard work, thus one becomes a WORKER. When you work at something and really want it you will fight for it, evolving into a FIGHTER and when you fight for something you will be an ACHIEVER by definition, and to achieve is to be a WINNER. When you're a winner you teach others to win also and you evolve into a TEACHER. A good teacher will naturally be a LEADER and blaze the path for others. A leader must plan and understand therefore becoming a THINKER and in essence a thinker begins to understand with more depth and understanding without ego,thus evolving into a PHILOSOPHER which is like evolving the ego from a liquid state to a gas,which can take on all shapes and situations. This egoless state is enlightenment, 'the greatest person is NOBODY.'"
  },
  {
    Tags: ["Martial Arts", "One Brown"],
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
    Tags: ["Martial Arts", "Green Belt"],    
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
    Tags: ["Martial Arts", "Shodan"],
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
    Tags: ["Martial Arts", "Green Belt"],    
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
    Explanation: "A brief history and philosophy of the Seven Styles:  Tai Chi Chuan, the Ultimate Fist, was developed in the 1200's in China by a Taoist, Chang San Feng, who had studied Tao Yin, a Chinese breathing art. Tai Chi has had a strong influence on Cuong Nhu's soft style principles. Wing Chun Kung Fu was developed in the 1700's at the Southern Shaolin Temple in China to defend against the occupying Manchurians, but they burned the temple before the style could be taught. Abbess Ng Mui escaped and taught the style to Yim Wing Chun, whose name means 'Beautiful Springtime,' for whom the style now takes its name. It is designed to maximize effectiveness for smaller, weaker fighters vs. larger, stronger opponents. Kodokan Judo was founded by a Ju-Jitsu Master named Jigoro Kano in Japan in 1882. Kano wished to popularize his art by eliminating the more dangerous jujitsu techniques and promoting his art as a 'martial sport.' Judo was taught in Japanese schools, so Kano developed the colored belt system to motivate the kids. Shotokan Karate is a style of Okinawan Karate developed by Gichen Funakoshi. In 1922 he introduced the art to Japan where it became very popular. Karate originally meant 'Chinese hand,' reflecting the origins of the art, but Funakoshi changed the name to mean 'empty hand,' connecting it to Zen philosophy. Aikido was founded by an Aiki-Jujitsu master named Morihei Uyeshiba in Japan in 1938. Aikido, or 'the Way of Harmonizing Internal Energy (or Spirit)', specializes in joining with your opponent's energy and then using that energy against them. Vovinam shows the influence of Chinese kung fu blended with indigenous Vietnamese arts and training methods. In 1946, Grandmaster Nguyen Loc systematized the many styles of Vietnamese martial arts, calling the resulting art Vovinam (meaning 'martial arts of Vietnam'). The name was later changed to Viet Vo Dao, meaning The Way of Vietnamese Martial Arts. Cuong Nhu gets its animal techniques and Code of Ethics from Vovinam. The martial arts were indigenous to Europe as well as Asia. In 1719, James Figg opened a school in London that taught bare-fist boxing as well as various weapons systems such as the staff and cudgel. Western Boxing, with its agile footwork and effective hand techniques, brings yet another dimension to Cuong Nhu."
  },
  {
    Tags: ["One Green"],
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
    Tags: ["One Green"],
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
    Tags: ["Two Green"],
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
    Tags: ["Two Green"],
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
    Tags: ["Two Green"],
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
    Tags: ["One Brown"],
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
    Tags: ["One Brown"],
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
    Tags: ["Training", "Two Brown"],
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
    Tags: ["Training", "Two Brown"],
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
    Tags: ["Training", "Two Brown"],
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
    Tags: ["Teaching", "Brown Belt"],
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
    Tags: ["Brown Belt"],
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
    Tags: ["Two Black"],
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
    Tags: ["Black Belt"],
    Name: "5 Fears of Achievement",
    List: [
      "Hard work",
      "Failure",
      "Intimidation or pressure",
      "Associating with people",
      "Death"
    ],
    Explanation: ""
  },
  {
    Tags: ["Black Belt"],
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
    Tags: ["Teaching", "Shodan"],
    Name: "5 E's in Education",
    List: [
      "Expertise",
      "Eagerness",
      "Enthusiasm",
      "Enhancement",
      "Enamor"
    ],
    Explanation: ""
  }
];
