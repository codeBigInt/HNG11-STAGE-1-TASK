const currentTimeUTC = document.getElementById('currentTimeUTC')
const currentDay = document.getElementById('currentDay')
const now = new Date()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = now.getUTCDay()

const utcTimeString =  now.getTime()

currentTimeUTC.textContent = utcTimeString

currentDay.textContent = `${dayNames[dayOfWeek].toString()},`

