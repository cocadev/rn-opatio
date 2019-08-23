import { showMessage } from "react-native-flash-message";

export default class ValidationService {

    static signin(email, password) {

        let result = true
        
        if (!password) { 
            showMessage({
                message: "Fail",
                description: "Password can not be null",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        if (!email) { 
            showMessage({
                message: "Fail",
                description: "Email can not be null",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        return result
    }

    static createGIS(title, campo_id) {

        let result = true

        if (!title) { 
            showMessage({
                message: "Fail",
                description: "Title can not be null",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        if (!campo_id) { 
            showMessage({
                message: "Fail",
                description: "Can't find this campo on this company",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        return result
    }

    static createGIS(title, campo_id) {

        let result = true

        if (!title) { 
            showMessage({
                message: "Fail",
                description: "Title can not be null",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        if (!campo_id) { 
            showMessage({
                message: "Fail",
                description: "Can't find this campo on this company",
                type: "danger",
                icon: "danger",
            });
            result = false
        }
        return result
    }

    static addTask(title, date_from, date_to, description, lat, lng, media_id, assigned_to, supervised_by) {

        let result = true
        let message = null;

        if (!title)         { message = 'Title can not be null'    }
        if (!date_from)     { message = 'date_from can not be null'    }
        if (!date_to)       { message = 'date_to can not be null'    }
        if (!description)   { message = 'description can not be null'    }
        if (!lat || !lng)   { message = 'Location can not be null'    }
        if (!media_id)      { message = 'image can not be null'    }
        if (!assigned_to)   { message = 'assigned_to can not be null'    }
        if (!supervised_by) { message = 'supervised_by can not be null'    }

        if(message){
            result = false
            showMessage({
                message: "Fail",
                description: message,
                type: "danger",
                icon: "danger",
            });
        }
        return result
    }

    static addNote(title, note, date, media_id) {

        let result = true
        let message = null;

        if (!title)    { message = 'Title can not be null' }
        if (!date)     { message = 'Date can not be null'  }
        if (!note)     { message = 'Note can not be null'  }
        if (!media_id) { message = 'Image can not be null' }

        if(message){
            result = false
            showMessage({
                message: "Fail",
                description: message,
                type: "danger",
                icon: "danger",
            });
        }
        return result
    }
}