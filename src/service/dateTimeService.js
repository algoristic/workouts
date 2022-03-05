class DateTimeService {
    getFromString(string) {
        return new Date(string);
    }

    getNow() {
        return new Date().toJSON().split("T")[0];
    }
}

export default DateTimeService;
