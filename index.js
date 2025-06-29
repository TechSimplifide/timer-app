const inputValue = document.querySelector("#inpFild");
      const result = document.querySelector(".result");
      const alarm = document.querySelector(".alarm");
      let time = 0;
      let intervalId = null;

      document.querySelector(".set").addEventListener("click", () => {
        time = Math.abs(parseInt(inputValue.value)) || 0;
        result.textContent = time;
        if (intervalId !== null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      });

      const timer = () => {
        if (time > 0) {
          time--;
          result.textContent = time;
        } else {
          clearInterval(intervalId);
          intervalId = null;
          document.querySelector("#ringAlarm").play()
          alarm.innerHTML = `<p style="color: red; margin-top:1.5px; font-weight: bold;">Time's up!</p>`;
        }
      };

      document.querySelector(".btn").addEventListener("click", () => {
        document.querySelector("#inpFild").value = ''
        if (intervalId === null && time > 0) {
          alarm.innerHTML = ""; // Clear previous message
          intervalId = setInterval(timer, 1000);
        }
      });