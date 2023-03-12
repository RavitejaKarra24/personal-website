const quotes = [
    {
      quote: "Get out and do some gardening.",
      key : 1
    },
    {
      quote:
        "Slow down and take in the world around you. Try people watching out the window.",
    },
    {
      quote:
        "Reflect on something that made you feel happy in the last 24 hours.",
    },
    {
      quote:
        "Ban screen time in the bedroom between certain hours to avoid scrolling before bed and when you wake up.",
    },
    {
      quote:
        "Log off your phone at least 40 minutes before bed to allow your brain to switch off and get a better night's sleep.",
    },
    {
      quote:
        "Practice meditation. Breathing in through your nose and out through your mouth - focusing on your breath.",
    },
    {
      quote:
        "Smart device curfew. Set times when digital devices should not be used. Try meditating, contemplate and switch off.",
    },
    {
      quote: "Write down your goals for the next year, 5 years and 10 years.",
    },
    {
      quote: "Set internet-free hours and spaces.",
    },
    {
      quote:
        "Turn off notifications for certain apps or turn off your phone entirely for a while.",
    },
    {
      quote:
        "Have a notification-free day. Constant notifications can distract you from completing a task or relaxing. It seems daunting, but start by giving it a go for set hours. ",
    },
    {
      quote:
        "Ping-athon. Turn off the sound on notifications. This could be the first step to your digital detox.",
    },
    {
      quote: "Commit to one day a month as tech-free.",
    },
    {
      quote:
        "Write down a list of 10 things that you are grateful for that day. Try this for the last week or the last month too.",
    },
    {
      quote:
        "Spend some time drawing and being creative. Even if you just own a pen, you can be artistic.",
    },
    {
      quote:
        "People enjoy helping others. The internet has made us stop asking people for help or advice. Next time ask someone.",
    },
    {
      quote:
        "Head out into nature. Go to the beach, woods, river, lake and just listen to the sounds around you.",
    },
    {
      quote:
        "Spend time in the kitchen making something from scratch that you usually wouldn't. It could be pastry, pasta or bread.",
    },
    {
      quote:
        "Do some sewing, knitting or crochet. The repetitive nature will help reduce stress and anxiety.",
    },
    {
      quote: "Have a go at calligraphy or creating a fun handwriting style.",
    },
    {
      quote:
        "Mindful colouring lets you rest your brain and allows you to unwind.",
    },
    {
      quote:
        "Ban technology from the bathroom. Enjoy a soak in the bath without your phone nearby.",
    },
    {
      quote:
        "Swap your E-book for a proper book. How great is it to turn the pages.",
    },
    {
      quote: "Clear your mind. Get outside and go for a walk in the rain.",
    },
    {
      quote: "Take yourself off for some me-time. Get a manicure or pedicure.",
    },
    {
      quote: "Take a break and water your house plants.",
    },
    {
      quote:
        "When spending time with someone, be present. Avoid splitting your attention with your phone.",
    },
    {
      quote: "Light a candle and cuddle up with a good book.",
    },
    {
      quote: "Go on a picnic with a friend or family member.",
    },
    {
      quote:
        "Switch on flight mode. It's an excellent way to start small. This will help relax, focus, and resist temptation to scroll through social media.",
    },
    {
      quote:
        "Have a few areas of the house where technology is off-limits. Enjoy the moment of spending quality time with people. Set times to start with, to get used to this.",
    },
    {
      quote:
        "Instead of using your phone to navigate, try going on a walk and enjoy wandering and exploring.",
    },
    {
      quote:
        "Walk to the shop to buy a magazine instead of reading the news and gossip online.",
    },
    {
      quote: "Work up a sweat and try a new workout.",
    },
    {
      quote:
        "Go cloud spotting. Watch the clouds and see what shapes you can see.",
    },
    {
      quote:
        "On your next walk, take in your surroundings instead of looking at your phone. What do you notice when you look up and around that you haven't seen before?",
    },
    {
      quote: "Try something mindful, such as yoga, meditation or visualization.",
    },
    {
      quote: "Dust off your apron and bake a cake.",
    },
    {
      quote: "Start and complete a jigsaw puzzle. Try 1000 pieces or more.",
    },
    {
      quote:
        "Set yourself a mini task list before you are allowed any screen time. For example 3 chores before you look at your phone.",
    },
    {
      quote: "Try and recreate your favourite takeaway meal.",
    },
    {
      quote: "Play a board game with friends or family.",
    },
    {
      quote: "Play a card game with friends or family.",
    },
    {
      quote:
        "Screen free activities: Organize a cupboard or spare room and get a great sense of job satisfaction.",
    },
    {
      quote:
        "If you have trouble putting down your phone, try storing it in another room to discourage yourself from using it. ",
    },
    {
      quote: "Go for a walk when you are tempted to use your device.",
    },
    {
      quote:
        "Keep a journal to track your digital detox progress and write down your thoughts about your experience.",
    },
    {
      quote:
        "Try not to spend your breaks watching videos or scrolling on your phone. Instead go for a short walk, wash your mug, make a tea, look out the window, etc.",
    },
    {
      quote:
        "Go out after work if you didn't manage to go out during your work break.",
    },
    {
      quote:
        "Engage in nature activities like hiking, biking, camping or playing adventure games with friends, so that you will lose track of time and won't feel the urge to check your phone every five minutes.",
    },
    {
      quote:
        "Instead of scrolling, do something more productive and educational. Bring a book with you everywhere you go to fill the dead times.",
    },
    {
      quote:
        "Buy a real alarm clock. Estimated 80% of smart phone users wake up and check their mobile phone first thing in the morning. Take time and wake up without looking at your phone.",
    },
    {
      quote:
        "Take a technology free trip - a family or friend trip where there is no or minimal usage of your smart phone. Connect with friends, family and the outdoors.",
    },
    {
      quote:
        "Pick up a pen and paper. Explore sending cards, letters and leaving hand written notes.",
    },
    {
      quote:
        "Screen free activities: Cook something for your family and friends - use a cookbook or an old family recipe. ",
    },
    {
      quote:
        "Screen free activities: Go for a walk and see what animals you can see.",
    },
    {
      quote: "Screen free activities: Get lost in a book.",
    },
    {
      quote:
        "Track the amount of times you pick up your phone in a day - you will be surprised! Do this activity again in a week to see if it's less. ",
    },
    {
      quote:
        "Unsubscribe from unwanted emails. Less email notifications equals less digital distractions.",
    },
    {
      quote:
        "Let your friends and family know that you are on a digital detox and ask for their help and support.",
    },
    {
      quote:
        "Convert to black and white. One reason our devices are so alluring is that they're vibrant. Many smart phones now allow you to change the settings so that the entire phone appears in gray scale.",
    },
    {
      quote:
        "Take your work email off your phone (notify everyone in advance that you're doing this).",
    },
    {
      quote: "Have a proper conversation catching up with an old friend.",
    },
    {
      quote:
        "Set email preferences to receive emails hourly instead of as they happen.",
    },
    {
      quote: "Set a timer to remind you to check your emails once an hour.",
    },
    {
      quote:
        "An old-fashioned watch will give you one less reason to constantly check your phone.",
    },
    {
      quote:
        "Take a digital detox with someone else - you can encourage each other to keep going and plan activities together.",
    },
    {
      quote: "Take yourself on a shopping trip.",
    },
    {
      quote: "Visit a new restaurant.",
    },
    {
      quote: "Brainstorm some new ideas and thoughts.",
    },
    {
      quote:
        "Spend time in places where mobile phone use is frowned upon: Yoga class, group meditation, crafting groups.",
    },
    {
      quote: "Screen free activities: Try a new hobby or get lost in an old one.",
    },
    {
      quote: "Put away your phone during meals.",
    },
    {
      quote: "Do something fun that you remember from your childhood.",
    },
    {
      quote:
        "Practice not responding immediately to every notification, set time aside to go back on these.",
    },
    {
      quote:
        "Make time for periods of digital detox and write them down as you would any other appointment.",
    },
    {
      quote:
        "Make yourself a home spa and give yourself a pamper, why not try a facial.",
    },
    {
      quote: "Experiment with your look, try something new with your hair.",
    },
    {
      quote: "Listen to your favorite song.",
    },
    {
      quote: "Get up and dance like nobody is watching.",
    },
    {
      quote: "Rearrange an area in your home, try creating a cozy corner.",
    },
    {
      quote: "Take yourself on a solo date or staycation.",
    },
    {
      quote: "Plant some flowers in your garden or a window box.",
    },
    {
      quote:
        "Why not try and learn a few words and phrases from another language.",
    },
    {
      quote: "Spring clean and tidy your home.",
    },
    {
      quote: "Start a new DIY project.",
    },
    {
      quote: "Have a slow, relaxing morning.",
    },
    {
      quote:
        "Sort through your clothes and set aside some items to donate to charity.",
    },
    {
      quote:
        "Look through old photographs and sort some pictures to hang on the wall.",
    },
    {
      quote:
        "Take a walk along the beach or through the woods and hunt for natural treasures.",
    },
    {
      quote:
        "Remove yourself from online groups that you don't need to be in, so you get less notifications.",
    },
    {
      quote:
        "Listen to the radio in your spare time rather than scrolling on your phone or watching telly.",
    },
    {
      quote: "Plan a holiday so you have something nice to look forward to.",
    },
    {
      quote:
        "Star gaze. Observe the stars and the moon, you might see a shooting star!",
    },
    {
      quote:
        "Try and think back to your very first memory, where were you, who you were with and how did you feel?",
    },
    {
      quote:
        "Have a power nap. Research shows that a quick break can stop our brains from being overwhelmed.",
    },
    {
      quote: "Organize and de-clutter your desktop and folders.",
    },
    {
      quote: "Challenge yourself to 24 hours tech free.",
    },
    {
      quote: "Try drawing a selfie instead of snapping one.",
    },
    {
      quote: "Write down some words that best describe you and your loved ones.",
    },
  ];

