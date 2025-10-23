// src/utils/getGreeting.js
export const getGreeting = (user, mode = "default") => {
  const name = user?.name?.split(" ")[0] || "Friend";
  const role = user?.role || "member";

  // get local time dynamically
  const now = new Date();
  const hours = now.getHours();

  // Determine the time of day
  let timePeriod = "";
  if (hours >= 5 && hours < 12) timePeriod = "morning";
  else if (hours >= 12 && hours < 17) timePeriod = "afternoon";
  else if (hours >= 17 && hours < 21) timePeriod = "evening";
  else timePeriod = "night";

  // Greeting templates by time + mood category
  const greetings = {
    morning: {
      default: [
        `Good morning, ${name}! Ready to make today count? ☀️`,
        `Morning, ${name}! Let’s conquer this day! 💪`,
        `A fresh start, ${name}. Let's make it productive! 🌄`,
      ],
      work: [
        `Rise and grind, ${name}. Time to build greatness. 🔧`,
        `Good morning, ${name}. Let's get that code flowing! 💻`,
      ],
      personal: [
        `Good morning, ${name}. Hope your coffee’s strong and your mood stronger ☕`,
        `Hi ${name}, a calm morning for a calm mind 🌤️`,
      ],
      focused: [
        `Focus mode on, ${name}. This morning is yours to own 🚀`,
        `Stay sharp, ${name}. Small wins stack up! 🧠`,
      ],
    },

    afternoon: {
      default: [
        `Good afternoon, ${name}! Keep the energy high ☀️`,
        `${name}, you’re doing amazing. Keep pushing forward 💼`,
      ],
      work: [
        `Midday momentum, ${name}! Stay locked in ⚙️`,
        `Hey ${name}, the afternoon grind continues 💪`,
      ],
      personal: [
        `Hope your lunch was great, ${name}! Stay refreshed 🥗`,
        `Hi ${name}, take a breather — balance is power 🌿`,
      ],
      focused: [
        `Laser focus on, ${name}. You’ve got this 🔥`,
        `Halfway there, ${name}. Keep executing 💯`,
      ],
    },

    evening: {
      default: [
        `Good evening, ${name}. Time to reflect and recharge 🌇`,
        `Evening, ${name}! You’ve done well today 👏`,
      ],
      work: [
        `Almost wrap-up time, ${name}. Let’s finish strong 💪`,
        `Good evening, ${name}. Tie up those last tasks 🎯`,
      ],
      personal: [
        `Relax, ${name}. You’ve earned some peace tonight 🌙`,
        `Good evening, ${name}. Time to unwind 🕯️`,
      ],
      focused: [
        `Keep your focus steady, ${name}. Success loves consistency 📈`,
        `Evening hustle, ${name}? Let’s make it count 🚀`,
      ],
    },

    night: {
      default: [
        `Late night vibes, ${name}. Don’t forget to rest 🌙`,
        `Still up, ${name}? The stars are watching ✨`,
      ],
      work: [
        `Burning the midnight oil, ${name}? Respect the grind 🔥`,
        `Working late, ${name}? Remember to pause and stretch 💻`,
      ],
      personal: [
        `Good night, ${name}. You deserve rest and peace 💤`,
        `Lights out soon, ${name}? Recharge for tomorrow 🌌`,
      ],
      focused: [
        `Night focus mode, ${name}? Impressive discipline 💡`,
        `The quiet hours are for creators like you, ${name} 🌙`,
      ],
    },
  };

  // Pick greetings based on mode (or randomize tone)
  const toneList = greetings[timePeriod][mode]
    ? greetings[timePeriod][mode]
    : greetings[timePeriod].default;

  const randomGreeting =
    toneList[Math.floor(Math.random() * toneList.length)];

  // Role customization
  if (role === "admin") {
    return randomGreeting.replace(name, `Boss ${name}`);
  }

  return randomGreeting;
};
