/**
 * Countdown Timer for Time Portal
 * Target: 2025-12-21 20:00:00 UTC+8 (Taipei Time)
 */

// Define the target date in UTC+8 timezone
// UTC+8 20:00 = UTC 12:00
const TARGET_DATE = new Date('2025-12-21T12:00:00.000Z');

// Verify the target date
console.log('Target Date (UTC):', TARGET_DATE.toISOString());
console.log('Target Date (Local):', TARGET_DATE.toLocaleString());

/**
 * Calculate the time difference between now and target date
 * @returns {Object} Object containing days, hours, minutes, seconds
 */
function calculateTimeRemaining() {
  const now = new Date().getTime();
  const targetTime = TARGET_DATE.getTime();
  const difference = targetTime - now;

  // Check if the countdown has finished
  if (difference <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFinished: true
    };
  }

  // Calculate time units
  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return {
    total: difference,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    isFinished: false
  };
}

/**
 * Format number to always show 2 digits
 * @param {number} num - Number to format
 * @returns {string} Formatted string
 */
function padZero(num) {
  return String(num).padStart(2, '0');
}

/**
 * Update the countdown display
 */
function updateCountdownDisplay() {
  const timeRemaining = calculateTimeRemaining();
  
  if (timeRemaining.isFinished) {
    // Display completion message
    document.getElementById('countdown').innerHTML = `
      <div class="text-center">
        <div class="text-6xl font-bold text-purple-400 mb-4">時空門已開啟!</div>
        <div class="text-2xl text-white">The portal is now open!</div>
      </div>
    `;
    return;
  }

  // Update the countdown display
  document.getElementById('countdown').innerHTML = `
    <div class="flex justify-center items-center space-x-4 text-white">
      <div class="countdown-unit">
        <div class="text-6xl font-bold text-purple-400">${timeRemaining.days}</div>
        <div class="text-sm text-gray-400 mt-2">天 DAYS</div>
      </div>
      <div class="text-6xl font-bold text-purple-300">:</div>
      <div class="countdown-unit">
        <div class="text-6xl font-bold text-purple-400">${padZero(timeRemaining.hours)}</div>
        <div class="text-sm text-gray-400 mt-2">時 HOURS</div>
      </div>
      <div class="text-6xl font-bold text-purple-300">:</div>
      <div class="countdown-unit">
        <div class="text-6xl font-bold text-purple-400">${padZero(timeRemaining.minutes)}</div>
        <div class="text-sm text-gray-400 mt-2">分 MINUTES</div>
      </div>
      <div class="text-6xl font-bold text-purple-300">:</div>
      <div class="countdown-unit">
        <div class="text-6xl font-bold text-purple-400">${padZero(timeRemaining.seconds)}</div>
        <div class="text-sm text-gray-400 mt-2">秒 SECONDS</div>
      </div>
    </div>
  `;
}

/**
 * Initialize the countdown timer
 */
function initCountdown() {
  // Update immediately on load
  updateCountdownDisplay();
  
  // Update every second
  setInterval(updateCountdownDisplay, 1000);
  
  console.log('Countdown initialized');
  console.log('Target:', TARGET_DATE.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }));
}

/**
 * Test timezone handling
 * This function should be removed in production
 */
function testTimezone() {
  console.group('Timezone Test');
  
  // Test different timezone representations
  const testDate = new Date('2025-12-21T12:00:00.000Z');
  
  console.log('UTC Time:', testDate.toISOString());
  console.log('Taipei (UTC+8):', testDate.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }));
  console.log('New York (UTC-5/-4):', testDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  console.log('London (UTC+0/+1):', testDate.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
  console.log('Tokyo (UTC+9):', testDate.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
  console.log('User Local:', testDate.toLocaleString());
  
  console.groupEnd();
}

// Start countdown when DOM is ready
document.addEventListener('DOMContentLoaded', initCountdown);

// Uncomment for testing
// testTimezone();
