class EventsHelper {

    static onEnterPress(target, action) {
        let event = window.event;
        let key = event.keyCode;

        if (key === 13 && !event.shiftKey) {
            return Reflect.apply(action, target, [event]);
        }
    }
}