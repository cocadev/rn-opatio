import { images } from './images';


class UtilService {

    ////////////////////////
    /////  getTimeTime /////
    ////////////////////////

    static getDate(date) {
        let year = date.substring(2, 4)
        let month = date.substring(5, 7)
        let day = date.substring(8, 10)
        return `${year}/${month}/${day}`
    }

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

    static getDatebylongNumberWithDate(date) {
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
    
    static getMonth(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let month = padWithZero(d.getMonth() + 1)

        if(month == 1) { month = 'JAN'}
        if(month == 2) { month = 'FEB'}
        if(month == 3) { month = 'MAR'}
        if(month == 4) { month = 'APR'}
        if(month == 5) { month = 'MAY'}
        if(month == 6) { month = 'JUN'}
        if(month == 7) { month = 'JUL'}
        if(month == 8) { month = 'AUG'}
        if(month == 9) { month = 'SEP'}
        if(month == 10) { month = 'OCT'}
        if(month == 11) { month = 'NOB'}
        if(month == 12) { month = 'DEC'}

        return month
    } 
    

    static getDatebyshortNumber(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let year = d.getFullYear()
        return  year.toString() + '-' + padWithZero(d.getMonth() + 1) + '-' + padWithZero(d.getDate()) 
    }

    static divideDate(date) {

        console.log('_____________ date _____________', date)

        var month = date.substring(0,2)
        var day = date.substring(3,5)
        var year = date.substring(6,8)
        return "20" + year + '-' + month + '-' + day
    }

    static getDatebyTMDB(date) {
        let d = new Date(date);
        const padWithZero = number => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        let year = d.getFullYear()
        return year + '-' + padWithZero(d.getMonth() + 1) + '-' + padWithZero(d.getDate())
    }

    static getCircleColr(index) {
        let img = index;
        switch (index) {
            case 'success':
                img = images.circleGreen; break;
            case 'orange':
                img = images.circleOrange; break;
            case 'red':
                img = images.circleRed; break;
            default:
                img = images.circleGrey; break;
        }
        return img
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
}

export default UtilService
