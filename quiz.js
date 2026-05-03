let questions = [ 
{q:"What is phishing?", options:["Fishing","Fake emails attack","Firewall","Virus"], answer:1},
{q:"Strong password example?", options:["123456","password","Ab@123#Xy!","qwerty"], answer:2},
{q:"HTTPS means?", options:["Secure HTTP","Hacking","Hyperlink","None"], answer:0},
{q:"Malware is?", options:["Hardware","Software","Malicious software","Browser"], answer:2},
{q:"OTP stands for?", options:["One Time Password","Online Tool","Open Tech","None"], answer:0},

{q:"Public WiFi is?", options:["Always safe","Risky","Encrypted","Private"], answer:1},
{q:"Antivirus does?", options:["Create virus","Remove malware","Delete OS","None"], answer:1},
{q:"Firewall purpose?", options:["Heat control","Network security","Speed up internet","None"], answer:1},
{q:"Phishing targets?", options:["Machines","Humans","Servers","None"], answer:1},
{q:"Safe download from?", options:["Unknown sites","Trusted sites","Ads","Popups"], answer:1},

{q:"Ransomware does?", options:["Encrypt files","Delete files","Speed PC","None"], answer:0},
{q:"VPN used for?", options:["Gaming","Security","Music","None"], answer:1},
{q:"Strong password length?", options:["4","6","8+","2"], answer:2},
{q:"Social engineering is?", options:["Coding","Manipulation","Hardware","None"], answer:1},
{q:"Secure site starts with?", options:["http","https","ftp","smtp"], answer:1},

{q:"Spyware does?", options:["Spy data","Clean PC","Boost speed","None"], answer:0},
{q:"Trojan is?", options:["Virus type","Game","OS","None"], answer:0},
{q:"Email scam uses?", options:["Real info","Fake info","No info","None"], answer:1},
{q:"Two-factor means?", options:["1 step","2 step","No step","None"], answer:1},
{q:"Password should include?", options:["Only numbers","Letters & symbols","Only name","None"], answer:1},

{q:"Clicking unknown links?", options:["Safe","Unsafe","Fast","None"], answer:1},
{q:"Update software?", options:["Avoid","Do regularly","Never","None"], answer:1},
{q:"Data backup is?", options:["Delete data","Save copy","Share data","None"], answer:1},
{q:"Cyber attack is?", options:["Physical","Digital","Manual","None"], answer:1},
{q:"Botnet is?", options:["Network of bots","Human group","App","None"], answer:0},

{q:"Encryption means?", options:["Hide data","Delete data","Share data","None"], answer:0},
{q:"Decryption means?", options:["Unlock data","Lock data","Delete data","None"], answer:0},
{q:"Password reuse is?", options:["Safe","Unsafe","Normal","None"], answer:1},
{q:"Pop-up ads?", options:["Safe","Risky","Secure","None"], answer:1},
{q:"Install apps from?", options:["Anywhere","Official store","Unknown links","None"], answer:1},

{q:"Phishing example?", options:["Bank alert email","Real call","Friend msg","None"], answer:0},
{q:"Cyber safety means?", options:["Protection","Attack","Hacking","None"], answer:0},
{q:"Data breach?", options:["Data leak","Data save","Data delete","None"], answer:0},
{q:"Strong password should be?", options:["Short","Complex","Simple","None"], answer:1},
{q:"Public computer use?", options:["Safe","Risky","Private","None"], answer:1},

{q:"Install updates?", options:["Ignore","Install","Delete","None"], answer:1},
{q:"Email attachments?", options:["Open all","Check first","Ignore","None"], answer:1},
{q:"Secure login?", options:["OTP","No password","1234","None"], answer:0},
{q:"Cyber crime?", options:["Legal","Illegal","Normal","None"], answer:1},
{q:"Safe browsing?", options:["Click all","Avoid unknown","Ignore","None"], answer:1},

{q:"Identity theft?", options:["Steal data","Share data","Save data","None"], answer:0},
{q:"Online privacy?", options:["Important","Not needed","Optional","None"], answer:0},
{q:"Strong password avoids?", options:["Hack","Login","Access","None"], answer:0},
{q:"Secure network?", options:["Open","Protected","Public","None"], answer:1},
{q:"Cyber awareness?", options:["Knowledge","Ignorance","Attack","None"], answer:0},

{q:"Malicious link?", options:["Safe","Harmful","Useful","None"], answer:1},
{q:"Secure device?", options:["Unlocked","Protected","Shared","None"], answer:1},
{q:"Phishing message?", options:["Fake","Real","Secure","None"], answer:0},
{q:"Password sharing?", options:["Safe","Unsafe","Normal","None"], answer:1},
{q:"Cyber hygiene?", options:["Cleaning PC","Security habits","Delete data","None"], answer:1}
];

let current = 0;
let score = 0;

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.q;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = q.options[i];
    }
}

function checkAnswer(selected) {
    let popup = document.getElementById("popup");

    if (selected === questions[current].answer) {
        score++;
        popup.innerText = "✅ Correct!";
    } else {
        popup.innerText = "❌ Wrong! Correct: " +
        questions[current].options[questions[current].answer];
    }

    document.getElementById("score").innerText = score;

    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1200);
}

/* NEXT BUTTON */
function nextQuestion() {
    if (current < questions.length - 1) {
        current++;
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML =
            "<h2>Quiz Finished! Score: " + score + "/50</h2>";
    }
}

/* PREVIOUS BUTTON */
function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
    }
}

loadQuestion();