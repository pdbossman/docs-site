/* global NPS_OFFERING_ID, NPS_POPUP_TIMEOUT */

export default () => {
  // load survey script
  let npsSurvey = document.createElement('script')
  npsSurvey.setAttribute('src', 'https://nps.mybluemix.net/survey/nps-survey.js')
  document.head.appendChild(npsSurvey)

  // nps config
  window.ibmNps = {
    offeringId: NPS_OFFERING_ID,
    userId: "",
    disableHashing: true,
    deferSurvey:true,
  }

  // schedule a popup
  setTimeout(function() {
    showNpsSurvey && showNpsSurvey()
  }, NPS_POPUP_TIMEOUT)
  console.log('nps timeout', NPS_POPUP_TIMEOUT)
}
