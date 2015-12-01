


  function dateToRelative(localTime){
    var diff=new Date().getTime()-localTime;
    var ret="";

    var min=60000;
    var hour=3600000;
    var day=86400000;
    var wee=604800000;
    var mon=2629800000;
    var yea=31557600000;

    if (diff<-yea*2)
      ret ="##年内".replace("##",(-diff/yea).toFixed(0));

    else if (diff<-mon*9)
      ret ="##月内".replace("##",(-diff/mon).toFixed(0));

    else if (diff<-wee*5)
      ret ="##周内".replace("##",(-diff/wee).toFixed(0));

    else if (diff<-day*2)
      ret ="##天内".replace("##",(-diff/day).toFixed(0));

    else if (diff<-hour)
      ret ="##小时内".replace("##",(-diff/hour).toFixed(0));

    else if (diff<-min*35)
      ret ="约1小时内";

    else if (diff<-min*25)
      ret ="约半小时内";

    else if (diff<-min*10)
      ret ="几分钟内";

    else if (diff<-min*2)
      ret ="两分钟内";

    else if (diff<=min)
      ret ="现在";

    else if (diff<=min*5)
      ret ="几分钟前";

    else if (diff<=min*15)
      ret ="约十分钟前";

    else if (diff<=min*35)
      ret ="约半小时前";

    else if (diff<=min*75)
      ret ="约1小时前";

    else if (diff<=hour*5)
      ret ="几小时前";

    else if (diff<=hour*24)
      ret ="##小时前".replace("##",(diff/hour).toFixed(0));

    else if (diff<=day*7)
      ret ="##天前".replace("##",(diff/day).toFixed(0));

    else if (diff<=wee*5)
      ret ="##周前".replace("##",(diff/wee).toFixed(0));

    else if (diff<=mon*12)
      ret ="##月前".replace("##",(diff/mon).toFixed(0));

    else
      ret ="##年前".replace("##",(diff/yea).toFixed(0));

    return ret;
  }

  //override date format i18n

  Date.monthNames = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  // Month abbreviations. Change this for local month names
  Date.monthAbbreviations = ["一","二","三","四","五","六","七","八","九","十","十一","十二"];
  // Full day names. Change this for local month names
  Date.dayNames =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  // Day abbreviations. Change this for local month names
  Date.dayAbbreviations = ["日","一","二","三","四","五","六"];
  // Used for parsing ambiguous dates like 1/2/2000 - default to preferring 'American' format meaning Jan 2.
  // Set to false to prefer 'European' format meaning Feb 1
  Date.preferAmericanFormat = false;

  Date.firstDayOfWeek =1;
  Date.defaultFormat = "dd/MM/yyyy";


  Number.decimalSeparator = ".";
  Number.groupingSeparator = ",";
  Number.minusSign = "-";
  Number.currencyFormat = "##0.00";



  var millisInWorkingDay =36000000;
  var workingDaysPerWeek =5;

  function isHoliday(date) {
    var friIsHoly =false;
    var satIsHoly =true;
    var sunIsHoly =true;

    pad = function (val) {
      val = "0" + val;
      return val.substr(val.length - 2);
    };

    var holidays = "#01_01#04_25#08_15#11_01#12_25#12_26#06_02#12_08#05_01#2010_04_05#2010_10_19#2010_05_15#2011_04_04#";

    var ymd = "#" + date.getFullYear() + "_" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
    var md = "#" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
    var day = date.getDay();

    return  (day == 5 && friIsHoly) || (day == 6 && satIsHoly) || (day == 0 && sunIsHoly) || holidays.indexOf(ymd) > -1 || holidays.indexOf(md) > -1;
  }



  var i18n = {
    FORM_IS_CHANGED:"有未保存的修改",
    YES:"是",
    NO:"否",
    FLD_CONFIRM_DELETE:"确认删除?",
    INVALID_DATA:"格式错误.",
    ERROR_ON_FIELD:"字段有错误",
    CLOSE_ALL_CONTAINERS:"全部关闭?",

    DO_YOU_CONFIRM:"确认进行操作?",

    CANNOT_WRITE:                  "CANNOT_WRITE",
    CHANGE_OUT_OF_SCOPE:"NO_RIGHTS_FOR_UPDATE_PARENTS_OUT_OF_EDITOR_SCOPE",
    START_IS_MILESTONE:"START_IS_MILESTONE",
    END_IS_MILESTONE:"END_IS_MILESTONE",
    TASK_HAS_CONSTRAINTS:"TASK_HAS_CONSTRAINTS",
    GANTT_ERROR_DEPENDS_ON_OPEN_TASK:"GANTT_ERROR_DEPENDS_ON_OPEN_TASK",
    GANTT_ERROR_DESCENDANT_OF_CLOSED_TASK:"GANTT_ERROR_DESCENDANT_OF_CLOSED_TASK",
    TASK_HAS_EXTERNAL_DEPS:"TASK_HAS_EXTERNAL_DEPS",
    GANTT_ERROR_LOADING_DATA_TASK_REMOVED:"GANTT_ERROR_LOADING_DATA_TASK_REMOVED",
    ERROR_SETTING_DATES:"ERROR_SETTING_DATES",
    CIRCULAR_REFERENCE:"CIRCULAR_REFERENCE",
    CANNOT_DEPENDS_ON_ANCESTORS:"CANNOT_DEPENDS_ON_ANCESTORS",
    CANNOT_DEPENDS_ON_DESCENDANTS:"CANNOT_DEPENDS_ON_DESCENDANTS",
    INVALID_DATE_FORMAT:"INVALID_DATE_FORMAT",
    TASK_MOVE_INCONSISTENT_LEVEL:"TASK_MOVE_INCONSISTENT_LEVEL",

    GANTT_QUARTER_SHORT:".季度",
    GANTT_SEMESTER_SHORT:"sem."
  };
