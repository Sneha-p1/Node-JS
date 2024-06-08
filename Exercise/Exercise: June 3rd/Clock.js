// Clock functionality
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    const format = document.getElementById('format').value;
    if (format === '12') {
      hours = (hours % 12) || 12;
    }
    
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);
  
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  
  setInterval(updateClock, 1000);
  
  // Alarm functionality
  function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const alarmMessage = document.getElementById('alarmMessage').value;
    const alarmsContainer = document.getElementById('alarms');
  
    const alarmItem = document.createElement('div');
    alarmItem.innerText = `${alarmTime} - ${alarmMessage}`;
    alarmsContainer.appendChild(alarmItem);
  
    const [alarmHour, alarmMinute] = alarmTime.split(':');
    const now = new Date();
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHour, alarmMinute);
  
    const timeToAlarm = alarmDate - now;
    if (timeToAlarm > 0) {
      setTimeout(() => {
        alert(alarmMessage);
        // Add sound playing functionality here
      }, timeToAlarm);
    }
  }
  