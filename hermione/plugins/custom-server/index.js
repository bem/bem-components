'use strict';

const httpServer = require('http-server');

module.exports = function(hermione, opts = {}) {
    const { enabled = true, port = 8080 } = opts,
        server = httpServer.createServer(opts);

    if(!enabled || hermione.isWorker()) {
        return;
    }

    hermione.on(hermione.events.INIT, function () {
        console.info(`server created on http://localhost:${port}`);
        return server.listen({ port });
    });

    hermione.on(hermione.events.END, function() {
        console.info('close server');
        return server.close();
    });
}
