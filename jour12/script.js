
// GESTION DES ONGLETS
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer active de tous les boutons et contenus
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Activer le bouton cliqué et son contenu
        btn.classList.add('active');
        const tabName = btn.getAttribute('data-tab');
        document.getElementById(tabName + 'Tab').classList.add('active');
    });
});

// FONCTION POUR FORMATER LE TEMPS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
}

// minuteur
let timerTime = 0, timerInterval = null, timerRunning = false;
const timerDisplay = document.getElementById("timerDisplay");
const timerInput = document.getElementById("timerInput");
const plusBtn = document.getElementById("plus");
const moinsBtn = document.getElementById("moins");
const startBtn = document.getElementById("startTimer");
const alarmSound = document.getElementById("alarmSound");

plusBtn.addEventListener("click", () => {
    timerTime += 60;
    timerDisplay.textContent = formatTime(timerTime);
});

moinsBtn.addEventListener("click", () => {
    if (timerTime > 0) timerTime -= 60;
    timerDisplay.textContent = formatTime(timerTime);
});

timerInput.addEventListener("change", () => {
    timerTime = parseInt(timerInput.value) || 0;
    timerDisplay.textContent = formatTime(timerTime);
});

startBtn.addEventListener("click", () => {
    if (!timerRunning) {
        if (timerTime <= 0) {
            alert("Veuillez définir un temps !");
            return;
        }
        timerRunning = true;
        startBtn.textContent = "⏸️ Pause";
        timerInterval = setInterval(() => {
            timerTime--;
            timerDisplay.textContent = formatTime(timerTime);
            if (timerTime <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                startBtn.textContent = "▶️ Démarrer / Pause";
                alarmSound.currentTime = 0;
                alarmSound.play();
                // Notification visuelle
                alert("⏰ Le minuteur est terminé !");
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
        startBtn.textContent = "▶️ Démarrer / Pause";
    }
});

// chronometre
let chronoTime = 0, chronoInterval = null, chronoRunning = false;
let lapCounter = 1;
const chronoDisplay = document.getElementById("chronoDisplay");
const chronoStartBtn = document.getElementById("chronoStart");
const chronoLapBtn = document.getElementById("chronoLap");
const chronoResetBtn = document.getElementById("chronoReset");
const lapList = document.getElementById("lapList");

chronoStartBtn.addEventListener("click", () => {
    if (!chronoRunning) {
        chronoRunning = true;
        chronoStartBtn.textContent = "⏸️ Pause";
        chronoInterval = setInterval(() => {
            chronoTime += 0.01;
            chronoDisplay.textContent = chronoTime.toFixed(2);
        }, 10);
    } else {
        clearInterval(chronoInterval);
        chronoRunning = false;
        chronoStartBtn.textContent = "▶️ Démarrer / Pause";
    }
});

chronoLapBtn.addEventListener("click", () => {
    if (!chronoRunning) return;
    const li = document.createElement("li");
    li.innerHTML = `<span>Tour ${lapCounter}</span><span>${chronoTime.toFixed(2)} s</span>`;
    lapList.insertBefore(li, lapList.firstChild); // Ajouter en haut
    lapCounter++;
});

chronoResetBtn.addEventListener("click", () => {
    clearInterval(chronoInterval);
    chronoRunning = false;
    chronoTime = 0;
    lapCounter = 1;
    chronoDisplay.textContent = "00.00";
    lapList.innerHTML = "";
    chronoStartBtn.textContent = "▶️ Démarrer / Pause";
});

/***** HORLOGE 3D CANVAS - maintenant intégrée au réveil *****/

/***** REVEIL MUSICAL 3D *****/
const alarmTimeInput = document.getElementById("alarmTime");
const alarmMessageInput = document.getElementById("alarmMessage");
const addAlarmBtn = document.getElementById("addAlarm");
const stopAlarmBtn = document.getElementById("stopAlarm");
const snoozeAlarmBtn = document.getElementById("snoozeAlarm");
const alarmList = document.getElementById("alarmList");
const alarmNotification = document.getElementById("alarmNotification");
const alarmNotificationMessage = document.getElementById("alarmNotificationMessage");
let alarms = [];
let currentRingingAlarm = null;

addAlarmBtn.addEventListener("click", () => {
    const time = alarmTimeInput.value;
    const message = alarmMessageInput.value.trim() || "Alarme";
    if (!time) { alert("Veuillez sélectionner une heure"); return; }
    alarms.push({ time, message, active: true, triggered: false, id: Date.now() });
    alarmTimeInput.value = "";
    alarmMessageInput.value = "";
    displayAlarms();
});

stopAlarmBtn.addEventListener("click", () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmNotification.classList.add("hidden");
    if (currentRingingAlarm) currentRingingAlarm.triggered = true;
    currentRingingAlarm = null;
    displayAlarms();
});

snoozeAlarmBtn.addEventListener("click", () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmNotification.classList.add("hidden");

    if (currentRingingAlarm) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 5);
        const newTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        currentRingingAlarm.time = newTime;
        currentRingingAlarm.triggered = false;
        currentRingingAlarm.message = currentRingingAlarm.message + " (Snooze)";
    }
    currentRingingAlarm = null;
    displayAlarms();
});

function displayAlarms() {
    alarmList.innerHTML = "";
    const now = new Date();

    alarms.forEach((alarm, index) => {
        const div = document.createElement("div");
        div.className = `alarm-item ${alarm.active ? 'active' : 'inactive'}`;

        const infoDiv = document.createElement("div");
        infoDiv.className = "alarm-info";

        const timeSpan = document.createElement("div");
        timeSpan.className = "alarm-time-display";
        timeSpan.textContent = alarm.time;

        const nameSpan = document.createElement("div");
        nameSpan.className = "alarm-name";
        nameSpan.textContent = alarm.message;

        const statusSpan = document.createElement("div");
        statusSpan.className = "alarm-status";

        const [hour, minute] = alarm.time.split(":").map(Number);
        const alarmDate = new Date(now);
        alarmDate.setHours(hour, minute, 0, 0);

        if (alarm.triggered) {
            statusSpan.textContent = "Sonnée";
        } else if (!alarm.active) {
            statusSpan.textContent = "Désactivée";
        } else if (alarmDate > now) {
            const diffMs = alarmDate - now;
            const diffMin = Math.floor(diffMs / 60000);
            const diffSec = Math.floor((diffMs % 60000) / 1000);
            statusSpan.textContent = `Sonne dans ${diffMin}m ${diffSec}s`;
        } else {
            statusSpan.textContent = "Heure passée";
        }

        infoDiv.appendChild(timeSpan);
        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(statusSpan);

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "alarm-actions";

        const toggleBtn = document.createElement("button");
        toggleBtn.className = `btn-toggle ${alarm.active ? 'on' : 'off'}`;
        toggleBtn.textContent = alarm.active ? "ON" : "OFF";
        toggleBtn.onclick = () => {
            alarm.active = !alarm.active;
            if (alarm.active) alarm.triggered = false;
            displayAlarms();
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-delete";
        deleteBtn.textContent = "🗑️";
        deleteBtn.onclick = () => {
            alarms.splice(index, 1);
            displayAlarms();
        };

        actionsDiv.appendChild(toggleBtn);
        actionsDiv.appendChild(deleteBtn);

        div.appendChild(infoDiv);
        div.appendChild(actionsDiv);
        alarmList.appendChild(div);
    });
}

function checkAlarms() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const currentTime = `${h}:${m}`;

    alarms.forEach(alarm => {
        if (alarm.active && !alarm.triggered && alarm.time === currentTime) {
            alarm.triggered = true;
            currentRingingAlarm = alarm;
            alarmSound.currentTime = 0;
            alarmSound.play().catch(err => {
                console.error("Erreur son:", err);
            });
            alarmNotificationMessage.textContent = alarm.message;
            alarmNotification.classList.remove("hidden");
        }
    });
    displayAlarms();
}
setInterval(checkAlarms, 1000);

/***** REVEIL 3D PHYSIQUE *****/
const canvasAlarm = document.getElementById("realAlarmCanvas");
const ctxAlarm = canvasAlarm.getContext("2d");
const radiusAlarm = canvasAlarm.width / 2;
ctxAlarm.translate(radiusAlarm, radiusAlarm);
const rAlarm = radiusAlarm * 0.90;

function drawRealAlarm() {
    drawAlarmBody(ctxAlarm, rAlarm);
    drawAlarmNumbers(ctxAlarm, rAlarm);
    drawAlarmClocks(ctxAlarm, rAlarm);
    drawAlarmHands(ctxAlarm, rAlarm);
}

function drawAlarmBody(ctx, r) {
    // Fond du réveil
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();

    // Bordure avec effet 3D
    const grad = ctx.createRadialGradient(0, 0, r * 0.9, 0, 0, r);
    grad.addColorStop(0, '#fff');
    grad.addColorStop(0.5, '#ddd');
    grad.addColorStop(1, '#555');
    ctx.strokeStyle = grad;
    ctx.lineWidth = r * 0.08;
    ctx.stroke();

    // Centre du réveil
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawAlarmNumbers(ctx, r) {
    // Afficher les chiffres 1-12
    ctx.font = r * 0.15 + "px Arial";
    ctx.fillStyle = '#333';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (let num = 1; num <= 12; num++) {
        const ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -r * 0.75);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, r * 0.75);
        ctx.rotate(-ang);
    }

    // Marques pour les minutes
    ctx.strokeStyle = '#666';
    ctx.lineWidth = r * 0.01;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            const ang = i * Math.PI / 30;
            ctx.rotate(ang);
            ctx.beginPath();
            ctx.moveTo(0, -r * 0.88);
            ctx.lineTo(0, -r * 0.82);
            ctx.stroke();
            ctx.rotate(-ang);
        }
    }

    // Marques pour les heures
    ctx.strokeStyle = '#333';
    ctx.lineWidth = r * 0.02;
    for (let i = 0; i < 12; i++) {
        const ang = i * Math.PI / 6;
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.moveTo(0, -r * 0.88);
        ctx.lineTo(0, -r * 0.78);
        ctx.stroke();
        ctx.rotate(-ang);
    }
}

function drawAlarmClocks(ctx, r) {
    // Cloches du réveil (décoration)
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.arc(-r * 0.6, -r * 0.6, r * 0.15, 0, Math.PI, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(r * 0.6, -r * 0.6, r * 0.15, 0, Math.PI, true);
    ctx.fill();

    // Pieds du réveil
    ctx.fillStyle = '#555';
    ctx.fillRect(-r * 0.2, r * 0.85, r * 0.1, r * 0.15);
    ctx.fillRect(r * 0.1, r * 0.85, r * 0.1, r * 0.15);
}

function drawAlarmHands(ctx, r) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Convertir en format 12h
    hour = hour % 12;

    // Calcul des angles
    const hourAngle = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    const minuteAngle = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    const secondAngle = (second * Math.PI / 30);

    // Aiguille des heures (courte et épaisse)
    drawAlarmHand(ctx, hourAngle, r * 0.5, r * 0.07, '#333');

    // Aiguille des minutes (longue et moyenne)
    drawAlarmHand(ctx, minuteAngle, r * 0.7, r * 0.05, '#333');

    // Aiguille des secondes (très longue et fine)
    drawAlarmHand(ctx, secondAngle, r * 0.8, r * 0.02, 'red');
}

function drawAlarmHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

setInterval(() => {
    ctxAlarm.clearRect(-radiusAlarm, -radiusAlarm, canvasAlarm.width, canvasAlarm.height);
    drawRealAlarm();
}, 1000);
drawRealAlarm();
