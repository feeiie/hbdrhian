document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitPassword");
  const input = document.getElementById("passwordInput");
  const error = document.getElementById("passwordError");
  const main = document.getElementById("mainContent");
  const passScreen = document.getElementById("passwordScreen");

  const correctPassword = "制服ほしい";

  submitBtn.addEventListener("click", () => {
    if (input.value === correctPassword) {
      passScreen.style.display = "none";
      main.style.display = "block";
    } else {
      error.style.display = "block";
    }
  });

  
  function updateDaysSinceLastMet() {
    const lastMetDate = new Date("2025-01-14");
    const today = new Date();
    const timeDiff = today - lastMetDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById("daysSinceLastMet").innerHTML = `💔 会えていない日数: <strong>${daysDiff}日</strong>`;
  }

   // 記念日カウントダウン
   function updateCountdown(targetDate, elementId) {
    const today = new Date();
    const target = new Date(today.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    if (today > target) {
      target.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById(elementId).textContent = diffDays;
  }

  updateCountdown(new Date(2024, 2, 1), "haruCountdown"); // 3月1日
  updateCountdown(new Date(2024, 5, 3), "riaCountdown"); // 6月3日

  // あってない期間計算
  function updateDaysApart() {
    const lastMetDate = new Date(2024, 0, 14); // 1月14日
    const today = new Date();
    const diffTime = today - lastMetDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("daysApart").textContent = diffDays;
  }

  updateDaysSinceLastMet();
  setInterval(updateDaysSinceLastMet, 86400000); // 1日に1回更新
  function updateAnniversaryCountdown() {
    const today = new Date();
    const anniversaryDate = new Date(today.getFullYear(), 11, 7); // 12月7日 (月は0始まり)
  
    if (today > anniversaryDate) {
      // 今年の記念日が過ぎた場合、翌年の記念日を設定
      anniversaryDate.setFullYear(today.getFullYear() + 1);
    }
  
    const timeDiff = anniversaryDate - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    document.getElementById("anniversaryCountdown").textContent = `${daysRemaining}日`;
  }
  
  // ページ読み込み時に実行 & 1日ごとに更新
  updateAnniversaryCountdown();
  setInterval(updateAnniversaryCountdown, 86400000);
  function updateRelationshipDays() {
    const today = new Date();
    const startDate = new Date(2021, 11, 7); // 2021年12月7日 (月は0始まり)
  
    const timeDiff = today - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    document.getElementById("relationshipDays").textContent = `${daysTogether}`;
  }
  
  // ページ読み込み時に実行 & 1日ごとに更新
  updateRelationshipDays();
  setInterval(updateRelationshipDays, 86400000);

  
function updateNextMeetingCountdown() {
  const today = new Date();
  const nextMeetingDate = new Date(today.getFullYear(), 11, 7, 0, 0, 0); // 12月7日 0時

  if (today > nextMeetingDate) {
      // 今年の再会日が過ぎた場合、翌年の再会日を設定
      nextMeetingDate.setFullYear(today.getFullYear() + 1);
  }

  function updateCountdown() {
      const now = new Date();
      const timeDiff = nextMeetingDate - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      document.getElementById("nextMeetingCountdown").textContent = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000); // 1秒ごとに更新
}

// ページ読み込み時に実行
updateNextMeetingCountdown();


  

});
