import { sessionLists } from "../../store/data";

export default function AttendanceReport() {
  // sessionLists
  return (
    <form id="app-cover">
      <div id="select-box">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" class="brd">
          <div id="selected-value">
            <span>Select a platform</span>
          </div>
          <div id="chevrons">
            <i class="fas fa-chevron-up"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="options">
          {sessionLists.map((item) => (
            <div class="option">
              <input
                class="s-c top"
                type="radio"
                name="platform"
                value={item.title}
              />
              <input
                class="s-c bottom"
                type="radio"
                name="platform"
                value={item.title}
              />

              <span class="label">{item.title}</span>
              <span class="opt-val">{item.title}</span>
            </div>
          ))}

          <div id="option-bg"></div>
        </div>
      </div>
    </form>
  );
}
