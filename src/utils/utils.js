import { AsyncStorage } from 'react-native';
import { colors } from '../common/colors';
import { images } from "../common/images";

// import * as CONST from '../constant'

class UtilService {

    ////////////////////////
    /////  getTimeTime /////
    ////////////////////////
    static getDatebylongNumber(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let year = d.getFullYear()
        return padWithZero(d.getMonth() + 1) + '/' + padWithZero(d.getDate()) + '/' + year.toString().substring(2)
    }

    static getMessage(index) {
        let msg = index;
        switch (index) {
            case '0':
                msg = 'has just started'; break;
            case 1:
                msg = 'has completed'; break;
            case 2:
                msg = 'is cancelled'; break;
            case 3:
                msg = 'is cancelled'; break;
            default:
                msg = 'has just started'; break;
        }
        return msg
    }

    ////////////////////////
    ///// date systeme /////
    ////////////////////////
    static getDateTime(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let year = d.getFullYear()
        return padWithZero(d.getMonth() + 1) + '/' + padWithZero(d.getDate()) + '/' + year.toString().substring(2)
    }

    ////////////////////////
    /////  getTimeTime /////
    ////////////////////////
    static getTimeTime(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let year = d.getFullYear()
        return padWithZero(d.getMonth() + 1) + '/' + padWithZero(d.getDate()) + '/' + year.toString().substring(2)
    }

    static getOrderMessage(data) {
        let msg = "Order will start in 2 days"
        switch (data) {
            case 0:
                msg = "Order is successfully completed!!"; break;
            case 1:
                msg = "Order is happening now!!!"; break;
            case 2:
                msg = "Order will start in 2 days"; break;
            default:
                msg = "Order will start in 2 days"; break;
        }
        return msg
    }

    static getOrderColor(data) {
        let color = colors.SKY;
        switch (data) {
            case 0:
                color = colors.SKY; break;
            case 1:
                color = colors.GREEN; break;
            case 2:
                color = colors.ORANGE; break;
            default:
                color = colors.ORANGE; break;
        }
        return color
    }

    static getHourMinutes(date) {
        let dd = new Date(date)
        let h = dd.getHours(), m = dd.getMinutes()
        let AP = ' AM'
        if (h > 12) {
            h = h - 12;
            AP = ' PM'
        }

        return h + ':' + m + AP
    }

    static getDay(date) {
        let dd = new Date(date)
        let h = dd.getDay()
        console.log('what is day ', h)
        if (h == 0) {
            AP = ' Sunday '
        } if (h == 1) {
            AP = ' Monday '
        } if (h == 2) {
            AP = ' Tuesday '
        } if (h == 3) {
            AP = ' Wednesday '
        } if (h == 4) {
            AP = ' Thirsday '
        } if (h == 5) {
            AP = ' Friday '
        } if (h == 6) {
            AP = ' Saturday '
        }
        return AP
    }

    ////////////////////////
    ///// color system /////
    ////////////////////////
    static getColor(index) {
        if (index == 0) {
            color = colors.CYAN
        }
        if (index == 1) {
            color = colors.GREEN
        }
        if (index == 2) {
            color = colors.ORANGE
        }
        return color
    }

    static getSearchIcon(index) {

        switch (index) {
            case 0:
                img = images.icon.cyan_search; break;
            case 1:
                img = images.icon.green_search; break;
            case 2:
                img = images.icon.orange_search; break;
            default:
                img = images.icon.purple_search; break;
        }
        return img
    }

    static getBackIcon(index) {

        switch (index) {
            case 0:
                img = images.icon.button_backarrow_cyan; break;
            case 1:
                img = images.icon.button_backarrow_green; break;
            case 2:
                img = images.icon.button_backarrow_orange; break;
            default:
                img = images.icon.button_backarrow_purple; break;
        }
        return img
    }

    static getFilterIcon(index) {
        switch (index) {
            case 0:
                img = images.button_filter_cyan; break;
            case 1:
                img = images.button_filter_green; break;
            case 2:
                img = images.button_filter_orange; break;
            default:
                img = images.button_filter_purple; break;
        }
        return img
    }

    static getMapIcon(index) {
        switch (index) {
            case 0:
                img = images.button_mapview_cyan; break;
            case 1:
                img = images.button_mapview_green; break;
            case 2:
                img = images.button_mapview_orange; break;
            default:
                img = images.button_mapview_purple; break;
        }
        return img
    }

    static getRemoveIcon(index) {
        if (index == 0) {
            img = images.icon.cyan_remove
        }
        if (index == 1) {
            img = images.icon.green_remove
        }
        if (index == 2) {
            // img = images.icon.cyan_search
        } else {
            img = images.icon.purple_remove
        }
        return img
    }

    static getShareIcon(index) {

        switch (index) {
            case 0:
                img = images.icon_share_cyan; break;
            case 1:
                img = images.icon_share_green; break;
            default:
                img = images.icon_share_purple; break;
        }
        return img
    }

    static getEditIcon(index) {
        switch (index) {
            case 0:
                img = images.button_edit_cyan; break;
            case 1:
                img = images.button_edit_green; break;
            case 2:
                img = images.button_edit_orange; break;
            default:
                img = images.button_edit_purple; break;
        }
        return img
    }

    static getDuplicateIcon(index) {
        switch (index) {
            case 0:
                img = images.button_duplicate_cyan; break;
            case 1:
                img = images.button_duplicate_green; break;
            default:
                img = images.button_duplicate_purple; break;
        }
        return img
    }

    static getDeleteIcon(index) {
        switch (index) {
            case 0:
                img = images.button_delete_cyan; break;
            case 1:
                img = images.button_delete_green; break;
            case 3:
                img = images.button_delete_orange; break;
            default:
                img = images.button_delete_purple; break;
        }
        return img
    }

    static getMoreIcon(index) {
        switch (index) {
            case 0:
                img = images.button_more_cyan; break;
            case 1:
                img = images.button_more_green; break;
            case 3:
                img = images.button_more_orange; break;
            default:
                img = images.button_more_purple; break;
        }
        return img
    }

    static getMoreActiveIcon(index) {
        switch (index) {
            case 0:
                img = images.button_more_active_cyan; break;
            case 1:
                img = images.button_more_active_green; break;
            case 3:
                img = images.button_more_active_orange; break;
            default:
                img = images.button_more_active_purple; break;
        }
        return img
    }






}

export default UtilService
