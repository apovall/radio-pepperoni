import express from "express";
import ViteExpress from "vite-express";
import { WebSocketServer } from 'ws';

const app = express();
const clients = new Set();
ViteExpress.config({mode: 'development'})

const wsServer = new WebSocketServer({
  noServer: true,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  }
});

// Routes
app.get("/message", (_, res) => res.send("Hello from express!"));

const server = app.listen(5173, "0.0.0.0", () => {
  console.log("Server is listening...");
})

// Websockets
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit('connection', socket, request);
  });
});

wsServer.on('connection', (ws) => {
  console.log('WebSocket connection established.');
  clients.add(ws);

  ws.on('message', (message) => {
    const decodedMessage = message.toString();
    console.log('Received:', decodedMessage);
    if (decodedMessage === 'reqData'){
      sendHWInterfaceData()
    } else {
      ws.send(`Echo: ${message}`); // Echo message back to the client
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
    clients.delete(ws);
  });
});

// Function to send a message to all connected clients
function sendHWInterfaceData() {
  clients.forEach((client) => {
    const data = JSON.stringify(
      {
        type: 'HWInterfaceData',
        data: {
          volUp: false,
          volDown: false,
          play: false,
          page: false,
          stationSelectUp: false,
          stationSelectDown: false
        }
      }
    )
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}


ViteExpress.bind(app, server)
// ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));