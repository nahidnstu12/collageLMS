import "./custom-select.scss"
export default function MarkSheet() {
    return (
      <form className="form-select">
        <ul className="select">
          <li>
            <input
              className="select_close"
              type="radio"
              name="awesomeness"
              id="awesomeness-close"
              value=""
            />
            <span className="select_label select_label-placeholder">
              Awesomeness Level
            </span>
          </li>

          <li className="select_items">
            <input
              className="select_expand"
              type="radio"
              name="awesomeness"
              id="awesomeness-opener"
            />
            <label className="select_closeLabel" for="awesomeness-close"></label>

            <ul className="select_options">
              <li className="select_option">
                <input
                  className="select_input"
                  type="radio"
                  name="awesomeness"
                  id="awesomeness-ridiculous"
                />
                <label className="select_label" for="awesomeness-ridiculous">
                  ridiculous
                </label>
              </li>

              <li className="select_option">
                <input
                  className="select_input"
                  type="radio"
                  name="awesomeness"
                  id="awesomeness-reasonable"
                />
                <label className="select_label" for="awesomeness-reasonable">
                  reasonable
                </label>
              </li>

              <li className="select_option">
                <input
                  className="select_input"
                  type="radio"
                  name="awesomeness"
                  id="awesomeness-lacking"
                />
                <label className="select_label" for="awesomeness-lacking">
                  lacking
                </label>
              </li>

              <li className="select_option">
                <input
                  className="select_input"
                  type="radio"
                  name="awesomeness"
                  id="awesomeness-awesomeless"
                />
                <label className="select_label" for="awesomeness-awesomeless">
                  awesomeless
                </label>
              </li>
            </ul>

            <label className="select_expandLabel" for="awesomeness-opener"></label>
          </li>
        </ul>
      </form>
    );
}
