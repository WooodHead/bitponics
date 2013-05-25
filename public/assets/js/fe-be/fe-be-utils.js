define(['moment'], function(moment){
  this.bpn = this.bpn || {};
  var utils = (this.bpn.utils = this.bpn.utils || {});


  /**
   *
   * @type {Array}
   */
  utils.DURATION_TYPES = [
    'seconds',
    'minutes',
    'hours',
    'days',
    'weeks',
    'months'
  ];


  /**
   *
   */
  utils.NOTIFICATION_TYPES = {
    INFO : "info",
    ACTION_NEEDED : "actionNeeded",
    ERROR : "error"
  };


  /**
   *
   * @type {Object}
   */
  utils.ACCESSORY_VALUES = {
    ON : '1',
    OFF : '0'
  };


  /**
   * Visibility for various user-generated models
   */
  utils.VISIBILITY_OPTIONS = {
    PRIVATE : "private",
    PUBLIC : "public"
  };


  /**
   * Used by the device sensor calibration page
   */
  utils.CALIB_MODES = {
    "PH_4" : "ph_4",
    "PH_7" : "ph_7",
    "PH_10" : "ph_10",
    "PH_DONE" : "ph_done",
    "EC_DRY" : "ec_dr",
    "EC_LO" : "ec_lo",
    "EC_HI" : "ec_hi",
    "EC_DONE" : "ec_done"
  };
  
  
  /**
   * Used to log CalibrationLogs, after a calibration has been
   * completed
   */
  utils.CALIB_LOG_TYPES = {
    "PH" : "ph",
    "EC" : "ec"
  };


  /**
   * Used during device sensor calibration
   */
  utils.CALIB_STATUSES = {
    "SUCCESS" : "success",
    "ERROR" : "error"
  };


  /**
   * Used during device sensor calibration
   */
  utils.PHASE_DAY_SUMMARY_STATUSES = {
    "GOOD" : "good",
    "BAD" : "bad"
  };


  utils.COMBINED_DEVICE_KEY_SPLITTER = "|";

  /**
   * Suggestions for auto-complete in UI
   */
  utils.suggestions = {
    lightTypes : [
      'Fluorescent',
      'Metal Halide',
      'High Pressure Sodium (HPS)',
      'LED'
    ],
    growSystemNames : [
      'Flood & Drain',
      'NFT (Nutrient Film Technique)',
      'Deep Water Culture (DWC)',
      'Aquaponic'
    ]
  };

  
  /**
   * Checks whether the provided string matches the ObjectId format.
   * Used when checking user-generated _id's, to avoid parse exceptions when passing them to 
   * MongooseModel.findById
   * 
   * @param {string|ObjectId} str. String or object to test for parsability.
   * @return {bool}
   */
  utils.canParseAsObjectId = function(str){
    if (!str) { return false; }
    return /^[0-9a-fA-F]{24}$/.test(str.toString());
  };

  /**
   *
   * @param str
   * @return {*}
   */
  utils.toTitleCase = function(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  };


  /**
   * Generate an array with the times of day in :30 minute increments, along with milliseconds since start of day (00:00)
   */
  utils.generateTimesOfDayArray = function(){
    var result = [], min = 0, hr = 0, minStr, hrStr, hrInc = 0;

    for (; hrInc < 24;){
      hr = Math.floor(hrInc);
      hrStr = (hr < 10 ? '0' + hr : hr);
      hrStr = (hr > 12 ? (hr - 12) : (hr == 0 ? '12' : hr));
      var suffix = (hr < 12 ? 'am' : 'pm');
      minStr = min < 10 ? '0' + min : min;
      result.push({
        "ms": ((min * 60 * 1000) + (hr * 60 * 60 * 1000)),
        "str": hrStr + ':' + minStr + suffix
      });
      min = (min == 0 ? 30 : 0);
      hrInc += .5;
    }
    return result;
  };


  /**
   *
   * @param n
   * @return {Boolean}
   */
  utils.isWholeNumber = function (n) {
    return n % 1 === 0;
  };


  /**
   * Takes a duration and returns the largest unit of time for which the duration is a whole number.
   * Used to simplify presentation of durations in UI (avoiding decimals).
   *
   * @param duration. Number. If durationType is omitted, it is assumed to be milliseconds.
   * @param durationType. String. One of bpn.utils.durationTypes
   * @return { 'duration' : number, 'durationType' : string }
   */
  utils.getLargestWholeNumberDurationObject = function(duration, durationType){
    var duration = moment.duration(duration, durationType || ''),
      transformedDuration;
    if (utils.isWholeNumber(transformedDuration = duration.asMonths())) {
      return {
        duration : transformedDuration,
        durationType : 'months'
      }
    }
    if (utils.isWholeNumber(transformedDuration = duration.asWeeks())){
      return {
        duration : transformedDuration,
        durationType : 'weeks'
      }
    }
    if (utils.isWholeNumber(transformedDuration = duration.asDays())){
      return {
        duration : transformedDuration,
        durationType : 'days'
      }
    }
    if (utils.isWholeNumber(transformedDuration = duration.asHours())){
      return {
        duration : transformedDuration,
        durationType : 'hours'
      }
    }
    if (utils.isWholeNumber(transformedDuration = duration.asMinutes())){
      return {
        duration : transformedDuration,
        durationType : 'minutes'
      }
    }
    // if all fail, return as seconds
    transformedDuration = duration.asSeconds();
    return {
      duration : transformedDuration,
      durationType : 'seconds'
    }
  };


  utils.getOrdinal = function(number){
    var b = number % 10;
    var output = (~~ (number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
        (b === 3) ? 'rd' : 'th';
    return number + output;
  };


  /**
   * Get the message for the specified cycle state.
   *
   * Used to ensure we have a friendly message for a state even if one wasn't explicitly defined.
   *
   * @param stateIndex {Number} Required.
   */
  utils.getActionCycleStateMessage = function(action, stateIndex){
    var state = action.cycle.states[stateIndex],
        control = action.control,
        controlName = (control ? control.name : '') || 'accessory',
        result;

    if (state.message) {
      return state.message;
    }

    if (state.controlValue){
      result = "Turn " + controlName + " " + (state.controlValue === '0' ? "off" : "on");
    } else {
      // no control, no message. Hopefully there's a duration. It's a waiting state!
      result = "Wait";
    }

    if (state.duration){
      result += " for " + state.duration + " " + state.durationType; 
    }
    
    return result;
  };

  return utils;
});
