//for css/html tied to js elements
//https://happycoding.io/tutorials/p5js/web-dev

//for github pages
//https://www.youtube.com/watch?v=x_i9Rg3Ki54

//TODO - HAVE TOs
//alt text adlibs 

//LIKE TOs
//animated || dissolving loading screens
//loading screen fade to white

let imageData;
let rw = new p5.TableRow();
let tableCount;

let rwRage = new p5.TableRow();
let rwHysteria = new p5.TableRow();
let rwDespair = new p5.TableRow();

let ayeMash;
let beeMash;
let ceeMash;

let imageIndex;
let imageIndex1;
let imageIndex2;

let rageFilm;
let hysteriaFilm;
let despairFilm;
let loadingFilm;

let rageText = [5];
let hysteriaText = [5];
let despairText = [7];

let phaseNum = 0;

let primSubjects = [
  "Astronaut",
  "Technology",
  "Monsters",
  "Dismembered Body Parts",
  "Food",
  "Location",
  "Destruction",
];

let colours = ["Multi", "BW + 1", "BW", "2 colours"];

let space = ["Balanced", "Packed", "Open"];

let shiannMotifs = [
  "eyes",
  "melting",
  "slime",
  "teeth",
  "faceless features",
  "machines",
  "null",
];

let shapeForm = ["fluid", "geometric", "closed shape", "fragmented"];

let fname;
let lname;
let needsMet;
let needsNotMet;
let enneaPositive;
let enneaFin;
let bigFive;
let enneaConst;
let diff = [5];
let mashA;
let mashB;
let mashC;

let saved;
let typing;
let nameEntered = false;

let aa;
let ab;
let ba;
let bb;

let fnt;

let typeMenu = false;
let typeExist = false;

let abcPhonic;
let bin = "";

let m; //timer
let loadingX;

let doneLoading = false;
let loadingText;

let notSavedRage = true;
let notSavedHysteria = true;
let notSavedDespair = true;

let loadingMusic;
let clickFX;
let keyFX;
let keyFX_2;
let keyFX_3;
let keyFX_4;
let openMusic;

let desPick = 0;
let hysPick = 0;
let ragePick =0;

function preload() {
  imageData = loadTable(
    "Nias_RTA82A_DataBase - DATABASEv3.csv",
    "csv",
    "header"
  );

  fnt = loadFont("Pixel Emulator.otf");

  soundFormats("wav");
  loadingMusic = loadSound("itsBroken.wav");
  openMusic = loadSound("Scanner-Electronic-Bell-with-Random-Distortion-Spikes_COMM-1532.wav");
  clickFX = loadSound("compClick.wav");
  keyFX = loadSound("ElectronicBeep PS01_63_1.wav");
  keyFX_2 = loadSound("ElectronicBeep PS01_64_1.wav");
  keyFX_3 = loadSound("ElectronicBeep PS01_65_1.wav");
  keyFX_4 = loadSound("ComputerKeyboardH IE03_30_1.wav");
  
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);

  loadingX = width / 100;

  tableCount = imageData.getRowCount();

  typing = "";
  
  loadingFilm = createVideo("loadingMovie_fin.mp4");
}

function draw() {
  
  background(0);
  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height);

  if (typeMenu == true) {
    stroke(0); //
    fill(255); //
    rectMode(CENTER);
    rect(width / 2, height / 2, width / 2, 40); //
    
    smooth();
    fill(255);
    textSize(20);
    text("Type Your Name", width / 2, height / 2 + 50);
    text("ex. Billy [SPACE] Smith", width / 2, height / 2 + 80);
    text("When Your Done, hit ENTER", width / 2, height / 2 + 110);
    text("& then Click", width / 2, height / 2 + 140);

    textAlign(LEFT); //
    textFont(fnt); //
    strokeWeight(0);
    textSize(15);
    fill(0); //
    text(typing, width / 3 - 50, height / 2); //
  }

  if (phaseNum == 3) {
    if (loadingX < width / 2) {
      loadingX+= 0.7;
      print("\n");
      print(loadingX);
      doneLoading = false;
      loadingText = "Loading...";
    } else {
      doneLoading = true;
      loadingText = "Done. Click to Reveal.";
      phaseNum++;
    }
  }

  menuPicker(); //mpve to mouse event
}

function displayText(arry, c) {
  textFont(fnt);
  textSize(20);
  colorMode(HSB, 360, 100, 100);

  let x = 30;

  for (let i = 0; i < arry.length; i++) {
    if (
      (saturation(c) > 35 && brightness(c) < 80) ||
      (saturation(c) == 0 && brightness(c) == 0)
    ) {
      fill(360, 0, 100); //white text
    } else {
      fill(0, 0, 0); //black text
    }

    text(arry[i], 15, height / 2 + x);

    x += 50; //15 = single space
  }
}

function ayePath(aa, ab, ba, bb) {
  print("\n");
  print("AYE PATH");
  enneaConst = 0;

  if (aa == "b" || aa == "l" || aa == "u") {
    //first name, first l
    needsMet = "excited";
  } else if (aa == "c" || aa == "m" || aa == "v") {
    needsMet = "engaged";
  } else if (aa == "d" || aa == "n" || aa == "w") {
    needsMet = "peaceful";
  } else if (aa == "e" || aa == "o" || aa == "x") {
    needsMet = "affectionate";
  } else if (aa == "f" || aa == "p" || aa == "y") {
    needsMet = "joyful";
  } else if (aa == "g" || aa == "q" || aa == "z") {
    needsMet = "exhilarated";
  } else if (aa == "h" || aa == "r" || aa == "a") {
    needsMet = "confident";
  } else if (aa == "i" || aa == "s" || aa == "j") {
    needsMet = "refresed";
  } else if (aa == "k" || aa == "t") {
    needsMet = "hopeful";
  }

  if (ab == "b" || ab == "l" || ab == "u") {
    //first name, last l
    enneaPositive = "enthusiast";
  } else if (ab == "c" || ab == "m" || ab == "v") {
    enneaPositive = "healer";
  } else if (ab == "d" || ab == "n" || ab == "w") {
    enneaPositive = "peacemaker";
  } else if (ab == "e" || ab == "o" || ab == "x") {
    enneaPositive = "loyalist";
  } else if (ab == "f" || ab == "p" || ab == "y") {
    enneaPositive = "acheiver";
  } else if (ab == "g" || ab == "q" || ab == "z") {
    enneaPositive = "reformer";
  } else if (ab == "h" || ab == "r" || ab == "a") {
    enneaPositive = "challenger";
  } else if (ab == "i" || ab == "s" || ab == "j") {
    enneaPositive = "individualist";
  } else if (ab == "k" || ab == "t") {
    enneaPositive = "investigator";
  }

  if (ba == "b" || ba == "l" || ba == "u") {
    //last name, first l
    needsNotMet = "fatigued";
  } else if (ba == "c" || ba == "m" || ba == "v") {
    needsNotMet = "disconnected";
  } else if (ba == "d" || ba == "n" || ba == "w") {
    needsNotMet = "tense";
  } else if (ba == "e" || ba == "o" || ba == "x") {
    needsNotMet = "averse";
  } else if (ba == "f" || ba == "p" || ba == "y") {
    needsNotMet = "pained";
  } else if (ba == "g" || ba == "q" || ba == "z") {
    needsNotMet = "embarrassed";
  } else if (ba == "h" || ba == "r" || ba == "a") {
    needsNotMet = "afraid";
  } else if (ba == "i" || ba == "s" || ba == "j") {
    needsNotMet = "confused";
  } else if (ba == "k" || ba == "t") {
    needsNotMet = "sad";
  }

  if (bb == "b" || bb == "l" || bb == "u") {
    //last name, last l
    enneaNegative = "evil nurse";
  } else if (bb == "c" || bb == "m" || bb == "v") {
    enneaNegative = "psycho killer";
  } else if (bb == "d" || bb == "n" || bb == "w") {
    enneaNegative = "paranoiac";
  } else if (bb == "e" || bb == "o" || bb == "x") {
    enneaNegative = "vigilante";
  } else if (bb == "f" || bb == "p" || bb == "y") {
    enneaNegative = "tyrant";
  } else if (bb == "g" || bb == "q" || bb == "z") {
    enneaNegative = "accomplice";
  } else if (bb == "h" || bb == "r" || bb == "a") {
    enneaNegative = "party animal";
  } else if (bb == "i" || bb == "s" || bb == "j") {
    enneaNegative = "mad scientist";
  } else if (bb == "k" || bb == "t") {
    enneaNegative = "tortured soul";
  }

  let diceRoll = round(random(1, 6));
  print("\n");
  print("dice: " + diceRoll);

  switch (diceRoll) {
    case 1:
      enneaFin = needsMet + " " + enneaPositive;
      break;

    case 2:
      enneaFin = needsMet + " " + enneaNegative;
      break;

    case 3:
      enneaFin = needsNotMet + " " + enneaPositive;
      break;

    case 4:
      enneaFin = needsNotMet + " " + enneaNegative;
      break;

    case 5:
      enneaFin = "null";
      break;

    case 6:
      enneaFin = "lunn";
      break;
  }

  print("\n");
  print(enneaFin);
  print(enneaFin.length);

  let ocean = [
    "openess",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism",
  ];

  let oceanConst = [4, 10, 7, 5, 6];

  for (let i = 0; i < enneaFin.length; i++) {
    //counting constanants
    let x = enneaFin.charAt(i);
    if (x != "a" && x != "e" && x != "i" && x != "o" && x != "u") {
      enneaConst++;
    }
  }

  print("\n");
  print("number of constanants: " + enneaConst);

  let match = 11;
  let matchIndex = -9;

  for (let i = 0; i < 5; i++) {
    if (enneaConst > oceanConst[i]) {
      diff[i] = enneaConst - oceanConst[i];
    } else if (enneaConst < oceanConst[i]) {
      diff[i] = oceanConst[i] - enneaConst;
    } else {
      diff[i] = 0;
    }

    print("difference @ " + i + ":" + diff[i]);
  }

  for (let i = 0; i < 5; i++) {
    print("\n");
    print("Round: " + i);
    if (diff[i] < match) {
      //RESOLVED :D!
      match = diff[i];
      matchIndex = i;
    }
    print("\n");
    print("the index of the min: " + matchIndex);
  }

  mashA = matchIndex;

  return mashA;
}

function beePath(aa, ba) {
  print("\n");
  print("BEE PATH");

  //Jungian archetype
  let archs = [
    "Everyman",
    "Ruler",
    "Outlaw",
    "Sage",
    "Lover",
    "Hero",
    "Artist",
    "Explorer",
    "Jester",
    "Caregiver",
    "Magician",
    "Innocent",
  ];

  //corresponding color codes in hex
  let colorCodes = [
    "#DF0B5D",
    "#F45255",
    "#EB6D00",
    "#FFAA00",
    "#F1D30E",
    "#46D129",
    "#3CBE72",
    "#4EA798",
    "#28BBFF",
    "#178DE8",
    "#385BAD",
    "#A4469E",
  ];
  let colorCode;

  let jungian;

  //numerology values of first letter of 1st and last name
  let x = setVal(aa);
  let y = setVal(ba);

  print("\n");
  print("1: " + x);
  print("\n");
  print("2: " + y);

  let n;
  let numerology = x + y;

  //initial numerology value
  print("\n");
  print("numerology # : " + numerology);

  //reducing number to a number btwn 1-12
  if (
    numerology > 10 &&
    numerology != 10 &&
    numerology != 11 &&
    numerology != 12
  ) {
    n = str(numerology);

    let digits = split(n, "");

    let digit1 = int(digits[0]);
    let digit2 = int(digits[1]);

    numerology = digit1 + digit2;

    print("\n");
    print("New Numerology #: " + numerology); //final numerology value
  }

  //finding the corresponding archetype
  if (numerology != 0) {
    jungian = archs[numerology - 1];
  } else {
    jungian = archs[archs.length - 1];
  }

  print("\n");
  print("Jungian Archetype : " + jungian);

  //converting first name, first letter into its decimal value
  print("\n");
  print("orignal aa: " + aa);
  print("aa as a decimal: " + unchar(aa));

  //if letter is first letter of first name is between a - m
  if (unchar(aa) <= 109) {
    if (
      numerology != colorCodes.length &&
      numerology + 1 != colorCodes.length
    ) {
      //find the complimetary colour (next one)
      colorCode = colorCodes[numerology + 1];
      print("\n");
      print("color code: " + colorCode);
    } else {
      colorCode = colorCodes[0]; //saving myself from OutOfBounds Exceptions
    }
  } else {
    //letter is between n - z
    if (numerology + 4 < colorCodes.length) {
      colorCode = colorCodes[numerology + 4]; //find the opposite colour (add 6)
      print("\n");
      print("color code: " + colorCode);
    } else {
      colorCode = colorCodes[5 - (colorCodes.length - numerology)]; //another fail safe
      print("\n");
      print("color code: " + colorCode);
    }
  }

  let code = split(colorCode, ""); //splitting the final colour code into a String array

  let codeSum = 0;
  let hexLine = "";
  let letterSum = 0;

  //separating chars from digits
  for (let i = 1; i < code.length; i++) {
    if (
      code[i] == "0" ||
      code[i] == "1" ||
      code[i] == "2" ||
      code[i] == "3" ||
      code[i] == "4" ||
      code[i] == "5" ||
      code[i] == "6" ||
      code[i] == "7" ||
      code[i] == "8" ||
      code[i] == "9"
    ) {
      codeSum += round(code[i]);
      print("\n");
      print("Sum of Digits: " + codeSum);
    } else {
      hexLine += code[i];
      print("\n");
      print("Sum of hex: " + hexLine);
    }
  }

  let coinToss = int(random(1, 3));
  print("coin toss: " + coinToss);

  switch (coinToss) {
    case 1: //MASH # by adding the digits in the color code together...
      print("\n");
      print("DIGIT PATH");
      if (codeSum > 10 && codeSum != 10 && codeSum != 11 && codeSum != 12) {
        let g = str(codeSum);

        mashB = singleDigit(g); //...and reducing to a single digit if needed
      } else {
        mashB = codeSum;
        return mashB;
      }
      break;

    case 2: //MASH # by adding the chars decimal values in the color code together...
      print("\n");
      print("HEX CODE PATH");
      for (let i = 0; i < hexLine.length; i++) {
        letterSum += unchar(hexLine.charAt(i));

        print("\n");
        print("Sum of hexes: " + letterSum);

        mashB = singleDigit(str(letterSum));
      }
      break;
  }

  print("\n");
  print("Single Digit: " + mashB); //MASH # for path B

  while (mashB >= 10) {
    mashB = singleDigit(str(mashB));
  }
  return mashB;
}

function ceePath(ab, bb) {
  print("\n");
  print("CEE PATH");

  let homophonic;
  let sum = 0;
  let trait;
  let mbti;
  let mbtiList = [
    "ISTJ",
    "ISFJ",
    "ISFP",
    "ISTP",
    "INFP",
    "INTP",
    "INFJ",
    "INTJ",
    "ESTJ",
    "ESFJ",
    "ESFP",
    "ESTP",
    "ENFP",
    "ENTP",
    "ENFJ",
    "ENTJ",
  ];

  let mbtiOptions = [];
  let mashNum = 0;

  //name is converted via cipher
  //words are coverted to #s
  //numbers are added
  //sum equates to a colour code (w/o going over)
  //colour codes linked to a MBTI trait
  //list of MBTI types with that trait
  //pick one randomly
  //convert MBTI type to chars --> Binary --> add up the 1s

  homophonic = phonicCipher(ab, bb);
  print("\n");
  print("Homophonic Cipher Word: " + homophonic);

  let hp = split(homophonic, "");

  for (let i = 0; i < hp.length; i++) {
    if (
      !(
        hp[i] == "a" ||
        hp[i] == "e" ||
        hp[i] == "i" ||
        hp[i] == "o" ||
        hp[i] == "u" ||
        hp[i] == "y" ||
        hp[i] == "h" ||
        hp[i] == "w"
      )
    ) {
      let t = hp[i].toLowerCase();

      if (t == "b") {
        sum += 1;
      } else if (t == "c") {
        sum += 7;
      } else if (t == "d") {
        sum += 10;
      } else if (t == "f") {
        sum += 6;
      } else if (t == "g") {
        sum += 13;
      } else if (t == "j") {
        sum += 3;
      } else if (t == "k") {
        sum += 14;
      } else if (t == "l") {
        sum += 0;
      } else if (t == "m") {
        sum += 8;
      } else if (t == "n") {
        sum += 2;
      } else if (t == "p") {
        sum += 9;
      } else if (t == "q") {
        sum += 15;
      } else if (t == "r") {
        sum += 17;
      } else if (t == "s") {
        sum += 16;
      } else if (t == "t") {
        sum += 4;
      } else if (t == "v") {
        sum += 5;
      } else if (t == "x") {
        sum += 12;
      } else if (t == "z") {
        sum += 11;
      }
    }
  }

  print("\n");
  print("Sum of cipher " + sum);

  let target;

  if (sum <= 30) {
    trait = "sensing";
    target = "S";
  } else if (sum <= 60) {
    trait = "extraversion";
    target = "E";
  } else if (sum <= 120) {
    trait = "thinking";
    target = "T";
  } else if (sum <= 210) {
    trait = "judging";
    target = "J";
  } else if (sum <= 240) {
    trait = "intuition";
    target = "N";
  } else if (sum <= 270) {
    trait = "perceiving";
    target = "S";
  } else if (sum <= 300) {
    trait = "feeling";
    target = "F";
  } else {
    trait = "introversion";
    target = "I";
  }

  print("\n");
  print("MBTI TRAIT: " + trait);

  for (let i = 0; i < mbtiList.length; i++) {
    for (let ii = 0; ii < 4; ii++) {
      let u = str(mbtiList[i].charAt(ii));

      if (u == target) {
        //mbtiOptions.append(mbtiList[i]);
        append(mbtiOptions, mbtiList[i]);
      }
    }
  }

  for (let i = 0; i < mbtiOptions.length; i++) {
    print("\n");
    print(mbtiOptions[i]);
  }

  mbti = mbtiOptions[round(random(0, mbtiOptions.length - 1))];
  print("\n");
  print("MBTI: " + mbti);

  for (let i = 0; i < 4; i++) {
    let b = unchar(mbti.charAt(i));

    bin = bin + str(b);

    print("bin: " + bin);
  }

  print("\n");
  print("Binary: " + bin);

  for (let i = 0; i < str(bin).length; i++) {
    let x = str(str(bin).charAt(i));

    if (x >= "5") {
      mashNum++;
    }
  }

  return mashNum;
}

function phonicCipher(x, y) {
  let p;

  switch (x) {
    case "a":
      p = "astronauts";
      break;

    case "b":
      p = "black holes";
      break;

    case "c":
      p = "creatures";
      break;

    case "d":
      p = "demons";
      break;

    case "e":
      p = "eyeballs";
      break;

    case "f":
      p = "faces";
      break;

    case "g":
      p = "ghosts";
      break;

    case "h":
      p = "hysteria";
      break;

    case "i":
      p = "idols";
      break;

    case "j":
      p = "jelly";
      break;

    case "k":
      p = "killer clowns";
      break;

    case "l":
      p = "lightning";
      break;

    case "m":
      p = "monsters";
      break;

    case "n":
      p = "news reports";
      break;

    case "o":
      p = "outer spaces";
      break;

    case "p":
      p = "planets";
      break;

    case "q":
      p = "questions";
      break;

    case "r":
      p = "robots";
      break;

    case "s":
      p = "sanctuaries";
      break;

    case "t":
      p = "television";
      break;

    case "u":
      p = "umbrellas";
      break;

    case "v":
      p = "villains";
      break;

    case "w":
      p = "weather";
      break;

    case "x":
      p = "xerocopies";
      break;

    case "y":
      p = "yesterdays";
      break;

    case "z":
      p = "zealotry";
      break;
  }

  /////

  switch (y) {
    case "a":
      p += " in The Abyss";
      abcPhonic = "Abyss";
      break;

    case "b":
      p += " on The Blue Planet";
      abcPhonic = "BluePlanet";
      break;

    case "c":
      p += " in The Circus of Cacaesthesia";
      abcPhonic = "CircusCacaesthesia";
      break;

    case "d":
      p += " in The Deep, Dark Web";
      abcPhonic = "DeepDarkWeb";
      break;

    case "e":
      p += " on Earth, the Second";
      abcPhonic = "EarthSecond";
      break;

    case "f":
      p += " on Fearless Avenue";
      abcPhonic = "FearlessAvenue";
      break;

    case "g":
      p += " on The Green Planet";
      abcPhonic = "GreenPlanet";
      break;

    case "h":
      p += " on Homer's Planet";
      abcPhonic = "HomersPlanet";
      break;

    case "i":
      p += " in The Icebox";
      abcPhonic = "Icebox";
      break;

    case "j":
      p += " in The Junkyard";
      abcPhonic = "Junkyard";
      break;

    case "k":
      p += " in Kazpr's House";
      abcPhonic = "KazprsHouse";
      break;

    case "l":
      p += " in The LakeHouse";
      abcPhonic = "Lakehouse";
      break;

    case "m":
      p += " in The Mill";
      abcPhonic = "Mill";
      break;

    case "n":
      p += " in The Nowhere";
      abcPhonic = "Nowhere";
      break;

    case "o":
      p += " on Planet Omen";
      abcPhonic = "OmenPlanet";
      break;

    case "p":
      p += " in Purgatory";
      abcPhonic = "Purgatory";
      break;

    case "q":
      p += " on Questionable Places";
      abcPhonic = "QuestionablePlaces";
      break;

    case "r":
      p += " on The Red Planet";
      abcPhonic = "RedPlanet";
      break;

    case "s":
      p += " in Sinkholes";
      abcPhonic = "Sinkholes";
      break;

    case "t":
      p += " in Tomorrowville";
      abcPhonic = "Tomorrowville";
      break;

    case "u":
      p += " in Universe Land";
      abcPhonic = "UniverseLand";
      break;

    case "v":
      p += " in Vim Volcano Town";
      abcPhonic = "VimVolcanoTown";
      break;

    case "w":
      p += " in The Who-Knows";
      abcPhonic = "WhoKnows";
      break;

    case "x":
      p += " on A Xystus for Angels";
      abcPhonic = "XystusAngels";
      break;

    case "y":
      p += " on The Yikker Planet";
      abcPhonic = "YikkerPlanet";
      break;

    case "z":
      p += " in The Zizz Victims Unit";
      abcPhonic = "ZizzVictimsUnit";
      break;
  }

  print("\n");
  print(p);
  return p;
}

function pick(index) {
  targId = []; //in place of intlist, collecting all the options

  let primIndex; //the number choosing all the things

  if (index > primSubjects.length - 1) {
    //# - the largest the index
    primIndex = index - primSubjects.length;
  } else {
    primIndex = index;
  }

  print("This 1: ");
  print(primSubjects[primIndex]);

  let targetId = new p5.TableRow();

  let row1 = imageData.findRows(primSubjects[primIndex], "Primary Subject");

  for (let i = 0; i < row1.length; i++) {
    targetId = row1[i].getNum("ID");
    targId.push(targetId);
    print("\n");
    print(targId);
  } //works :D, great job

  print("XXXXXXXXXXXXXXX");

  let clrIndex;
  if (index > colours.length - 1) {
    clrIndex = index - colours.length;
    while (clrIndex > colours.length - 1) {
      clrIndex--;
    }
  } else {
    clrIndex = index;
  }

  print("\n");
  print("This 1: ");
  print(colours[clrIndex]);

  let clrCorpse = [];

  for (let i = 0; i < targId.length; i++) {
    print("index: " + i);
    print("number of indexes: " + targId.length);
    print("ID number at the index: " + targId[i]);

    let c = imageData.getString(targId[i], "Colours");

    if (c == colours[clrIndex]) {
      clrCorpse.push(imageData.getNum(targId[i], "ID"));
      print(c);
    }
  }

  if (clrCorpse.length != 0) {
    targId = clrCorpse;
    print(targId);
  } else {
    return getResult(targId);
  }

  print("\n");
  print(" ");
  print("XXXXXXXXXXXXXXX");
  print(" ");

  let spaceIndex;
  if (index > space.length - 1) {
    spaceIndex = index - space.length;
  } else {
    spaceIndex = index;
  }

  print("\n");
  print("This 1: ");
  print(space[spaceIndex]);

  let spaceCorpse = [];

  for (let i = 0; i < targId.length; i++) {
    print("index: " + i);
    print("number of indexes: " + targId.length);
    print("ID number at the index: " + targId[i]);

    let sp = imageData.getString(targId[i], "Space");

    if (sp == space[spaceIndex]) {
      spaceCorpse.push(imageData.getNum(targId[i], "ID"));
      print(sp);
    }
  }

  if (spaceCorpse.length != 0) {
    //only change it if the list isn't empty
    targId = spaceCorpse;
  } else {
    return getResult(targId);
  }

  print("XXXXXXXXXXXXXXX");
  print(" ");

  let motifIndex;
  if (index > shiannMotifs.length - 1) {
    motifIndex = index - shiannMotifs.length;
  } else {
    motifIndex = index;
  }

  print("This 1: ");
  print(shiannMotifs[motifIndex]);

  let motifCorpse = [];

  for (let i = 0; i < targId.length; i++) {
    print("index: " + i);
    print("number of indexes: " + targId.length);
    print("ID number at the index: " + targId[i]);

    let mo = imageData.getString(targId[i], "Shiann's Motifs");

    if (mo == shiannMotifs[motifIndex]) {
      motifCorpse.push(imageData.getNum(targId[i], "ID"));
      print(mo);
    }
  }

  if (motifCorpse.length != 0) {
    //only change it if the list isn't empty
    targId = motifCorpse;
  } else {
    print(targId);
    return getResult(targId);
  }

  print("XXXXXXXXXXXXXXX");
  print(" ");

  let shapeIndex;

  if (index > shapeForm.length - 1) {
    shapeIndex = index - shapeForm.length;
  } else {
    shapeIndex = index;
  }

  print("This 1: ");
  print(shapeForm[shapeIndex]);

  let shapeCorpse = [];

  for (let i = 0; i < targId.length; i++) {
    print("index: " + i);
    print("number of indexes: " + targId.length);
    print("ID number at the index: " + targId[i]);

    let sh = imageData.getString(targId[i], "Shape/Form");
    print(sh);

    if (sh == shapeForm[shapeIndex]) {
      shapeCorpse.push(imageData.getNum(targId[i], "ID"));
      print(sh);
    }

    /*let sp = imageData.getString(targId[i], "Space");
    
    if(sp == space[spaceIndex]){
      spaceCorpse.push(imageData.getNum(targId[i],"ID"));
      print(sp);
    }*/
  }

  if (shapeCorpse.length != 0) {
    //only change it if the list isn't empty
    targId = shapeCorpse;
  } else {
    return getResult(targId);
  }

  print(" ");
  print("\n");
  print("XXXXXXXXXXXXXXX");
  print(" ");

  return getResult(targId);
}
function getResult(targId) {
  print("\n");
  print("WE'RE BAILING");

  let targImage = int(random(0, targId.length)); //picks a random image from the matching ones

  let indexResult = targId[targImage]; //singles out the selected one

  print("\n");
  print("ID number of target Image is: " + indexResult);

  let result = imageData.findRow(indexResult, "ID");

  print(imageData.getString(indexResult, "AnimName"));

  return indexResult;
}

function setVal(x) {
  let val = 0;

  if (x == "a" || x == "j" || x == "s") {
    val = 1;
  } else if (x == "b" || x == "k" || x == "t") {
    val = 2;
  } else if (x == "c" || x == "l" || x == "u") {
    val = 3;
  } else if (x == "d" || x == "m" || x == "v") {
    val = 4;
  } else if (x == "e" || x == "n" || x == "w") {
    val = 5;
  } else if (x == "f" || x == "o" || x == "x") {
    val = 6;
  } else if (x == "g" || x == "p" || x == "y") {
    val = 7;
  } else if (x == "h" || x == "q" || x == "z") {
    val = 8;
  } else if (x == "i" || x == "r") {
    val = 9;
  }

  return val;
}

function singleDigit(x) {
  let spl = split(x, "");

  let sum = 0;

  for (let i = 0; i < spl.length; i++) {
    sum += int(spl[i]);
  }

  print("single digit result: " + sum);

  return sum;
}

function getName() {
  let indent = 25;

  print("Enter your name");
  print("XXXXXXXXXXXXXXXXXXXXXX");
  print(" ");

  textFont(f);
  fill(255);

  print("Click in this window and type. \nHit enter to save. ", indent, 40);
  print("Input: " + typing, indent, 190);
  print("Saved text: " + saved, indent, 230);

  return typing;
}

function opening() {
  
  let phaseTextX = width/2;
  
  let rY = height / 2 - 100;
  
  let hY = height / 2;
  
  let dY = height / 2 + 100;
  
  colorMode(RGB, 255, 255, 255);
  
  let phaseClrs = [130,230,0];

  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height);

  textAlign(CENTER);
  textFont(fnt);
  textAlign(LEFT);
  textSize(40);
  fill(255);
  text("THE ANARCHIST GALAXY is a world beyond Earth.", 0, 80);
  textSize(20);
  text(
    "All the creatures and worlds that have ever existed are viewed under three major aspects. ", 10,120);
  
  
  
  
  //PHASES
  
  textAlign(CENTER);
  colorMode(HSB, 360 ,100, 100);
  textSize(30);

  //text("Rage - Defiance and Rebellion", rX, rY);
  
  if(dist(mouseX, mouseY, phaseTextX, rY) < 30){
     fill(130,100,75);
     text("[ Rage ]", phaseTextX, rY);
    
    
    rectMode(CENTER);
     rect(phaseTextX - 420, dY - 10, 500, 100);
     fill(255);
     textSize(25);
     text("Defiance and Rebellion", phaseTextX - 420, dY - 10);
  } else {
     fill(255);
     text("Rage", phaseTextX, rY);
  }
  
  //Questioning and Hyper-Vigilance
  
  if(dist(mouseX, mouseY, phaseTextX, hY) < 30){
     fill(230,100,100);
     text("[ Hysteria ]", phaseTextX, hY);
    
    rectMode(CENTER);
     rect(phaseTextX - 420, dY - 10, 500, 100);
     fill(255);
     textSize(25);
     text("Questioning and Hyper-Vigilance", phaseTextX - 400, dY - 10);
    
  } else {
     fill(255);
     text("Hysteria", phaseTextX, hY);
  }
  
  //Demise and Destruction 
  
  if(dist(mouseX, mouseY, phaseTextX, dY) < 30){
     fill(0,100,100);
     text("[ Despair ]", phaseTextX, dY);
     
     rectMode(CENTER);
     rect(phaseTextX - 420, dY - 10, 500, 100);
     fill(255);
     textSize(25);
     text("Demise and Destruction ", phaseTextX - 400, dY - 10);
  } else {
     fill(255);
     text("Despair", phaseTextX, dY);
  }

  
  
  
  
  //CLOSING
  
  textAlign(LEFT);
  textSize(20);
  colorMode(RGB, 255, 255, 255);
  fill(255);

  text("The GBR planet went through these three major phases of change, ",20,180);
  
  text(
    "named after how the creatures responded to the initial discovery of TEEF the Eye-dol.",20,220);

  text("The Eye-dol inspired these three major feelings -- ",20,height / 2 + 230);
  
  text(
    " and everything that existed in the galaxy since then came from these creatures",
    20,
    height / 2 + 250
  );

  text(
    "The galaxy says; these feelings didn't sound very fun and the creatures ultimately changed entirely; ",
    20,
    height / 2 + 300
  );
  text(" but they were not destroyed by it.", 20, height / 2 + 330);

  textAlign(CENTER);
  textSize(30);
  colorMode(HSB, 360, 100, 100);
  fill(300, 100, 100);
  text("[ Click to Continue ]", width / 2 - 150, height / 2 + 360);
}

function nameProcessing() {
  if (nameEntered == true) {
    let n = split(saved, " ");

    fname = n[0].toLowerCase();
    print("first name " + fname);

    lname = n[1].toLowerCase();
    print("last name " + lname);

    let firstLength = fname.length;
    let lastLength = lname.length;

    aa = fname.charAt(0);
    ab = fname.charAt(firstLength - 1);
    ba = lname.charAt(0);
    bb = lname.charAt(lastLength - 1);
  }
}

function videoGetter() {
  ayeMash = ayePath(aa, ab, ba, bb); //returns index of each characteristic;
  print("Mash A # : " + ayeMash);
  imageIndex = pick(ayeMash);
  print("IMAGE INDEX FOR RAGE PATH: " + imageIndex);

  //rwRage = imageData.findRow(imageIndex,'ID');
  let rageFilmName = imageData.getString(imageIndex, "AnimFile");
  rageFilm = createVideo(rageFilmName);
  rageFilm.loop();

  print("Rage Film Name: " + rageFilmName);

  beeMash = beePath(aa, ba); //returns index of each characteristic;
  print("Mash B # : " + beeMash);
  imageIndex1 = pick(beeMash);
  print("IMAGE INDEX FOR HYSTERIA PATH: " + imageIndex1);

  let hysteriaFilmName = imageData.getString(imageIndex1, "AnimFile");
  hysteriaFilm = createVideo(hysteriaFilmName);
  hysteriaFilm.loop();

  ceeMash = ceePath(ab, bb); //returns index of each characteristic;
  print("Mash C # : " + ceeMash);
  imageIndex2 = pick(ceeMash);
  print("IMAGE INDEX FOR DESPAIR PATH: " + imageIndex2);

  let despairFilmName = imageData.getString(imageIndex2, "AnimFile");
  despairFilm = createVideo(despairFilmName);
  despairFilm.loop();

  phaseNum++;
}

function rageDisplay() {
  background(0);

  imageMode(CORNER);
  image(rageFilm, 0, 0, 400, 400);

  colorMode(RGB);
  let c = get(0, 20);
  print("CLR: " + c);
  
  print("X: " + mouseX + "Y: " + mouseY);

  rectMode(CORNER);
  noStroke();
  fill(c);
  rect(0, 0, width, height);
  imageMode(CORNER);
  image(rageFilm, width / 3, 0, 400, 400);
  
  //let ragePick = int(random(0,2));

    rageText[0] =
    fname +
    " " +
    lname +
    " gets the " +
    imageData.getString(imageIndex, "AnimName") +
    " as their Rage Alignment.";
  rageText[1] =
    "In the phase of Rage this suggests that - much like the " +
    imageData.getString(imageIndex, "AnimName") +
    " - you have " +
    imageData.getString(imageIndex, "Verb 2") +
    ".";
  rageText[2] = "Perhaps you identify with this.";
  rageText[3] =
    "At least at the times you are angry and defiant of what is happening around you.";
  rageText[4] =
    "Take this as a sign to recognize the types of things in your life that you want to change or bring you great frustration.";

  displayText(rageText, c);

  if (notSavedRage == true) {
    save(fname + "_" + lname + "_RAGE.png");
    notSavedRage = false;
  }
}

function hysteriaDisplay() {
  background(0);

  imageMode(CORNER);
  image(hysteriaFilm, 0, 0, 400, 400);

  colorMode(RGB);
  let c = get(0, 20);
  print("CLR: " + c);

  rectMode(CORNER);
  noStroke();
  fill(c);
  rect(0, 0, width, height);
  imageMode(CORNER);
  image(hysteriaFilm, width / 3, 0, 400, 400);
   
      hysteriaText[0] =
    fname +
    " " +
    lname +
    " gets the " +
    imageData.getString(imageIndex1, "AnimName") +
    " as their Hysteria Alignment.";
  hysteriaText[1] =
    "ask yourself, what in your life has been " +
    imageData.getString(imageIndex1, "Verb(ing)") +
    "?";
  hysteriaText[2] =
    "And why do you fear it? Simultaneously, what part of it drives your morbid curiosity?";
  hysteriaText[3] =
    "Is it the parts that are " +
    imageData.getString(imageIndex1, "Adjective") +
    " -esque?";
  hysteriaText[4] =
    "Do you feel " +
    imageData.getString(imageIndex1, "State of being") +
    " whilst doing this thought exercise? So many questions, " +
    imageData.getString(imageIndex1, "Interjection");

  //println(hysteriaText[0]);
  displayText(hysteriaText, c);
  //text(hysteriaText, 10, height - 20);

  if (notSavedHysteria == true) {
    save(fname + "_" + lname + "_HYSTERIA.png");
    notSavedHysteria = false;
  }
}

function despairDisplay() {
  background(0);

  imageMode(CORNER);
  image(despairFilm, 0, 0, 400, 400);

  colorMode(RGB);
  let c = get(0, 20);
  print("CLR: " + c);

  rectMode(CORNER);
  noStroke();
  fill(c);
  rect(0, 0, width, height);
  imageMode(CORNER);
  image(despairFilm, width / 3, 0, 400, 400);
  

      despairText[0] =
    fname +
    " " +
    lname +
    " gets the " +
    imageData.getString(imageIndex2, "AnimName") +
    " as their Despair Alignment.";
  despairText[1] = imageData.getString(imageIndex2, "Phrase");
  despairText[2] =
    "This is it, you think, this is the thing that makes you feel " +
    imageData.getString(imageIndex2, "State of being 2") +
    " but not in the traditional sense, ";
  despairText[3] =
    "But more in the way a " +
    imageData.getString(imageIndex2, "Noun") +
    " feels that.";
  despairText[4] =
    "You are changing. You are " +
    imageData.getString(imageIndex2, "Verb 2") +
    " and it is " +
    imageData.getString(imageIndex2, "Adjective 2") +
    ".";
  despairText[5] =
    "And no matter how " +
    imageData.getString(imageIndex2, "Emotion") +
    " you feel, that feeling will change too. And somehow it will all be okay.";
  despairText[6] = imageData.getString(imageIndex2, "Affirming Phrase");
  
  //println(despairText[0]);
  displayText(despairText, c);
  //text(despairText, 10, height - 20);

  if (notSavedDespair == true) {
    save(fname + "_" + lname + "_DESPAIR.png");
    notSavedDespair = false;
  }
}

function loading() {
  
  let g1 = 0;
  let b1 = 0;
  let b2 = 0;
  
  //colorMode(HSB, 360, 100, 100);
  colorMode(RGB, 255, 255, 255);
  let c = color(0, 0, 100);

  m = millis() / 1000;
  
  //new screen 

  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height);
  
  imageMode(CORNER);
  image(loadingFilm,0,0,width,height);
  loadingFilm.loop();
  
  //text

  fill(255);
  textSize(30);
  text(loadingText, width / 2 - 60, height / 2 - 20);
  
  //loading bar

  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(width / 4, height / 2, loadingX, 40);

  noFill();
  strokeWeight(10);
  stroke(255);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20, width / 2, 40);

  loadingMusic.rate(1.0);

  if (loadingMusic.isPlaying() == false) {
    loadingMusic.play();

    if (loadingMusic.currentTime() == loadingMusic.duration()) {
      loadingMusic.stop();
    }
  }
}

function endScreen() {
  fill(0);
  rectMode(CORNER);
  rect(0, 0, width, height);

  fill(255);
  textSize(15);
  text("Thank you", width / 2, height / 2);
  text(" -from Space", width / 2 + 20, height / 2 + 50);
  text("Run Again?", width / 2, height / 2 + 100);
}

function menuPicker() {
  switch (phaseNum) {
    case 0:
      notSavedRage = true;
      notSavedHysteria = true;
      notSavedDespair = true;
      loadingX = width / 100;
      doneLoading = false;
      print("OPENING");
      opening();
      break;

    case 1:
      print("Enter Name");
      typeMenu = true;
      nameProcessing();
      break;

    case 2:
      print("Getting animation");
      videoGetter(); //runs in a loop why?
      break;

    case 3:
      //println("funky loading screen that Shiann has to animate");
      loading();
      //set up timer maybe
      break;

    case 4:
      print("Rage Path");
      loadingMusic.stop();
      rageDisplay();
      break;

    case 5:
      print("Hysteria Path");
      hysteriaDisplay();
      break;

    case 6:
      print("Despair Path");
      despairDisplay();
      break;

    case 7:
      print("End Screen");
      endScreen();
  }
}

function keyPressed() {
  
  let vol = 0.3;
  
  //key fx
  switch(int(random(1,5))){
      
    case 1:
      keyFX.setVolume(vol);
      keyFX.play();
      break;
      
    case 2:
      keyFX_2.setVolume(vol);
      keyFX_2.play();
      break;
    
    case 3:
      keyFX_3.setVolume(vol);
      keyFX_3.play();
      break;
      
    case 4:
      keyFX_4.setVolume(vol);
      keyFX_4.play();  
  }
  
  //typing name
  if (typeMenu == true) {
    //if the return key is pressed, save string and clear it
    if (keyCode == ENTER && typing != "") {
      typeExist = false;
      saved = typing;
      nameEntered = true;
      typing = "";
      //otherwise, concatenate the String
      //phaseNum++;
    } else if (keyCode == SHIFT) {
      print("shift");
    } else if (keyCode == BACKSPACE) {
      let mistakeIndex = typing.length - 1;
      if (mistakeIndex < 0) {
        mistakeIndex = 0;
      }
      let sub = typing.substring(0, mistakeIndex);
      typing = sub;
      //print("backspace");
    } else {
      typeExist = true;
      typing = typing + key;
    }
  }
  
}

function mousePressed() {
  if (phaseNum >= 7) {
    phaseNum = 0;
  } else {
    phaseNum++;
    clickFX.play();
  }
}
