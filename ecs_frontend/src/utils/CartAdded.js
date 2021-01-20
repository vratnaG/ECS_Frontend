let status = []

export var CartStatus = (function () {
    function initStatus() {
        status = []
    }

    function Added(data) {
        return status[data.bookID] = data
    }


    function getStatus() {
        return status
    }

    return { // public interface
        initStatus,
        Added,
        getStatus
    };
})();
