function Mobile(battery) {

    this.battery = battery;
    this.draft = "";
    this.status = false;
    this.inbox = [];
    this.sent = [];

    this.checkStatus = function () {
        return (this.battery >0);
    }

    this.onOff = function () {
        this.status = !this.status;
    }

    this.charge = function () {
        if (this.battery <100)
        this.battery ++;
    }

    this.textMessage = function (text) {
        this.draft = text;
    }

    this.setInbox = function (mobile) {
        this.inbox.push(mobile.draft) ;
        mobile.sent.push(mobile.draft);
        mobile.draft = "";
    }
    this.setSent = function (mobile) {
        this.sent.push(this.draft);
        mobile.inbox.push(this.draft);
        this.draft = "";
    }

    this.getInbox = function () {
        return this.inbox
    }




}
